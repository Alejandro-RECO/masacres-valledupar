import { useState } from 'react'
import { VIEW_BOX, COLOMBIA, MUNICIPIOS_CRITICOS, FUENTE_MAPA } from '../mapa-colombia'

/**
 * Mapa de Colombia, en SVG.
 *
 * La silueta y las coordenadas salen de vectorizar el mapa «Municipios en
 * estado crítico» de la infografía de masacres del Módulo 1. No es un dibujo
 * nuestro ni un mapa traído de otro lado: es el mapa del documento base,
 * convertido a vectores. Ver src/mapa-colombia.js.
 *
 * Al ser SVG responde al registro de color, escala sin perder nitidez y
 * permite que cada municipio diga su nombre al pasar por encima.
 */

const DESTACADO = 'Valledupar'

export function MapaColombia() {
  const [sobre, setSobre] = useState(null)

  return (
    <figure className="mapaco">
      <svg
        viewBox={VIEW_BOX}
        className="mapaco__svg"
        role="img"
        aria-label={
          'Mapa de Colombia con los quince municipios en estado crítico por masacres según el Grupo de Memoria Histórica: ' +
          MUNICIPIOS_CRITICOS.map((m) => m.nombre).join(', ') +
          '. Valledupar aparece destacado.'
        }
      >
        <path d={COLOMBIA} className="mapaco__tierra" />

        {MUNICIPIOS_CRITICOS.map((m) => {
          const esValledupar = m.nombre === DESTACADO
          const activo = sobre === m.nombre
          return (
            <g
              key={m.nombre}
              className="mapaco__mun"
              data-destacado={esValledupar ? 'true' : 'false'}
              onMouseEnter={() => setSobre(m.nombre)}
              onMouseLeave={() => setSobre(null)}
            >
              {/* Zona de contacto más grande que la marca */}
              <circle cx={m.x} cy={m.y} r="18" fill="transparent" />
              {esValledupar && <circle cx={m.x} cy={m.y} r="22" className="mapaco__anillo" />}
              <circle cx={m.x} cy={m.y} r={esValledupar ? 9 : 6} className="mapaco__punto" />

              {(esValledupar || activo) && (
                <text
                  x={m.x + 30}
                  y={m.y + 7}
                  className={esValledupar ? 'mapaco__etq mapaco__etq--fuerte' : 'mapaco__etq'}
                >
                  {m.nombre}
                </text>
              )}
            </g>
          )
        })}
      </svg>

      <figcaption className="pie">
        Los quince municipios que el Grupo de Memoria Histórica marcó en estado crítico por
        masacres. Pase el cursor sobre un punto para ver su nombre. Silueta y posiciones
        vectorizadas del mapa original — {FUENTE_MAPA}.
      </figcaption>
    </figure>
  )
}
