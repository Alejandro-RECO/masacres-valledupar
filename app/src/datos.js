/**
 * DATOS VERIFICADOS
 *
 * Espejo de docs/03-ficha-de-datos-y-fuentes.md
 * Cada objeto lleva su `fuente`. Ningún componente inventa cifras: todo lo que
 * se dibuja en pantalla sale de aquí, y todo lo que está aquí pasó por
 * verificación contra la fuente original.
 *
 * Códigos (A1, B3, C9…) son los mismos de la ficha, para poder rastrear
 * cualquier número desde la pantalla hasta su fuente.
 */

/* ─────────────────────────────────────────────────────────────
   A. Marco conceptual y cifras nacionales — Módulo 1
   ───────────────────────────────────────────────────────────── */

/** La asignatura. No confundir con el título del documento base: el curso es
 *  Cátedra de Paz, y «Cátedra Basta Ya» es el nombre del programa educativo del
 *  CNMH al que pertenece el módulo que se analiza. */
export const CURSO = 'Cátedra de Paz'

export const MODULO = {
  titulo: 'Módulo 1 — Cátedra Basta Ya',
  subtitulo:
    'Características, dimensiones y modalidades de violencia en el conflicto armado colombiano',
  entidad: 'Centro Nacional de Memoria Histórica',
  informe: '¡Basta Ya! Colombia: memorias de guerra y dignidad',
}

export const DEFINICION_MASACRE = {
  codigo: 'A1',
  termino: 'Masacre',
  texto:
    'Homicidio intencional de cuatro o más personas en estado de indefensión y en iguales circunstancias de modo, tiempo y lugar, que se distingue por la exposición pública de la violencia. Es perpetrada en presencia de otros o se visibiliza ante otros como espectáculo de horror. Es producto del encuentro brutal entre el poder absoluto del victimario y la impotencia total de la víctima.',
  fuente: 'Módulo 1, Cátedra Basta Ya, pág. 2',
}

export const DEFINICION_SEVICIA = {
  codigo: 'A2',
  termino: 'Sevicia',
  texto:
    'Causación de lesiones más allá de las necesarias para matar. Es decir, es el exceso de la violencia y la crueldad extrema que tiene expresión límite el cuerpo mutilado y fragmentado.',
  fuente: 'Módulo 1, Cátedra Basta Ya, pág. 3',
}

export const MUERTES_CONFLICTO = {
  codigo: 'A4',
  total: 218094,
  combatientes: 40787,
  civiles: 177307,
  pctCombatientes: 19,
  pctCiviles: 81,
  periodo: '1958–2012',
  fuente: 'Módulo 1, encabezado común de las infografías (págs. 8–18)',
  nota: 'El texto del módulo (pág. 6) redondea esta cifra a 220.000. La diferencia es interna del documento.',
}

export const MASACRES_NACIONAL = {
  codigo: 'A5',
  casos: 1982,
  victimas: 11751,
  periodo: '1985–2012',
  fuente: 'Módulo 1, infografía «MASACRES». Fuente citada allí: GMH',
}

/** Responsables de las masacres. Una sola serie: el color codifica énfasis,
 *  no identidad. La identidad la carga la etiqueta. */
export const RESPONSABLES_MASACRES = {
  codigo: 'A6',
  fuente: 'Módulo 1, infografía «MASACRES»',
  total: 1982,
  series: [
    { actor: 'Grupos paramilitares', casos: 1166, pct: 58.8, enfasis: true },
    { actor: 'Guerrillas', casos: 343, pct: 17.3, enfasis: false },
    { actor: 'Grupos armados no identificados', casos: 295, pct: 14.9, enfasis: false },
    { actor: 'Fuerza pública', casos: 158, pct: 8.0, enfasis: false },
    {
      actor: 'Paramilitares junto con fuerza pública u otros grupos',
      casos: 20,
      pct: 1.0,
      enfasis: false,
    },
  ],
}

/** Valledupar en los mapas «municipios en estado crítico» del propio módulo.
 *  Comprobación visual directa sobre las páginas renderizadas del PDF. */
