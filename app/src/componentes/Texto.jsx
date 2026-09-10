/** Piezas de texto compartidas. */

/** Encabezado de lámina: período, procedencia y bloque. */
export function Encabezado({ periodo, lugar, bloque }) {
  return (
    <div className="encabezado">
      {periodo && <span className="encabezado__periodo">{periodo}</span>}
      {lugar && <span>{lugar}</span>}
      {bloque && <span>{bloque}</span>}
    </div>
  )
}

/**
 * Cita textual. La voz del documento, en serif, para distinguirla de la voz
 * de quien expone.
 */
export function Cita({ children, fuente }) {
  return (
    <blockquote className="cita">
      {children}
      {fuente && <cite className="cita__fuente">{fuente}</cite>}
    </blockquote>
  )
}

/**
 * Pie de fuente. Principio del proyecto: ninguna afirmación sin procedencia,
 * y la procedencia va en la misma pantalla que el dato.
 */
export function Fuente({ children, url, codigo }) {
  return (
    <p className="pie">
      {codigo && <strong>[{codigo}]</strong>} Fuente: {children}
      {url && (
        <>
          {' '}
          <a href={url} target="_blank" rel="noreferrer noopener">
            ver documento
          </a>
        </>
      )}
    </p>
  )
}

/** Un dato grande con su etiqueta. */
export function Dato({ valor, etiqueta, sobrio = false }) {
  return (
    <div>
      <span className={sobrio ? 'dato__valor dato__valor--sobrio cifra' : 'dato__valor cifra'}>
        {typeof valor === 'number' ? valor.toLocaleString('es-CO') : valor}
      </span>
      <span className="dato__etiqueta">{etiqueta}</span>
    </div>
  )
}

/** Lista de puntos de lectura conceptual. */
export function Puntos({ titulo, items }) {
  return (
    <div>
      {titulo && <h3 className="subtitulo">{titulo}</h3>}
      <ul className="puntos">
        {items.map((t, i) => (
          <li key={i}>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

/** Nombres de las víctimas. Se listan porque el módulo insiste en que la
 *  violencia se vuelve invisible cuando las víctimas quedan en el anonimato. */
export function Nombres({ lista, sinIdentificar = 0, nota }) {
  return (
    <div>
      <ul className="nombres">
        {lista.map((n) => (
          <li key={n}>{n}</li>
        ))}
        {Array.from({ length: sinIdentificar }, (_, i) => (
          <li key={`x${i}`} data-anonimo="true">
            Sin identificar
          </li>
        ))}
      </ul>
      {nota && <p className="pie">{nota}</p>}
    </div>
  )
}
