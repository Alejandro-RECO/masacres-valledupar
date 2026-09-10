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

/**
 * Dos actores que confluyen en un resultado.
 *
 * La versión anterior bajaba una vertical desde cada caja y las unía con una
 * horizontal: entre las tres líneas se formaba un rectángulo incompleto que se
 * leía como una caja mal dibujada. Aquí la unión es una T limpia —dos bajadas
 * cortas, una horizontal, un único tronco al centro— y la etiqueta corta la
 * horizontal con un halo, para que se lea como rótulo de la unión y no como
 * texto encerrado.
 */
export function DiagramaAlianza({ izquierda, derecha, centro, resultado, nota }) {
  const id = useId()
  const yCajas = 78 // borde inferior de las cajas de actor
  const yUnion = 118 // altura de la horizontal que las une
  const xA = 135
  const xB = 485
  const xC = 310

  return (
    <figure className="alianza">
      <svg
        viewBox="0 0 620 250"
        className="alianza__svg"
        role="img"
        aria-label={`${izquierda.titulo} y ${derecha.titulo} confluyen en ${centro}. Resultado: ${resultado}.`}
      >
        <defs>
          <marker
            id={`f-${id}`}
            markerWidth="10"
            markerHeight="10"
            refX="8"
            refY="5"
            orient="auto"
          >
            <path d="M0 0 L10 5 L0 10 z" fill="var(--texto-2)" />
          </marker>
        </defs>

        <g>
          <rect x="10" y="8" width="250" height="70" fill="none" stroke="var(--regla)" strokeWidth="2" />
          <text x="28" y="38" className="alianza__t1">{izquierda.titulo}</text>
          <text x="28" y="60" className="alianza__t2">{izquierda.detalle}</text>
        </g>
        <g>
          <rect x="360" y="8" width="250" height="70" fill="none" stroke="var(--regla)" strokeWidth="2" />
          <text x="378" y="38" className="alianza__t1">{derecha.titulo}</text>
          <text x="378" y="60" className="alianza__t2">{derecha.detalle}</text>
        </g>

        {/* Unión en T: dos bajadas, una horizontal, un tronco */}
        <path
          d={`M${xA} ${yCajas} L${xA} ${yUnion} L${xB} ${yUnion} M${xB} ${yCajas} L${xB} ${yUnion}`}
          fill="none"
          stroke="var(--texto-2)"
          strokeWidth="2"
        />
        <path
          d={`M${xC} ${yUnion} L${xC} 168`}
          fill="none"
          stroke="var(--texto-2)"
          strokeWidth="2"
          markerEnd={`url(#f-${id})`}
        />

        {/* El halo corta la horizontal para que la etiqueta rotule la unión */}
        <text x={xC} y={yUnion + 5} textAnchor="middle" className="alianza__t3">
          {centro}
        </text>

        <rect x="90" y="176" width="440" height="66" fill="var(--marca)" />
        <text x="310" y="204" textAnchor="middle" className="alianza__t4">
          {resultado}
        </text>
        {nota && (
          <text x="310" y="226" textAnchor="middle" className="alianza__t5">
            {nota}
          </text>
        )}
      </svg>
    </figure>
  )
}