export const MODALIDADES_VALLEDUPAR = {
  codigo: 'A12',
  fuente: 'Módulo 1, mapas «MUNICIPIOS EN ESTADO CRÍTICO», págs. 8–18',
  items: [
    { modalidad: 'Masacres', pagina: 12, presente: true, destacado: true },
    { modalidad: 'Asesinatos selectivos', pagina: 9, presente: true },
    { modalidad: 'Desapariciones forzadas', pagina: 13, presente: true },
    { modalidad: 'Desplazamientos forzados', pagina: 14, presente: true },
    { modalidad: 'Secuestros', pagina: 8, presente: true },
    { modalidad: 'Atentados terroristas', pagina: 11, presente: true },
    { modalidad: 'Ataques a bienes civiles', pagina: 17, presente: true },
    { modalidad: 'Minas antipersonal', pagina: 15, presente: false },
  ],
}

/** Ideas fuerza citadas textualmente del módulo. */
export const IDEAS_FUERZA = [
  {
    codigo: 'A7',
    texto:
      'La gran mayoría de las masacres (75%) que el Grupo de Memoria Histórica logró documentar, tuvieron cuatro, cinco o seis víctimas y quedaron en el anonimato, porque al ser frecuentes, y menos espectaculares, fueron rápidamente olvidadas.',
    pagina: 20,
  },
  {
    codigo: 'A8',
    texto:
      'Las masacres fueron el método predilecto de los grupos paramilitares para irrumpir en una zona, y empezar allí a ejercer un control que casi siempre estuvo acompañado de asesinatos selectivos, desapariciones y despojos.',
    pagina: 24,
  },
  {
    codigo: 'A9',
    texto:
      'La violencia ha sido más brutal cuando el grupo armado llega al sitio que quiere dominar. Casi siempre su irrupción se da a sangre y fuego, y cuando logran un relativo control, la violencia se vuelve más selectiva, de baja intensidad.',
    pagina: 19,
  },
  {
    codigo: 'A10',
    texto:
      'Reconocer este pasado implica rechazar la naturalización de la guerra, romper el círculo perverso de justificaciones sobre ella, y condenar sin atenuantes las atrocidades cometidas y sus responsables.',
    pagina: 28,
  },
]

/* ─────────────────────────────────────────────────────────────
   Territorio
   ───────────────────────────────────────────────────────────── */

export const TERRITORIO = {
  municipio: 'Valledupar',
  departamento: 'Cesar',
  corregimientos: 26,
  fuenteCorregimientos: 'Wikipedia — Mariangola (corregimiento de Valledupar)',
  lugares: [
    {
      id: 'valledupar',
      nombre: 'Valledupar',
      tipo: 'cabecera',
      sector: 'Valle del río Cesar',
      x: 50,
      y: 46,
    },
    {
      id: 'atanquez',
      nombre: 'Atánquez',
      tipo: 'momento',
      momento: 2,
      sector: 'Sierra Nevada de Santa Marta — resguardo kankuamo',
      x: 30,
      y: 22,
    },
    {
      id: 'mariangola',
      nombre: 'Mariangola',
      tipo: 'momento',
      momento: 1,
      sector: 'Suroccidente, estribaciones de la Sierra Nevada',
      x: 33,
      y: 74,
    },
    {
      id: 'villagermania',
      nombre: 'Villa Germania',
      tipo: 'contexto',
      sector: 'Suroccidente, contiguo a Mariangola',
      x: 22,
      y: 66,
    },
    {
      id: 'lamesa',
      nombre: 'La Mesa – Azúcarbuena',
      tipo: 'momento',
      momento: 3,
      sector: 'Convergencia de las vertientes de la Sierra Nevada',
      x: 30,
      y: 55,
    },
  ],
  fuenteUbicacion:
    'Ubicación relativa según Wikipedia (Mariangola, Villa Germania) y la resolución de la Corte IDH de 2004 (comunidades kankuamas). Esquema, no a escala.',
}

/* ─────────────────────────────────────────────────────────────
   B. Momento 1 — El Diluvio, Mariangola (1998)
   ───────────────────────────────────────────────────────────── */

