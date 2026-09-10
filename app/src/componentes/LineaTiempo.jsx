/**
 * Línea de tiempo del caso.
 *
 * El contenido sí es una secuencia cronológica, así que ordenarlo sobre un eje
 * temporal es información, no decoración.
 *
 * El eje es lineal a propósito. El vacío entre 2006 y 2024 es el argumento del
 * tercer momento: comprimirlo para que las etiquetas quepan mejor sería mentir
 * sobre la forma del problema. Para que las etiquetas quepan sin solaparse se
 * reparten en carriles, no se mueve el eje.
 *
 * Los hitos en disputa llevan trazo interrumpido: la forma dice que ese hecho
 * no está establecido.
 */

/* Los textos se mantienen cortos a propósito: la etiqueta ubica, quien expone
   narra. Una etiqueta de tres líneas invade el carril de al lado. */
export const HITOS = [
  { anio: 1995, mes: 11, texto: 'Masacre en Mariangola', tipo: 'hecho' },
  { anio: 1998, mes: 6, texto: 'El Diluvio: 8 personas', tipo: 'momento' },
  { anio: 2002, mes: 12, texto: 'Atánquez: 4 kankuamos', tipo: 'momento' },
  { anio: 2004, mes: 7, texto: 'Medidas de la Corte IDH', tipo: 'justicia' },
  { anio: 2006, mes: 4, texto: 'Fin de la desmovilización', tipo: 'hecho' },
  { anio: 2024, mes: 7, texto: '287 cuerpos, Ecce Homo', tipo: 'momento' },
  { anio: 2025, mes: 7, texto: 'Villa Germania: en disputa', tipo: 'disputado' },
  { anio: 2025, mes: 9, texto: 'Sentencia JEP, La Popa', tipo: 'justicia' },
]

const DESDE = 1994
const HASTA = 2026
const ANCHO_ETIQUETA = 14 // % del ancho total
const ALTO_CARRIL = 44 // px; una etiqueta de dos líneas mide unos 30
const ALTO_ETIQUETA = 30

/** Reparte los hitos en carriles para que ninguna etiqueta pise a otra. */
function repartirEnCarriles(hitos) {
  const conPos = hitos
    .map((h) => ({
      ...h,
      pos: ((h.anio + (h.mes - 1) / 12 - DESDE) / (HASTA - DESDE)) * 100,
    }))
    .sort((a, b) => a.pos - b.pos)

  const finDeCarril = [] // posición donde termina la última etiqueta de cada carril

  return conPos.map((h) => {
    // La etiqueta se ancla a la izquierda salvo que se salga por el borde derecho.
    const derecha = h.pos + ANCHO_ETIQUETA > 100
    const inicio = derecha ? h.pos - ANCHO_ETIQUETA : h.pos
    const fin = inicio + ANCHO_ETIQUETA

    let carril = finDeCarril.findIndex((f) => inicio > f + 1)
    if (carril === -1) {
      carril = finDeCarril.length
      finDeCarril.push(fin)
    } else {
      finDeCarril[carril] = fin
    }
    return { ...h, carril, derecha }
  })
}

export function LineaTiempo({ hitos = HITOS }) {
  const repartidos = repartirEnCarriles(hitos)
  const carriles = Math.max(...repartidos.map((h) => h.carril)) + 1
  const altoEtiquetas = carriles * ALTO_CARRIL
  const yMarca = altoEtiquetas + 10

  return (
    <figure className="tiempo">
      <div className="tiempo__pista" style={{ height: `${altoEtiquetas + 54}px` }}>
        {repartidos.map((h, i) => {
          const yEtiqueta = altoEtiquetas - (h.carril + 1) * ALTO_CARRIL
          // La guía arranca donde termina la etiqueta, para no tacharle el texto.
          const yGuia = yEtiqueta + ALTO_ETIQUETA
          return (
            <div key={i} className="tiempo__hito" data-tipo={h.tipo}>
              <span
                className="tiempo__guia"
                style={{ left: `${h.pos}%`, top: `${yGuia}px`, height: `${yMarca - yGuia}px` }}
              />
              <span
                className="tiempo__etq"
                style={{
                  left: h.derecha ? 'auto' : `${h.pos}%`,
                  right: h.derecha ? `${100 - h.pos}%` : 'auto',
                  top: `${yEtiqueta}px`,
                  textAlign: h.derecha ? 'right' : 'left',
                }}
              >
                <strong className="cifra">{h.anio}</strong>
                <span>{h.texto}</span>
              </span>
              <span className="tiempo__marca" style={{ left: `${h.pos}%`, top: `${yMarca}px` }} />
            </div>
          )
        })}

        <div className="tiempo__eje" style={{ top: `${altoEtiquetas + 16}px` }} />

        {[1995, 2000, 2005, 2010, 2015, 2020, 2025].map((a) => (
          <span
            key={a}
            className="tiempo__anio cifra"
            style={{
              left: `${((a - DESDE) / (HASTA - DESDE)) * 100}%`,
              top: `${altoEtiquetas + 26}px`,
            }}
          >
            {a}
          </span>
        ))}
      </div>

      <figcaption className="pie">
        Cuadro relleno: los tres momentos del trabajo. Contorno turquesa: decisiones
        judiciales. Trazo interrumpido: hecho reportado pero no confirmado. El eje es lineal —
        el vacío entre 2006 y 2024 es real.
      </figcaption>
    </figure>
  )
}
