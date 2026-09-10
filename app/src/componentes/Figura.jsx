/**
 * El pictograma humano.
 *
 * Es la unidad de conteo del CNMH: en las infografías del informe, cada figura
 * representa un número de personas y la última figura aparece en negro para
 * marcar el residuo. Aquí se reproduce esa gramática.
 *
 * Principio del proyecto: ninguna cifra aparece sin su unidad humana al lado.
 */

const TRAZO =
  'M12 9.4c-3.55 0-5.7 2.2-5.7 5.85V22h2.45v11.2h2.2V22h2.1v11.2h2.2V22h2.45v-6.75c0-3.65-2.15-5.85-5.7-5.85z'

/** Una figura. `llenado` entre 0 y 1 permite representar fracciones. */
export function Figura({ tam = 22, color = 'currentColor', llenado = 1, id }) {
  const alto = tam * (38 / 24)
  const clipId = `fig-${id}`
  const parcial = llenado > 0 && llenado < 1

  return (
    <svg
      width={tam}
      height={alto}
      viewBox="0 0 24 38"
      aria-hidden="true"
      focusable="false"
      style={{ display: 'block', flex: 'none' }}
    >
      {parcial && (
        <clipPath id={clipId}>
          <rect x="0" y="0" width={24 * llenado} height="38" />
        </clipPath>
      )}
      <g
        fill={color}
        clipPath={parcial ? `url(#${clipId})` : undefined}
        opacity={llenado === 0 ? 0.18 : 1}
      >
        <circle cx="12" cy="4.6" r="4.3" />
        <path d={TRAZO} />
      </g>
      {parcial && (
        <g fill={color} opacity="0.18">
          <circle cx="12" cy="4.6" r="4.3" />
          <path d={TRAZO} />
        </g>
      )}
    </svg>
  )
}

/**
 * Un campo de figuras.
 *
 * @param cantidad  personas representadas
 * @param unidad    personas por figura (1 = una figura por persona)
 * @param maxFiguras tope de figuras dibujadas; por encima se sube la unidad
 */
export function CampoFiguras({
  cantidad,
  unidad = 1,
  tam = 22,
  color = 'var(--marca)',
  colorResto = 'var(--marca-2)',
  maxFiguras = 60,
  etiqueta,
  id = 'c',
}) {
  let u = unidad
  if (cantidad / u > maxFiguras) u = Math.ceil(cantidad / maxFiguras)

  const enteras = Math.floor(cantidad / u)
  const resto = (cantidad % u) / u
  const figuras = []

  for (let i = 0; i < enteras; i++) {
    figuras.push(<Figura key={i} tam={tam} color={color} id={`${id}-${i}`} />)
  }
  if (resto > 0) {
    figuras.push(
      <Figura key="r" tam={tam} color={colorResto} llenado={resto} id={`${id}-r`} />,
    )
  }

  return (
    <div>
      <div
        role="img"
        aria-label={
          etiqueta ||
          `${cantidad.toLocaleString('es-CO')} personas representadas en pictogramas`
        }
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: `${Math.max(3, tam * 0.22)}px`,
          alignItems: 'flex-end',
        }}
      >
        {figuras}
      </div>
      {u > 1 && (
        <p
          className="pie"
          style={{ marginTop: 'var(--s3)' }}
        >
          Cada figura representa {u.toLocaleString('es-CO')} personas.
        </p>
      )}
    </div>
  )
}

/**
 * El umbral de la definición: cuatro figuras.
 * El módulo define masacre desde cuatro víctimas. Este componente hace visible
 * ese umbral y, opcionalmente, cuántas víctimas hubo por encima de él.
 */
export function Umbral({ victimas, tam = 34 }) {
  const total = Math.max(victimas, 4)
  return (
    <div>
      <div
        role="img"
        aria-label={`${victimas} víctimas. El umbral de la definición de masacre son cuatro personas.`}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: `${tam * 0.26}px`,
          alignItems: 'start',
        }}
      >
        {Array.from({ length: total }, (_, i) => (
          /* Cada celda reserva la misma fila de etiqueta, esté ocupada o no.
             Si no, la celda con etiqueta crece y desalinea su figura. */
          <div
            key={i}
            style={{
              display: 'grid',
              gridTemplateRows: 'auto 1.35em',
              justifyItems: 'center',
              gap: '5px',
            }}
          >
            <Figura
              tam={tam}
              id={`u-${i}`}
              color={i < victimas ? 'var(--marca)' : 'transparent'}
              llenado={i < victimas ? 1 : 0}
            />
            <span
              aria-hidden="true"
              style={{
                fontSize: 'var(--t-xs)',
                fontWeight: 700,
                color: 'var(--grave)',
                letterSpacing: '0.04em',
                whiteSpace: 'nowrap',
                visibility: i === 3 ? 'visible' : 'hidden',
              }}
            >
              umbral
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