export const MOMENTO_1 = {
  n: 1,
  clave: 'diluvio',
  fecha: '21 de junio de 1998',
  fechaCorta: '1998',
  titulo: 'El Diluvio',
  lugar: 'Vereda El Diluvio, corregimiento de Mariangola, zona rural de Valledupar',
  victimas: 8,
  concepto: 'La irrupción',
  entradilla:
    'La masacre como método de entrada a un territorio que se quiere dominar.',

  antecedente: {
    codigo: 'B8',
    fecha: '11 de noviembre de 1995',
    texto:
      'Tres años antes, siete campesinos fueron asesinados en Mariangola. Tras esa masacre se desplazó la mayoría de la población del corregimiento.',
    victimas: 7,
    fuente: 'Unidad de Restitución de Tierras, vía AgroNET (Ministerio de Agricultura), 2017',
    url: 'https://agronet.gov.co/noticias/en-zona-rural-de-valledupar-los-campesinos-restituidos-estan-transformando-sus-tierras-14',
  },

  hechos: [
    {
      codigo: 'B3',
      texto:
        'Llegaron primero a Villa Germania y concentraron a los votantes en una escuela para seleccionar a quienes, según ellos, «tenían problemas».',
    },
    {
      codigo: 'B2',
      texto:
        'Eran unos sesenta hombres que «vestían uniformes de uso privativo del Ejército y portaban fusiles y granadas».',
    },
    {
      codigo: 'B1',
      texto:
        'Subieron a la vereda El Diluvio, en la parte alta. Allí asesinaron a ocho personas «a cuchillo, navaja y machete».',
    },
    {
      codigo: 'B4',
      texto:
        'Dejaron la advertencia de que nadie podía bajar a Mariangola a avisar a las autoridades.',
    },
  ],

  victimasNombradas: {
    codigo: 'B5',
    lista: [
      'Jorge Villalba',
      'Mario de la Torre',
      'Francisco Pabón',
      'Cilia Yaneth Restrepo Cuta',
      'Carmen Antonio Duarte Rojas',
      'Una persona de apellido Villazón',
    ],
    sinIdentificar: 2,
    nota: 'Nombres reportados por los habitantes de Mariangola.',
  },

  contexto: {
    codigo: 'B6-B7',
    texto:
      'Era domingo de segunda vuelta presidencial. La masacre no interrumpió la jornada electoral: la usó como censo.',
    fuentes: [
      'El Tiempo, 25 de junio de 1998',
      'Political Database of the Americas, Georgetown University (fecha de la segunda vuelta)',
    ],
  },

  lectura: {
    titulo: 'Qué dice el módulo sobre esto',
    puntos: [
      'Ocho víctimas: por encima del umbral de cuatro que fija la definición.',
      'Arma blanca sobre población indefensa: es sevicia, «el exceso de la violencia», según el módulo.',
      'La orden de no bajar a avisar es la exposición pública de la violencia: el hecho se hace saber, y ese es su propósito.',
      'Es exactamente la irrupción que describe el informe: la violencia más brutal ocurre cuando el grupo armado llega al sitio que quiere dominar.',
    ],
  },

  fuentePrincipal: {
    medio: 'El Tiempo',
    titulo: 'Cruz Roja confirma masacre en Cesar',
    fecha: '25 de junio de 1998',
    url: 'https://www.eltiempo.com/archivo/documento/MAM-805357',
  },
}

/* ─────────────────────────────────────────────────────────────
   C. Momento 2 — El cerco al pueblo Kankuamo (2002–2005)
   ───────────────────────────────────────────────────────────── */

