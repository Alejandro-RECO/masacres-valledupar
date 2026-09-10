/**
 * Diagrama del territorio de Valledupar.
 *
 * La primera versión de este componente dibujaba un mapa esquemático con
 * siluetas de la Sierra Nevada, la Serranía del Perijá y el curso del río
 * Cesar. Se descartó: esas formas no correspondían a ninguna geografía
 * verificable y el resultado quedaba a medio camino entre mapa y diagrama —
 * parecía un mapa mal dibujado.
 *
 * Este diagrama no simula geografía. Ordena los lugares sobre un eje
 * norte–suroccidente, que es exactamente lo que las fuentes permiten afirmar:
 *
 *  · Atánquez está en la Sierra Nevada, al norte, en el resguardo kankuamo
 *    (Corte IDH, 2004).
 *  · Mariangola y Villa Germania están en la zona suroccidental del municipio,
 *    contiguos entre sí.
 *  · La Mesa – Azúcarbuena está en la convergencia de las vertientes de la
 *    Sierra Nevada.
 *  · Valledupar, la cabecera, está en el valle del río Cesar.
 *
 * El mapa nacional real es el del CNMH, en la lámina anterior.
 */

const ORDEN = ['atanquez', 'valledupar', 'lamesa', 'villagermania', 'mariangola']

export function DiagramaTerritorio({ lugares }) {
  const ordenados = ORDEN.map((id) => lugares.find((l) => l.id === id)).filter(Boolean)

  return (
    <figure className="terr">
      <p className="terr__zona">Sierra Nevada de Santa Marta — norte</p>

      <ol className="terr__eje">
        {ordenados.map((l) => {
          const esCabecera = l.tipo === 'cabecera'
          return (
            <li
              key={l.id}
              className="terr__nodo"
              data-cabecera={esCabecera ? 'true' : 'false'}
              data-momento={l.momento ?? ''}
            >
              <span className="terr__marca" aria-hidden="true" />
              <div className="terr__texto">
                <span className="terr__nombre">{l.nombre}</span>
                <span className="terr__sector">{l.sector}</span>
              </div>
              {l.momento && <span className="terr__momento">momento {l.momento}</span>}
              {esCabecera && <span className="terr__momento terr__momento--cab">cabecera municipal</span>}
            </li>
          )
        })}
      </ol>

      <p className="terr__zona">Suroccidente del municipio</p>

      <figcaption className="pie">
        Diagrama de orden relativo, no un mapa: sitúa los lugares sobre el eje
        norte–suroccidente que afirman las fuentes, sin representar distancias ni
        contornos. Valledupar tiene 26 corregimientos; aquí sólo están los cuatro que
        menciona esta presentación.
      </figcaption>
    </figure>
  )
}
