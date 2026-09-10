import {
  CURSO,
  MODULO,
  DEFINICION_MASACRE,
  MUERTES_CONFLICTO,
  MASACRES_NACIONAL,
  RESPONSABLES_MASACRES,
  IDEAS_FUERZA,
  TERRITORIO,
  MOMENTO_1,
  MOMENTO_2,
  MOMENTO_3,
  EN_DISPUTA,
  DESCARTADOS,
} from './datos'
import { CampoFiguras, Umbral } from './componentes/Figura'
import { BarrasActores, Proporcion, Alianza } from './componentes/Graficos'
import { DiagramaTerritorio } from './componentes/Mapa'
import { MapaColombia } from './componentes/MapaColombia'
import { LineaTiempo } from './componentes/LineaTiempo'
import { Encabezado, Cita, Fuente, Dato, Puntos, Nombres } from './componentes/Texto'

/* ═══════════════════════════════════════════════════════════════
   BLOQUE 1 — EL MARCO
   ═══════════════════════════════════════════════════════════════ */

const Portada = () => (
  <>
    <Encabezado periodo="1985 – 2025" lugar="Valledupar, Cesar" />
    <p className="rotulo">{CURSO}</p>
    <h1 className="cartel">
      Masacres
      <br />
      en Valledupar
    </h1>
    <hr className="regla" />
    <div className="duo duo--60-40">
      <p className="entradilla">
        Qué pasa cuando una definición del informe ¡Basta Ya! se lleva a un territorio
        concreto y se le pide que dé cuenta de lo que ocurrió allí.
      </p>
      <div>
        <p className="pie" style={{ marginTop: 0 }}>
          Documento base: {MODULO.titulo}
          <br />
          {MODULO.subtitulo}
          <br />
          {MODULO.entidad}
        </p>
      </div>
    </div>
  </>
)

const PorQueValledupar = () => (
  <>
    <Encabezado periodo="Módulo 1, pág. 11" lugar="Infografía de masacres del propio documento" />
    <h2 className="titulo">Centrémonos en Valledupar, frente a lo que muestra el informe.</h2>
    <div className="duo duo--40-60">
      <div>
        <p className="parrafo">
          El Grupo de Memoria Histórica identificó quince municipios en estado crítico por
          masacres. Valledupar es uno de ellos, junto a El Carmen de Bolívar, Barrancabermeja,
          Turbo y Medellín: nombres que el país asocia de inmediato con la guerra.
        </p>
        <p className="parrafo">
          El de Valledupar casi nunca se menciona.
        </p>
        <div className="datos">
          <Dato valor="7 de 8" etiqueta="mapas de modalidades del módulo en los que aparece Valledupar" />
        </div>
        <p className="pie" style={{ marginTop: 0 }}>
          Aparece en los mapas de masacres, asesinatos selectivos, desapariciones forzadas,
          desplazamiento, secuestros, atentados terroristas y ataques a bienes civiles. Sólo
          falta en el de minas antipersonal.
        </p>
      </div>
      <div>
        <MapaColombia />
      </div>
    </div>
  </>
)

const CifrasNacionales = () => (
  <>
    <Encabezado periodo={MASACRES_NACIONAL.periodo} lugar="Grupo de Memoria Histórica" />
    <h2 className="titulo">Quién masacró en Colombia</h2>
    <div className="duo duo--40-60">
      <div>
        <div className="terr__def">
          <p style={{ margin: 0, fontSize: 'var(--t-sm)', lineHeight: 1.45 }}>
            El módulo llama masacre al «homicidio intencional de <strong>cuatro o más
            personas</strong> en estado de indefensión… que se distingue por la exposición
            pública de la violencia».
          </p>
          <div style={{ marginTop: 'var(--s3)' }}>
            <Umbral victimas={4} tam={24} />
          </div>
          <span className="pie" style={{ marginTop: 0, display: 'block' }}>
            {DEFINICION_MASACRE.fuente}
          </span>
        </div>
        <div className="datos">
          <Dato valor={MASACRES_NACIONAL.casos} etiqueta="masacres documentadas" />
          <Dato valor={MASACRES_NACIONAL.victimas} etiqueta="víctimas" />
        </div>
        <p className="pie">{MUERTES_CONFLICTO.nota}</p>
      </div>
      <div>
        <BarrasActores
          series={RESPONSABLES_MASACRES.series}
          total={RESPONSABLES_MASACRES.total}
          unidad="masacres documentadas"
        />
        <Fuente codigo={RESPONSABLES_MASACRES.codigo}>{RESPONSABLES_MASACRES.fuente}</Fuente>
      </div>
    </div>
  </>
)