export const MOMENTO_2 = {
  n: 2,
  clave: 'kankuamo',
  fecha: '8 de diciembre de 2002',
  fechaCorta: '2002–2005',
  titulo: 'Atánquez',
  lugar: 'Resguardo kankuamo de Atánquez, zona rural de Valledupar',
  victimas: 4,
  concepto: 'El cerco',
  entradilla:
    'Cuando los tres actores armados del conflicto operan sobre el mismo pueblo.',

  hechos: [
    {
      codigo: 'C1',
      texto:
        'En la madrugada del domingo 8 de diciembre de 2002, sesenta paramilitares del Bloque Norte de las AUC entraron al resguardo de Atánquez.',
    },
    {
      codigo: 'C3',
      texto:
        'Se dividieron en dos grupos: uno rodeó el pueblo, el otro entró a la plaza de mercado pidiendo cédulas a personas señaladas por encapuchados.',
    },
    {
      codigo: 'C2',
      texto:
        'Alfredo Antonio Borrego les suplicó que no lo retuvieran. Lo asesinaron allí mismo, en la plaza de mercado.',
    },
    {
      codigo: 'C2',
      texto:
        'Los cuerpos de Franklin Manuel Arias y del mamo Abel Alvarado Maestre aparecieron después fuera del pueblo.',
    },
  ],

  victimasNombradas: {
    codigo: 'C2',
    lista: [
      'Alfredo Antonio Borrego',
      'Abel Alvarado Maestre — mamo del cabildo',
      'José Manuel Cáceres',
      'Franklin Manuel Arias Arias',
    ],
    sinIdentificar: 0,
    nota: 'Las cuatro víctimas están identificadas.',
  },

  /** Dos mediciones del mismo exterminio, en dos períodos distintos.
   *  No son alternativas: son ventanas temporales diferentes. */
  cifrasKankuamas: [
    {
      codigo: 'C4',
      valor: 166,
      periodo: '1993–2003',
      etiqueta: 'kankuamos asesinados',
      detalle: '44 de ellos solo hasta agosto de 2003',
      fuente: 'Corte Interamericana de Derechos Humanos, resolución del 5 de julio de 2004',
      url: 'https://hrlibrary.umn.edu/iachr/Espan/Skankuamo7-5-04.html',
    },
    {
      codigo: 'C7',
      valor: 367,
      periodo: '1982–2008',
      etiqueta: 'kankuamos asesinados',
      detalle: '191 por paramilitares · 97 por la guerrilla · 19 atribuidos al Ejército',
      fuente: 'Diagnóstico del Ministerio del Interior, citado por El Espectador',
      url: 'https://www.elespectador.com/colombia-20/jep-y-desaparecidos/falsos-positivos-asi-fue-afectado-por-el-conflicto-el-pueblo-indigena-kankuamo-de-la-sierra-nevada/',
    },
  ],

  /** Reparto de responsabilidad dentro de la cifra del Mininterior (C7). */
  responsablesKankuamos: {
    codigo: 'C7',
    total: 367,
    periodo: '1982–2008',
    series: [
      { actor: 'Grupos paramilitares', casos: 191, enfasis: true },
      { actor: 'Guerrillas', casos: 97, enfasis: false },
      { actor: 'Atribuidos al Ejército', casos: 19, enfasis: false },
      { actor: 'Sin atribución en la fuente', casos: 60, enfasis: false },
    ],
    nota: 'La fuente detalla 307 de los 367 casos. Los 60 restantes no aparecen atribuidos.',
    fuente: 'Ministerio del Interior, citado por El Espectador',
  },

  corteIDH: {
    codigo: 'C5',
    fecha: '5 de julio de 2004',
    organo: 'Corte Interamericana de Derechos Humanos',
    ordena: [
      'Proteger la vida e integridad de todos los miembros del pueblo Kankuamo.',
      'Investigar los hechos e identificar a los responsables.',
      'Garantizar el retorno seguro de quienes fueron desplazados.',
    ],
    poblacion: 6000,
    comunidades: [
      'Atánquez',
      'Chemesquemena',
      'Guatapurí',
      'Las Flores',
      'Pontón',
      'Mojado',
      'Ramalito',
      'Rancho de la Goya',
      'Los Háticos',
      'La Mina',
      'Murillo',
      'Rioseco',
    ],
    url: 'https://hrlibrary.umn.edu/iachr/Espan/Skankuamo7-5-04.html',
  },

  desplazamiento: {
    codigo: 'C8',
    pct: 40,
    texto:
      'Más del 40% de la población kankuama abandonó sus casas y parcelas y salió desplazada.',
    fuente:
      'Jaime Luis Arias, gobernador del resguardo kankuamo, en audiencias de la JEP, citado por El Espectador',
  },

  laPopa: {
    codigo: 'C9',
    fechaSentencia: '18 de septiembre de 2025',
    organo: 'Jurisdicción Especial para la Paz',
    unidad: 'Batallón de Artillería No. 2 «La Popa»',
    sede: 'Valledupar',
    victimas: 135,
    periodo: 'enero de 2002 – julio de 2005',
    sancionados: 12,
    composicion: [
      { rango: 'Oficiales', n: 5 },
      { rango: 'Suboficiales', n: 4 },
      { rango: 'Soldados profesionales', n: 3 },
    ],
    sancionMaxima: '8 años de sanción propia',
    victimasEtnicas: [
      { pueblo: 'Pueblo Kankuamo', n: 10 },
      { pueblo: 'Pueblo Wiwa', n: 4 },
      { pueblo: 'Personas afrodescendientes', n: 6 },
    ],
    alianza:
      'Los crímenes se cometieron mediante alianza y connivencia sistemática entre miembros de la fuerza pública y frentes del Bloque Norte de las AUC.',
    url: 'https://www.jep.gov.co/Sala-de-Prensa/Paginas/-jep-emite-primera-sentencia-por-asesinatos-y-desapariciones-forzadas-ilegitimamente-presentadas-como-bajas-en-combate-en-l.aspx',
    nota: 'La cifra de 127 que circula corresponde a la etapa de imputación, no a la sentencia.',
  },

  lectura: {
    titulo: 'Qué dice el módulo sobre esto',
    puntos: [
      'El módulo advierte que todos los actores fueron crueles, pero de manera diferente. Aquí se ve los tres sobre el mismo pueblo.',
      'Los paramilitares masacran en la plaza de mercado, a la vista.',
      'La fuerza pública mata y disfraza los cuerpos de bajas en combate: el módulo incluye las ejecuciones extrajudiciales dentro de los asesinatos selectivos.',
      'Matar al mamo del cabildo es lo que el módulo llama golpear a los líderes para desestructurar la comunidad.',
    ],
  },

  fuentePrincipal: {
    medio: 'Rutas del Conflicto',
    titulo: 'Masacre de Kankuamos',
    fecha: 'Base de datos CNMH / Verdad Abierta',
    url: 'https://rutasdelconflicto.com/masacres/kankuamos',
  },
}

