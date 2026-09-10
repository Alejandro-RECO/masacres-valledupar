import { useState, useId } from 'react'

const fmt = (n) => n.toLocaleString('es-CO')

/* ═══════════════════════════════════════════════════════════════
   Barras de responsables
   Una sola serie. El color codifica énfasis, no identidad: la
   identidad la carga la etiqueta. Por eso no lleva leyenda.
   ═══════════════════════════════════════════════════════════════ */

export function BarrasActores({ series, total, unidad = 'casos', mostrarPct = true }) {
  const [activa, setActiva] = useState(null)
  const max = Math.max(...series.map((s) => s.casos))

  return (
    <div className="grafico">
      <ol className="barras">
        {series.map((s, i) => {
          const pct = s.pct ?? (s.casos / total) * 100
          const encendida = activa === null || activa === i
          return (
            <li
              key={s.actor}
              className="barras__fila"
              onMouseEnter={() => setActiva(i)}
              onMouseLeave={() => setActiva(null)}
              onFocus={() => setActiva(i)}
              onBlur={() => setActiva(null)}
              tabIndex={0}
              data-enfasis={s.enfasis ? 'true' : 'false'}
            >
              <div className="barras__cabeza">
                <span className="barras__actor">
                  {s.actor}
                  {s.inferido && <span className="barras__nota"> (sin atribución en la fuente)</span>}
                </span>
                <span className="barras__valor cifra">
                  {fmt(s.casos)}
                  {mostrarPct && (
                    <span className="barras__pct">
                      {pct.toFixed(1).replace('.', ',')}%
                    </span>
                  )}
                </span>
              </div>
              <div className="barras__pista">
                <div
                  className="barras__marca"
                  style={{
                    width: `${(s.casos / max) * 100}%`,
                    opacity: encendida ? 1 : 0.35,
                  }}
                />
              </div>
            </li>
          )
        })}
      </ol>
      <p className="pie">
        Total: {fmt(total)} {unidad}.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   Proporción — parte dentro de un total
   Dos segmentos con 2px de separación, como pide la especificación
   de marcas. Sin dona: una barra lee mejor una proporción.
   ═══════════════════════════════════════════════════════════════ */

export function Proporcion({ total, parte, etiquetaParte, etiquetaResto, notaParte }) {
  const pct = (parte / total) * 100
  return (
    <div className="proporcion">
      <div className="proporcion__pista" role="img"
        aria-label={`${fmt(parte)} de ${fmt(total)}, equivalente al ${pct.toFixed(1)}%`}>
        <div className="proporcion__parte" style={{ width: `${pct}%` }} />
      </div>
      <div className="proporcion__leyenda">
        <div className="proporcion__item">
          <span className="proporcion__muestra proporcion__muestra--parte" />
          <span>
            <strong className="cifra">{fmt(parte)}</strong> {etiquetaParte}
            {notaParte && <em className="proporcion__nota"> {notaParte}</em>}
          </span>
        </div>
        <div className="proporcion__item">
          <span className="proporcion__muestra proporcion__muestra--resto" />
          <span>
            <strong className="cifra">{fmt(total - parte)}</strong> {etiquetaResto}
          </span>
        </div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   Matriz de modalidades
   Valledupar en los mapas «municipios en estado crítico».
   Presencia/ausencia: una celda llena o vacía, con marca redundante
   además del color (aspa y punto), nunca color solo.
   ═══════════════════════════════════════════════════════════════ */

export function MatrizModalidades({ items }) {
  const presentes = items.filter((i) => i.presente).length
  return (
    <div className="matriz">
      <ol className="matriz__grilla">
        {items.map((it) => (
          <li
            key={it.modalidad}
            className="matriz__celda"
            data-presente={it.presente ? 'true' : 'false'}
            data-destacado={it.destacado ? 'true' : 'false'}
          >
            <span className="matriz__signo" aria-hidden="true">
              {it.presente ? '●' : '—'}
            </span>
            <span className="matriz__nombre">{it.modalidad}</span>
            <span className="matriz__estado">
              {it.presente ? 'en estado crítico' : 'no aparece'}
            </span>
          </li>
        ))}
      </ol>
      <p className="pie">
        Valledupar aparece en <strong>{presentes} de los {items.length}</strong> mapas de
        «municipios en estado crítico» del módulo.
      </p>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   Rangos de período
   Dos mediciones del mismo exterminio sobre ventanas temporales
   distintas. No son alternativas ni contradicción: son recortes
   distintos. Dibujarlas sobre un eje común lo hace evidente.
   ═══════════════════════════════════════════════════════════════ */

export function RangosPeriodo({ rangos, desde, hasta }) {
  const span = hasta - desde
  const pos = (a) => ((a - desde) / span) * 100

  return (
    <div className="rangos">
      <div className="rangos__eje" aria-hidden="true">
        {[desde, desde + Math.round(span / 2), hasta].map((a) => (
          <span key={a} className="rangos__tick cifra" style={{ left: `${pos(a)}%` }}>
            {a}
          </span>
        ))}
      </div>

      {rangos.map((r) => {
        const [ini, fin] = r.periodo.split('–').map((s) => parseInt(s, 10))
        return (
          <div key={r.codigo} className="rangos__fila">
            <div className="rangos__pista">
              <div
                className="rangos__barra"
                style={{ left: `${pos(ini)}%`, width: `${((fin - ini) / span) * 100}%` }}
              >
                <span className="rangos__cifra cifra">{fmt(r.valor)}</span>
              </div>
            </div>
            <div className="rangos__meta">
              <span>
                <strong>{r.periodo}</strong> — {r.etiqueta}
              </span>
              <span className="rangos__detalle">{r.detalle}</span>
              <span className="rangos__fuente">{r.fuente}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════
   Diagrama de alianza
   Lo que la sentencia de la JEP declaró probado: connivencia
   sistemática entre fuerza pública y paramilitares.
   ═══════════════════════════════════════════════════════════════ */

export function DiagramaAlianza({ izquierda, derecha, centro, resultado }) {
  const id = useId()
  return (
    <figure className="alianza">
      <svg viewBox="0 0 620 250" className="alianza__svg" role="img"
        aria-label={`${izquierda.titulo} y ${derecha.titulo} confluyen en ${centro}, con el resultado: ${resultado}`}>
        <defs>
          <marker id={`f-${id}`} markerWidth="9" markerHeight="9" refX="7" refY="4.5" orient="auto">
            <path d="M0 0 L9 4.5 L0 9 z" fill="var(--marca-2)" />
          </marker>
        </defs>

        {/* Cajas de actor */}
        <g>
          <rect x="8" y="24" width="220" height="76" fill="none" stroke="var(--regla)" strokeWidth="2" />
          <text x="24" y="54" className="alianza__t1">{izquierda.titulo}</text>
          <text x="24" y="76" className="alianza__t2">{izquierda.detalle}</text>
        </g>
        <g>
          <rect x="392" y="24" width="220" height="76" fill="none" stroke="var(--regla)" strokeWidth="2" />
          <text x="408" y="54" className="alianza__t1">{derecha.titulo}</text>
          <text x="408" y="76" className="alianza__t2">{derecha.detalle}</text>
        </g>

        {/* Confluencia */}
        <path d="M118 100 L118 140 L310 140" fill="none" stroke="var(--marca-2)" strokeWidth="2" />
        <path d="M502 100 L502 140 L310 140" fill="none" stroke="var(--marca-2)" strokeWidth="2" />
        <path d="M310 140 L310 168" fill="none" stroke="var(--marca-2)" strokeWidth="2"
          markerEnd={`url(#f-${id})`} />

        <text x="310" y="130" textAnchor="middle" className="alianza__t3">{centro}</text>

        {/* Resultado */}
        <rect x="120" y="176" width="380" height="60" fill="var(--marca)" />
        <text x="310" y="204" textAnchor="middle" className="alianza__t4">{resultado}</text>
        <text x="310" y="224" textAnchor="middle" className="alianza__t5">
          declarado probado en sentencia
        </text>
      </svg>
    </figure>
  )
}