const LasQueNadieCuenta = () => (
  <>
    <Encabezado periodo="Módulo 1, pág. 20" lugar="Advertencia del informe" />
    <h2 className="titulo">Las masacres que el país recuerda no son las que más ocurrieron.</h2>
    <div className="duo duo--60-40">
      <div>
        <Cita fuente="Módulo 1, Cátedra Basta Ya, pág. 20">
          <p>«{IDEAS_FUERZA[0].texto}»</p>
        </Cita>
        <p className="parrafo" style={{ marginTop: 'var(--s5)' }}>
          Esta advertencia es la que ordena todo lo que sigue. Los tres momentos que vamos a
          ver son, precisamente, de los que no llenaron titulares.
        </p>
      </div>
      <div>
        <p className="rotulo">De cada 100 masacres documentadas</p>
        <CampoFiguras
          cantidad={75}
          unidad={1}
          tam={17}
          maxFiguras={100}
          color="var(--marca)"
          etiqueta="75 de cada 100 masacres tuvieron entre cuatro y seis víctimas"
          id="anon"
        />
        <p className="pie">
          75 tuvieron cuatro, cinco o seis víctimas y quedaron en el anonimato.
        </p>
      </div>
    </div>
  </>
)

/* ═══════════════════════════════════════════════════════════════
   BLOQUE 2 — EL DILUVIO
   ═══════════════════════════════════════════════════════════════ */

const Territorio = () => (
  <>
    <Encabezado periodo="El territorio" lugar={`${TERRITORIO.municipio}, ${TERRITORIO.departamento}`} />
    <h2 className="titulo">Un municipio de 26 corregimientos, entre dos montañas.</h2>
    <div className="duo duo--60-40">
      <div>
        <DiagramaTerritorio lugares={TERRITORIO.lugares} />
      </div>
      <div>
        <p className="parrafo">
          Valledupar es la cabecera, en el valle del río Cesar. Lo que vamos a contar no
          ocurrió en la ciudad.
        </p>
        <p className="parrafo">
          Ocurrió en sus corregimientos: arriba en la Sierra Nevada, donde vive el pueblo
          kankuamo, y abajo en el suroccidente, en las fincas de las estribaciones.
        </p>
      </div>
    </div>
  </>
)

const Antecedente = () => (
  <>
    <Encabezado periodo={MOMENTO_1.antecedente.fecha} lugar="Mariangola" bloque="Antes del momento 1" />
    <h2 className="titulo">Tres años antes ya había pasado.</h2>
    <div className="duo duo--40-60">
      <div>
        <CampoFiguras cantidad={MOMENTO_1.antecedente.victimas} tam={38} id="ant" />
      </div>
      <div>
        <p className="parrafo">{MOMENTO_1.antecedente.texto}</p>
        <p className="parrafo">
          Cuando en 1998 vuelven a subir, no llegan a un territorio nuevo. Llegan a uno que ya
          había aprendido a callarse.
        </p>
        <Fuente codigo={MOMENTO_1.antecedente.codigo} url={MOMENTO_1.antecedente.url}>
          {MOMENTO_1.antecedente.fuente}
        </Fuente>
      </div>
    </div>
  </>
)

const ElDiluvio = () => (
  <>
    <Encabezado periodo={MOMENTO_1.fecha} lugar={MOMENTO_1.lugar} bloque="Momento 1" />
    <h2 className="cartel" style={{ fontSize: 'var(--t-3xl)' }}>
      El Diluvio
    </h2>
    <div className="duo duo--60-40">
      <div>
        <ol className="puntos">
          {MOMENTO_1.hechos.map((h) => (
            <li key={h.codigo}>
              <span>{h.texto}</span>
            </li>
          ))}
        </ol>
        <p className="parrafo" style={{ marginTop: 'var(--s5)' }}>
          {MOMENTO_1.contexto.texto}
        </p>
        <Fuente codigo="B1–B7" url={MOMENTO_1.fuentePrincipal.url}>
          {MOMENTO_1.fuentePrincipal.medio}, «{MOMENTO_1.fuentePrincipal.titulo}»,{' '}
          {MOMENTO_1.fuentePrincipal.fecha}
        </Fuente>
      </div>
      <div>
        <p className="rotulo">Víctimas</p>
        <CampoFiguras cantidad={MOMENTO_1.victimas} tam={38} id="dil" />
        <div className="datos" style={{ marginTop: 'var(--s6)' }}>
          <Dato valor={MOMENTO_1.victimas} etiqueta="personas asesinadas" />
          <Dato valor="60" etiqueta="hombres armados, según el reporte" sobrio />
        </div>
      </div>
    </div>
  </>
)