/* ─────────────────────────────────────────────────────────────
   D. Momento 3 — El desarme y la deuda (2006–2025)
   ───────────────────────────────────────────────────────────── */

export const MOMENTO_3 = {
  n: 3,
  clave: 'deuda',
  fecha: '2006 – 2025',
  fechaCorta: '2006–2025',
  titulo: 'La deuda',
  lugar: 'La Mesa – Azúcarbuena y cementerio Jardines del Ecce Homo, Valledupar',
  concepto: 'Lo que quedó',
  entradilla: 'El territorio donde se entregaron las armas es el mismo donde se buscan los cuerpos.',

  desmovilizacion: {
    codigo: 'D1',
    inicio: '7 de octubre de 2004',
    fin: '11 de abril de 2006',
    estructuras: 36,
    personas: 30944,
    fuente: 'Comisión para el Esclarecimiento de la Verdad',
    url: 'https://www.comisiondelaverdad.co/la-desmovilizacion-de-las-auc',
    nota: 'Balance nacional. Las cifras específicas de la desmovilización del Bloque Norte se descartaron: las fuentes se contradicen en fecha, lugar y número.',
  },

  bloqueNorte: {
    codigo: 'D2',
    masacres: 456,
    periodo: '1996–2006',
    noAdmitidas: 123,
    comandante: 'Rodrigo Tovar Pupo, alias «Jorge 40»',
    departamentos: ['Atlántico', 'Cesar', 'La Guajira', 'Magdalena'],
    fuente:
      'CNMH, «La tierra se quedó sin su canto. Trayectoria e impactos del Bloque Norte»',
    url: 'https://centrodememoriahistorica.gov.co/la-tierra-se-quedo-sin-canto-tomo-ii/',
  },

  eccehomo: {
    codigo: 'D4',
    cementerio: 'Jardines del Ecce Homo',
    ciudad: 'Valledupar',
    cuerpos: 287,
    posiblesVictimas: 103,
    entre20y30: 32,
    desde: '24 de junio de 2024',
    hasta: '5 de julio de 2024',
    entidades: ['Unidad de Investigación y Acusación de la JEP', 'UBPD', 'Grupo Técnico Forense'],
    fuente: 'JEP y UBPD',
    url: 'https://www.jep.gov.co/Sala-de-Prensa/Paginas/jep-y-ubpd-exhumaron-287-cuerpos-en-el-cementerio-jardines-del-ecce-homo-de-valledupar.aspx',
  },

  desaparecidos: {
    codigo: 'D6',
    cesar: 4132,
    texto: 'personas desaparecidas que se buscan en el Cesar',
    fuente: 'JEP y UBPD, 2024',
  },

  restitucion: {
    codigo: 'B9',
    hectareasMariangola: 150,
    familiasMariangola: 5,
    hectareasCesar: 4373,
    familiasCesar: 700,
    fuente: 'Unidad de Restitución de Tierras, vía AgroNET, 2017',
    url: 'https://agronet.gov.co/noticias/en-zona-rural-de-valledupar-los-campesinos-restituidos-estan-transformando-sus-tierras-14',
  },

  lectura: {
    titulo: 'Qué dice el módulo sobre esto',
    puntos: [
      'El módulo advierte que el rearme paramilitar sigue siendo un desafío. El informe se cerró en 2013 y la deuda seguía abierta.',
      'Que 456 masacres del Bloque Norte superen en 123 a las admitidas confirma lo que dice el módulo: consolidar las cifras sigue siendo una tarea pendiente.',
      'Los 103 cuerpos posiblemente del conflicto en el Ecce Homo son la desaparición forzada que el módulo llama «el crimen perfecto»: sin cuerpo, el duelo queda suspendido.',
    ],
  },
}

