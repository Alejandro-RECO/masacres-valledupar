import { useCallback, useEffect, useRef, useState } from 'react'
import { SECCIONES } from './secciones'
import { BLOQUES } from './datos'

export default function App() {
  const [i, setI] = useState(0)
  const [indiceAbierto, setIndiceAbierto] = useState(false)
  const [ayudaVisible, setAyudaVisible] = useState(true)
  const rueda = useRef(0)
  const tactil = useRef(null)

  const total = SECCIONES.length
  const actual = SECCIONES[i]
  const bloque = BLOQUES[actual.bloque] ?? BLOQUES[0]

  const ir = useCallback(
    (n) => {
      setI((prev) => Math.min(total - 1, Math.max(0, typeof n === 'function' ? n(prev) : n)))
      setAyudaVisible(false)
    },
    [total],
  )

  const siguiente = useCallback(() => ir((p) => p + 1), [ir])
  const anterior = useCallback(() => ir((p) => p - 1), [ir])

  /* Teclado */
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setIndiceAbierto(false)
        return
      }
      if (indiceAbierto) return

      switch (e.key) {
        case 'ArrowRight':
        case 'ArrowDown':
        case 'PageDown':
        case ' ':
          e.preventDefault()
          siguiente()
          break
        case 'ArrowLeft':
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault()
          anterior()
          break
        case 'Home':
          e.preventDefault()
          ir(0)
          break
        case 'End':
          e.preventDefault()
          ir(total - 1)
          break
        case 'i':
        case 'I':
          setIndiceAbierto(true)
          break
        default:
          break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [siguiente, anterior, ir, total, indiceAbierto])

  /* Rueda del ratón, con freno para que un solo gesto no salte varias láminas */
  useEffect(() => {
    const onWheel = (e) => {
      if (indiceAbierto) return
      const ahora = Date.now()
      if (ahora - rueda.current < 700) return
      if (Math.abs(e.deltaY) < 24) return
      rueda.current = ahora
      e.deltaY > 0 ? siguiente() : anterior()
    }
    window.addEventListener('wheel', onWheel, { passive: true })
    return () => window.removeEventListener('wheel', onWheel)
  }, [siguiente, anterior, indiceAbierto])

  /* Deslizar en pantalla táctil */
  const onTouchStart = (e) => {
    tactil.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }
  const onTouchEnd = (e) => {
    if (!tactil.current) return
    const dx = e.changedTouches[0].clientX - tactil.current.x
    const dy = e.changedTouches[0].clientY - tactil.current.y
    if (Math.abs(dx) > 60 && Math.abs(dx) > Math.abs(dy)) {
      dx < 0 ? siguiente() : anterior()
    }
    tactil.current = null
  }

  return (
    <div
      className={`escena reg-${actual.registro}`}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <h1 className="solo-lectores">
        Masacres en Valledupar — Cátedra de Paz. Lámina {i + 1} de {total}: {actual.titulo}
      </h1>

      {SECCIONES.map((s, n) => (
        <section
          key={s.id}
          className="lamina"
          data-activa={n === i ? 'true' : 'false'}
          aria-hidden={n === i ? 'false' : 'true'}
        >
          <div className="lamina__interior">
            <s.C />
          </div>
        </section>
      ))}

      {/* El riel: la banda turquesa del informe, convertida en navegación */}
      <nav className="riel" aria-label="Navegación de la presentación">
        <span className="riel__bloque">{bloque.nombre}</span>

        <div className="riel__marcas">
          {SECCIONES.map((s, n) => (
            <button
              key={s.id}
              className="riel__marca"
              data-actual={n === i ? 'true' : 'false'}
              data-vista={n < i ? 'true' : 'false'}
              onClick={() => ir(n)}
              aria-label={`Ir a la lámina ${n + 1}: ${s.titulo}`}
              aria-current={n === i ? 'true' : undefined}
            />
          ))}
        </div>

        <button
          className="riel__contador"
          onClick={() => setIndiceAbierto(true)}
          aria-label="Abrir el índice general"
        >
          {String(i + 1).padStart(2, '0')} / {total}
        </button>
      </nav>

      <div className="reloj" style={{ width: `${((i + 1) / total) * 100}%` }} />

      <div className="teclas" data-oculto={ayudaVisible ? 'false' : 'true'}>
        <span>
          <kbd>←</kbd> <kbd>→</kbd> cambiar de lámina
        </span>
        <span>
          <kbd>I</kbd> índice
        </span>
      </div>

      {indiceAbierto && (
        <div className="indice" role="dialog" aria-modal="true" aria-label="Índice general">
          <div style={{ display: 'flex', justifyContent: 'space-between', gap: 'var(--s5)' }}>
            <div>
              <p className="rotulo" style={{ color: '#9a9490' }}>
                Cuatro bloques · veinte minutos
              </p>
              <h2 className="titulo" style={{ color: '#f5f2ef', marginBottom: 0 }}>
                Índice
              </h2>
            </div>
            <button className="boton" style={{ color: '#09b9a7', alignSelf: 'start' }}
              onClick={() => setIndiceAbierto(false)}>
              Cerrar
            </button>
          </div>

          {BLOQUES.map((b, bi) => (
            <div key={b.id} style={{ marginTop: 'var(--s6)' }}>
              <p className="rotulo" style={{ color: '#09b9a7' }}>
                Integrante {b.integrante} — {b.nombre} · {b.minutos} min
              </p>
              <div className="indice__grilla">
                {SECCIONES.map((s, n) =>
                  s.bloque === bi ? (
                    <button
                      key={s.id}
                      className="indice__item"
                      data-actual={n === i ? 'true' : 'false'}
                      onClick={() => {
                        ir(n)
                        setIndiceAbierto(false)
                      }}
                    >
                      <span className="indice__num">{String(n + 1).padStart(2, '0')}</span>
                      <span className="indice__titulo">{s.titulo}</span>
                      <span className="indice__bloque">
                        {s.registro === 'tinta' ? 'registro del hecho' : 'registro de la cifra'}
                      </span>
                    </button>
                  ) : null,
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