const NombresDiluvio = () => (
  <>
    <Encabezado periodo={MOMENTO_1.fecha} lugar="El Diluvio, Mariangola" bloque="Momento 1" />
    <h2 className="titulo">Los nombres que quedaron.</h2>
    <div className="duo">
      <div>
        <Nombres
          lista={MOMENTO_1.victimasNombradas.lista}
          sinIdentificar={MOMENTO_1.victimasNombradas.sinIdentificar}
          nota={MOMENTO_1.victimasNombradas.nota}
        />
      </div>
      <div>
        <p className="parrafo">
          Seis nombres y dos personas sin identificar. Ese desbalance no es un detalle
          administrativo: es lo que el módulo describe cuando dice que la violencia rural
          quedó registrada tarde, mal o nunca.
        </p>
        <Cita fuente="Módulo 1, Cátedra Basta Ya, pág. 19">
          <p>
            «Las instituciones empezaron muy tarde la tarea de tomar nota sobre los múltiples
            horrores que estaban pasando en las zonas de conflicto. Esto ocurrió por
            incapacidad o por falta de voluntad política.»
          </p>
        </Cita>
      </div>
    </div>
  </>
)

/* ═══════════════════════════════════════════════════════════════
   BLOQUE 3 — ATÁNQUEZ
   ═══════════════════════════════════════════════════════════════ */