export const MOMENTOS = [MOMENTO_1, MOMENTO_2, MOMENTO_3]

/* ─────────────────────────────────────────────────────────────
   E. Lo que NO se pudo verificar
   ───────────────────────────────────────────────────────────── */

export const EN_DISPUTA = {
  codigo: 'E1',
  titulo: 'Villa Germania, 18 de julio de 2025',
  reportado:
    'Indepaz y varios medios reportaron seis personas asesinadas en el corregimiento de Villa Germania, zona rural de Valledupar.',
  contradiccion:
    'Las autoridades confirmaron el hallazgo de un solo cuerpo. Después circuló un video en el que aparecen con vida personas que habían sido dadas por muertas.',
  decision:
    'No se usa como evidencia. Se expone como lo que es: un hecho en disputa.',
  porQueImporta:
    'El propio módulo explica por qué pasa esto. Las instituciones empezaron tarde a tomar nota, los medios dejaron de informar la violencia que les parece rutinaria, y los actores armados imponen silencio para impedir la denuncia. Veintisiete años después de El Diluvio, sigue siendo difícil establecer qué ocurrió en la zona rural de Valledupar.',
  fuentes: [
    {
      medio: 'El Tiempo',
      url: 'https://www.eltiempo.com/colombia/otras-ciudades/masacre-en-las-inmediaciones-de-valledupar-seis-jovenes-fueron-asesinados-en-el-corregimiento-de-villa-germania-3473389',
    },
    {
      medio: 'El País Vallenato',
      url: 'https://www.elpaisvallenato.com/2025/07/19/confusion-y-temor-en-villa-germania-por-presunta-masacre-victimas-aparecen-con-vida-en-video-tras-ser-dadas-por-muertas/',
    },
  ],
}

export const DESCARTADOS = [
  {
    dato: '«Más de 400 kankuamos asesinados»',
    razon: 'Circula en prensa sin documento que lo sustente.',
    reemplazo: '166 (Corte IDH, 1993–2003) y 367 (Mininterior, 1982–2008)',
  },
  {
    dato: '«282 cuerpos exhumados del Ecce Homo»',
    razon: 'Cifra de un boletín de la Gobernación del Cesar.',
    reemplazo: '287, cifra oficial de la JEP y la UBPD, que hicieron la exhumación',
  },
  {
    dato: '«127 víctimas del Batallón La Popa»',
    razon: 'Corresponde a la etapa de imputación, no a la sentencia.',
    reemplazo: '135, cifra de la sentencia del 18 de septiembre de 2025',
  },
  {
    dato: '«2.545 desmovilizados del Bloque Norte en La Mesa»',
    razon: 'Las fuentes se contradicen en fecha, lugar y número.',
    reemplazo: 'Solo el balance nacional de la Comisión de la Verdad',
  },
]

/* ─────────────────────────────────────────────────────────────
   Bloques de exposición — 4 integrantes, 20 minutos
   ───────────────────────────────────────────────────────────── */

export const BLOQUES = [
  { id: 'apertura', nombre: 'El marco', integrante: 1, minutos: 5 },
  { id: 'momento1', nombre: 'El Diluvio', integrante: 2, minutos: 5 },
  { id: 'momento2', nombre: 'Atánquez', integrante: 3, minutos: 5 },
  { id: 'cierre', nombre: 'La deuda', integrante: 4, minutos: 5 },
]