const PuebloKankuamo = () => (
  <>
    <Encabezado
      periodo="Sierra Nevada de Santa Marta"
      lugar="Resguardo kankuamo, zona rural de Valledupar"
      bloque="Momento 2"
    />
    <h2 className="titulo">La masacre que sigue no cayó sobre cuatro personas. Cayó sobre un pueblo.</h2>
    <div className="duo duo--40-60">
      <div>
        <div className="datos">
          <Dato valor={MOMENTO_2.corteIDH.poblacion} etiqueta="habitantes tenía el pueblo kankuamo en 2004" />
          <Dato
            valor={`${MOMENTO_2.desplazamiento.pct}%`}
            etiqueta="terminó desplazado de su territorio"
            sobrio
          />
        </div>
        <p className="parrafo">
          Atánquez es una de sus doce comunidades, y el ataque no se detuvo allí. En julio de
          2004 la Corte Interamericana tuvo que ordenarle al Estado colombiano que protegiera
          la vida de <strong>todos</strong> los miembros del pueblo kankuamo. Esa orden no se
          dicta por un hecho aislado.
        </p>
        <Fuente codigo={MOMENTO_2.corteIDH.codigo} url={MOMENTO_2.corteIDH.url}>
          Corte Interamericana de Derechos Humanos, resolución del {MOMENTO_2.corteIDH.fecha}
        </Fuente>
      </div>
      <div>
        <p className="rotulo">Las doce comunidades del resguardo</p>
        <ul className="comunidades">
          {MOMENTO_2.corteIDH.comunidades.map((c) => (
            <li key={c} data-marcada={c === 'Atánquez' ? 'true' : 'false'}>
              {c}
              {c === 'Atánquez' && <span className="comunidades__nota">la masacre ocurrió aquí</span>}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

const Atanquez = () => (
  <>
    <Encabezado periodo={MOMENTO_2.fecha} lugar={MOMENTO_2.lugar} bloque="Momento 2" />
    <h2 className="cartel" style={{ fontSize: 'var(--t-3xl)' }}>
      Atánquez
    </h2>
    <div className="duo duo--60-40">
      <div>
        <ol className="puntos">
          {MOMENTO_2.hechos.map((h, i) => (
            <li key={`${h.codigo}-${i}`}>
              <span>{h.texto}</span>
            </li>
          ))}
        </ol>
        <Fuente codigo="C1–C3" url={MOMENTO_2.fuentePrincipal.url}>
          {MOMENTO_2.fuentePrincipal.medio} — {MOMENTO_2.fuentePrincipal.fecha}
        </Fuente>
      </div>
      <div>
        <p className="rotulo">Víctimas</p>
        <CampoFiguras cantidad={MOMENTO_2.victimas} tam={44} id="atq" />
        <p className="parrafo" style={{ marginTop: 'var(--s5)' }}>
          Entre ellos, el mamo del cabildo: la autoridad espiritual del pueblo kankuamo. La
          comunidad quedó sin la persona que guiaba su vida ceremonial.
        </p>
      </div>
    </div>
    <hr className="regla regla--fina" />
    <Nombres lista={MOMENTO_2.victimasNombradas.lista} nota={MOMENTO_2.victimasNombradas.nota} />
  </>
)

const ElCerco = () => (
  <>
    <Encabezado periodo="1982 – 2008" lugar="Pueblo Kankuamo, Sierra Nevada" bloque="Momento 2" />
    <h2 className="titulo">La masacre de Atánquez fue un día. El cerco duró veintiséis años.</h2>
    <div className="duo duo--60-40">
      <div>
        <p className="rotulo">
          Kankuamos asesinados entre 1982 y 2008. Cada figura es una persona.
        </p>
        <CampoFiguras
          cantidad={367}
          unidad={1}
          tam={13}
          maxFiguras={400}
          id="kank"
          etiqueta="367 personas del pueblo kankuamo asesinadas entre 1982 y 2008"
        />
      </div>
      <div>
        <div className="datos">
          <Dato valor={367} etiqueta="kankuamos asesinados" />
          <Dato valor="40%" etiqueta="de la población tuvo que desplazarse" sobrio />
        </div>
        <p className="parrafo">
          Los cuatro de Atánquez son parte de esta cuenta. La Corte Interamericana registró
          166 asesinatos solo entre 1993 y 2003, y en julio de 2004 le ordenó al Estado
          proteger la vida de todo el pueblo kankuamo.
        </p>
        <p className="pie">
          367 asesinatos entre 1982 y 2008, según el diagnóstico del Ministerio del Interior
          citado por <em>El Espectador</em>. Los 166 entre 1993 y 2003 son de la resolución de
          la Corte IDH del 5 de julio de 2004: son ventanas de tiempo distintas, no cifras que
          se contradigan. La cifra de «más de 400» que circula en prensa no se usa aquí porque
          no tiene documento que la respalde.
        </p>
      </div>
    </div>
  </>
)

const RepartoKankuamo = () => (
  <>
    <Encabezado periodo="1982 – 2008" lugar="Pueblo Kankuamo" bloque="Momento 2" />
    <h2 className="titulo">Los tres actores, sobre el mismo pueblo.</h2>
    <div className="duo duo--60-40">
      <div>
        <BarrasActores
          series={MOMENTO_2.responsablesKankuamos.series}
          total={MOMENTO_2.responsablesKankuamos.total}
          unidad="personas asesinadas"
          mostrarPct={false}
        />
        <p className="pie">{MOMENTO_2.responsablesKankuamos.nota}</p>
        <Fuente codigo={MOMENTO_2.responsablesKankuamos.codigo}>
          {MOMENTO_2.responsablesKankuamos.fuente}
        </Fuente>
      </div>
      <div>
        <Puntos
          titulo="Lo que revela ese reparto"
          items={[
            'Los tres actores armados del conflicto están presentes sobre el mismo pueblo.',
            'El módulo lo advierte: todos fueron crueles, pero de manera diferente.',
            'Diecinueve muertes atribuidas al Ejército en una comunidad de seis mil personas.',
          ]}
        />
      </div>
    </div>
  </>
)

const LaPopa = () => {
  const p = MOMENTO_2.laPopa
  return (
    <>
      <Encabezado periodo={p.fechaSentencia} lugar={`${p.unidad}, ${p.sede}`} bloque="Momento 2" />
      <h2 className="titulo">Ciento treinta y cinco civiles, presentados como bajas en combate.</h2>

      {/* Las víctimas ocupan la lámina */}
      <div className="franja">
        <div className="franja__cifra">
          <span className="dato__valor cifra">{p.victimas}</span>
          <span className="dato__etiqueta">
            personas asesinadas entre {p.periodo}. Cada figura es una.
          </span>
        </div>
        <div className="franja__figuras">
          <CampoFiguras
            cantidad={p.victimas}
            unidad={1}
            tam={15}
            maxFiguras={140}
            id="popa"
            etiqueta={`${p.victimas} civiles asesinados y presentados como bajas en combate`}
          />
        </div>
      </div>

      <div className="etnias">
        <p className="rotulo" style={{ marginBottom: 'var(--s3)' }}>
          De ellas, {p.victimasEtnicas.reduce((s, v) => s + v.n, 0)} acreditadas como víctimas
          de pueblos indígenas y comunidades afrodescendientes
        </p>
        <ul>
          {p.victimasEtnicas.map((v) => (
            <li key={v.pueblo}>
              <strong className="cifra">{v.n}</strong>
              <span>{v.pueblo.replace('Personas ', '')}</span>
            </li>
          ))}
        </ul>
      </div>

      <hr className="regla regla--fina" />

      {/* Los responsables, en voz baja */}
      <Alianza
        izquierda={{ titulo: 'Batallón de Artillería No. 2 «La Popa»', detalle: `fuerza pública, ${p.sede}` }}
        derecha={{ titulo: 'Bloque Norte de las AUC', detalle: 'grupo paramilitar' }}
        nexo="alianza y connivencia sistemática"
        veredicto="declarado probado"
      />

      <p className="pie" style={{ marginTop: 'var(--s3)' }}>
        {p.sancionados} militares sancionados, todos en retiro:{' '}
        {p.composicion.map((c) => `${c.n} ${c.rango.toLowerCase()}`).join(', ')}. Sanción
        máxima: {p.sancionMaxima}. {p.nota}
      </p>

      <Fuente codigo={p.codigo} url={p.url}>
        {p.organo}, sentencia del {p.fechaSentencia}
      </Fuente>
    </>
  )
}

/* ═══════════════════════════════════════════════════════════════
   BLOQUE 4 — LA DEUDA
   ═══════════════════════════════════════════════════════════════ */

const Desmovilizacion = () => {
  const d = MOMENTO_3.desmovilizacion
  return (
    <>
      <Encabezado periodo={`${d.inicio} – ${d.fin}`} lugar="Nacional" bloque="Momento 3" />
      <h2 className="titulo">Las armas se entregaron.</h2>
      <div className="duo duo--40-60">
        <div>
          <div className="datos">
            <Dato valor={d.personas} etiqueta="hombres y mujeres desmovilizados" />
            <Dato valor={d.estructuras} etiqueta="estructuras entre bloques y frentes" sobrio />
          </div>
          <Fuente codigo={d.codigo} url={d.url}>
            {d.fuente}
          </Fuente>
        </div>
        <div>
          <p className="parrafo">
            Uno de los actos de desmovilización del Bloque Norte se hizo en La Mesa –
            Azúcarbuena, corregimiento del propio Valledupar.
          </p>
          <div className="disputa">
            <span className="disputa__rotulo">Lo que no afirmamos</span>
            <p style={{ margin: 0, fontSize: 'var(--t-sm)' }}>{d.nota}</p>
          </div>
        </div>
      </div>
    </>
  )
}

const BloqueNorte = () => {
  const b = MOMENTO_3.bloqueNorte
  return (
    <>
      <Encabezado periodo={b.periodo} lugar={b.departamentos.join(' · ')} bloque="Momento 3" />
      <h2 className="titulo">Pero las cuentas no cuadraron.</h2>
      <div className="duo duo--40-60">
        <div>
          <div className="datos">
            <Dato valor={b.masacres} etiqueta={`masacres del Bloque Norte, ${b.periodo}`} />
          </div>
          <p className="parrafo">
            El CNMH documentó <strong>{b.noAdmitidas} masacres más</strong> de las que el
            bloque admitió en el proceso de Justicia y Paz.
          </p>
          <Fuente codigo={b.codigo} url={b.url}>
            {b.fuente}
          </Fuente>
        </div>
        <div>
          <p className="rotulo">Admitidas frente a documentadas</p>
          <Proporcion
            total={b.masacres}
            parte={b.masacres - b.noAdmitidas}
            etiquetaParte="admitidas en Justicia y Paz"
            etiquetaResto="documentadas por el CNMH y no admitidas"
          />
          <p className="pie" style={{ marginTop: 'var(--s5)' }}>
            El módulo ya lo advertía: consolidar las cifras del conflicto «sigue siendo una
            tarea pendiente».
          </p>
        </div>
      </div>
    </>
  )
}

const EcceHomo = () => {
  const e = MOMENTO_3.eccehomo
  return (
    <>
      <Encabezado periodo={`${e.desde} – ${e.hasta}`} lugar={`Cementerio ${e.cementerio}, ${e.ciudad}`} bloque="Momento 3" />
      <h2 className="titulo">Y los cuerpos siguen apareciendo.</h2>
      <div className="duo duo--40-60">
        <div>
          <div className="datos">
            <Dato valor={e.cuerpos} etiqueta="cuerpos exhumados en once días de 2024" />
          </div>
          <p className="parrafo">
            La intervención buscaba identificar a personas asesinadas por la alianza entre
            paramilitares y miembros del Batallón La Popa.
          </p>
          <Fuente codigo={e.codigo} url={e.url}>
            {e.fuente}
          </Fuente>
        </div>
        <div>
          <p className="rotulo">De esos {e.cuerpos} cuerpos</p>
          <Proporcion
            total={e.cuerpos}
            parte={e.posiblesVictimas}
            etiquetaParte="podrían ser víctimas del conflicto armado"
            etiquetaResto="restantes"
            notaParte={`— ${e.entre20y30} de ellos entre 20 y 30 años`}
          />
          <div className="datos" style={{ marginTop: 'var(--s6)' }}>
            <Dato
              valor={MOMENTO_3.desaparecidos.cesar}
              etiqueta={MOMENTO_3.desaparecidos.texto}
            />
          </div>
        </div>
      </div>
    </>
  )
}

const LoQueNoVerificamos = () => (
  <>
    <Encabezado periodo="Nota metodológica" lugar="Lo que decidimos no afirmar" />
    <h2 className="titulo">Un caso que no vamos a contar como hecho.</h2>
    <div className="duo duo--60-40">
      <div>
        <div className="disputa">
          <span className="disputa__rotulo">Hecho en disputa</span>
          <h3 className="subtitulo">{EN_DISPUTA.titulo}</h3>
          <p className="parrafo" style={{ fontSize: 'var(--t-base)' }}>{EN_DISPUTA.reportado}</p>
          <p className="parrafo" style={{ fontSize: 'var(--t-base)', marginBottom: 0 }}>
            {EN_DISPUTA.contradiccion}
          </p>
        </div>
        <p className="parrafo" style={{ marginTop: 'var(--s5)' }}>
          {EN_DISPUTA.porQueImporta}
        </p>
      </div>
      <div>
        <p className="rotulo">Datos que descartamos</p>
        <ul className="nombres">
          {DESCARTADOS.map((d) => (
            <li key={d.dato} data-anonimo="true" style={{ fontStyle: 'normal' }}>
              <strong style={{ display: 'block', color: 'var(--texto)' }}>{d.dato}</strong>
              <span style={{ fontSize: 'var(--t-xs)' }}>
                {d.razon} Se usa: {d.reemplazo}.
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </>
)

const Cierre = () => (
  <>
    <Encabezado periodo="1995 – 2025" lugar="Zona rural de Valledupar" />
    <h2 className="titulo">Treinta años en una línea.</h2>
    <LineaTiempo />
    <hr className="regla regla--fina" />
    <div className="duo duo--60-40">
      <div>
        <Cita fuente="Módulo 1, Cátedra Basta Ya, pág. 28">
          <p>«{IDEAS_FUERZA[3].texto}»</p>
        </Cita>
      </div>
      <div>
        <p className="parrafo">
          Los tres momentos ocurrieron en corregimientos del mismo municipio. El módulo lo
          había marcado en siete de sus ocho mapas. Nosotros solo fuimos a mirar qué había
          detrás de ese punto naranja.
        </p>
      </div>
    </div>
  </>
)

const Fuentes = () => (
  <>
    <Encabezado periodo="Verificación" lugar="10 de septiembre de 2026" />
    <h2 className="titulo">De dónde salió cada dato.</h2>
    <div className="duo">
      <div>
        <p className="rotulo">Judiciales e internacionales</p>
        <ul className="puntos">
          <li>
            <span>
              Corte Interamericana de Derechos Humanos, <em>Asunto Pueblo Indígena de
              Kankuamo</em>, resolución del 5 de julio de 2004.
            </span>
          </li>
          <li>
            <span>
              Jurisdicción Especial para la Paz, sentencia del caso Batallón La Popa,
              18 de septiembre de 2025.
            </span>
          </li>
        </ul>
        <p className="rotulo" style={{ marginTop: 'var(--s5)' }}>Estatales</p>
        <ul className="puntos">
          <li><span>CNMH — Módulo 1, Cátedra Basta Ya (documento base).</span></li>
          <li><span>CNMH — <em>La tierra se quedó sin su canto</em>.</span></li>
          <li><span>JEP y UBPD — exhumación del cementerio Ecce Homo, 2024.</span></li>
          <li><span>Comisión para el Esclarecimiento de la Verdad — desmovilización de las AUC.</span></li>
          <li><span>Unidad de Restitución de Tierras, vía AgroNET.</span></li>
        </ul>
      </div>
      <div>
        <p className="rotulo">Investigación y prensa</p>
        <ul className="puntos">
          <li><span>Rutas del Conflicto — Masacre de Kankuamos.</span></li>
          <li><span><em>El Tiempo</em> — «Cruz Roja confirma masacre en Cesar», 25 de junio de 1998.</span></li>
          <li><span><em>El Espectador</em> — afectación del pueblo Kankuamo.</span></li>
          <li><span><em>El País Vallenato</em> — Villa Germania, 19 de julio de 2025.</span></li>
        </ul>
        <hr className="regla regla--fina" />
        <p className="parrafo" style={{ fontSize: 'var(--t-base)' }}>
          La ficha completa —con el estado de verificación de cada dato, los descartados y las
          correcciones— está en <strong>docs/03-ficha-de-datos-y-fuentes.md</strong> del
          repositorio.
        </p>
      </div>
    </div>
  </>
)

/* ═══════════════════════════════════════════════════════════════
   Índice de láminas
   ═══════════════════════════════════════════════════════════════ */

export const SECCIONES = [
  { id: 'portada', bloque: 0, titulo: 'Portada', registro: 'tinta', C: Portada },
  { id: 'porque', bloque: 0, titulo: 'Por qué Valledupar', registro: 'papel', C: PorQueValledupar },
  { id: 'cifras', bloque: 0, titulo: 'Quién masacró en Colombia', registro: 'papel', C: CifrasNacionales },
  { id: 'anonimas', bloque: 0, titulo: 'Las que nadie cuenta', registro: 'papel', C: LasQueNadieCuenta },

  { id: 'territorio', bloque: 1, titulo: 'El territorio', registro: 'papel', C: Territorio },
  { id: 'antecedente', bloque: 1, titulo: 'Antecedente de 1995', registro: 'tinta', C: Antecedente },
  { id: 'diluvio', bloque: 1, titulo: 'El Diluvio, 1998', registro: 'tinta', C: ElDiluvio },
  { id: 'nombres-1', bloque: 1, titulo: 'Los nombres', registro: 'tinta', C: NombresDiluvio },

  { id: 'kankuamo', bloque: 2, titulo: 'El pueblo Kankuamo', registro: 'papel', C: PuebloKankuamo },
  { id: 'atanquez', bloque: 2, titulo: 'Atánquez, 2002', registro: 'tinta', C: Atanquez },
  { id: 'cerco', bloque: 2, titulo: 'El cerco', registro: 'papel', C: ElCerco },
  { id: 'reparto', bloque: 2, titulo: 'Los tres actores', registro: 'papel', C: RepartoKankuamo },
  { id: 'lapopa', bloque: 2, titulo: 'La sentencia', registro: 'papel', C: LaPopa },

  { id: 'desmovilizacion', bloque: 3, titulo: 'La desmovilización', registro: 'papel', C: Desmovilizacion },
  { id: 'bloquenorte', bloque: 3, titulo: 'Las cuentas del Bloque Norte', registro: 'papel', C: BloqueNorte },
  { id: 'eccehomo', bloque: 3, titulo: 'Cementerio Ecce Homo', registro: 'tinta', C: EcceHomo },
  { id: 'disputa', bloque: 3, titulo: 'Lo que no verificamos', registro: 'papel', C: LoQueNoVerificamos },
  { id: 'cierre', bloque: 3, titulo: 'Cierre', registro: 'tinta', C: Cierre },
  { id: 'fuentes', bloque: 3, titulo: 'Fuentes', registro: 'papel', C: Fuentes },
]
