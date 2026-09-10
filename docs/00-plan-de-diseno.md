# Plan de diseño — Cátedra de Paz · Masacres en Valledupar

Este documento fija el sistema visual antes de escribir código. Todos los valores
de color están **muestreados directamente del PDF** `No mataras/modulo1.pdf`
(Módulo 1, Cátedra Basta Ya, Centro Nacional de Memoria Histórica). Ninguno fue
inventado ni "inspirado en": se extrajeron píxel a píxel con PyMuPDF.

---

## 1. Sujeto, audiencia y trabajo del diseño

**Sujeto.** Las masacres cometidas en la zona rural de Valledupar, leídas con el
marco conceptual del Módulo 1 de la Cátedra Basta Ya (CNMH), que es el
documento base de la asignatura.

**Audiencia.** El curso de Cátedra de Paz y el docente. Personas que no conocen
el caso y que deben salir entendiendo cómo un concepto del informe se materializa
en un territorio concreto.

**Trabajo del diseño.** Sostener veinte minutos de exposición oral sin competir
con quien habla, y hacer que cada cifra llegue con su fuente a la vista.

**Restricción ética.** El tema son personas asesinadas. La sobriedad no es una
preferencia estética: es un requisito. Nada que resulte lúdico, publicitario o
espectacular.

---

## 2. Color

Valores muestreados del documento original:

| Token | Hex | Origen en el PDF | Uso |
|---|---|---|---|
| `--papel` | `#F0F0F0` | Fondo de todas las páginas | Fondo del registro de la cifra |
| `--papel-hondo` | `#E4E4E2` | Superficies hundidas | Bloques de dato, tablas |
| `--tinta` | `#231F20` | Color del texto corrido | Fondo del registro del hecho |
| `--carbon` | `#2C2F31` | Titulares de las infografías | Títulos sobre papel |
| `--turquesa` | `#09B9A7` | Banda vertical "CIFRAS" | Riel de navegación, identidad |
| `--ambar` | `#F6A340` | Cifras y pictogramas | El color del dato |
| `--terracota` | `#7E3D1E` | Derivado de `#904726` (barra "paramilitares") | Texto de acento sobre papel |
| `--granate` | `#941A20` | Acento del documento | Marcas graves |
| `--pizarra` | `#76797B` | Grises de los mapas | Texto secundario, marcas recesivas |

### El hallazgo que ordena el sistema

Se calcularon los contrastes WCAG de cada color contra cada superficie:

| Color | vs papel `#F0F0F0` | vs tinta `#231F20` |
|---|---|---|
| Turquesa `#09B9A7` | **2.17:1** — solo decorativo | **6.60:1** — texto AA |
| Ámbar `#F6A340` | **1.80:1** — solo decorativo | **7.94:1** — texto AA |
| Terracota `#7E3D1E` | **7.16:1** — texto AA | 2.00:1 — no usar |
| Granate `#941A20` | **7.59:1** — texto AA | 1.88:1 — no usar |

Los dos colores que dan identidad al documento **no son legibles sobre su propio
fondo claro**. En el informe impreso eso no importa porque allí solo aparecen
como formas grandes y sólidas: pictogramas, numerales enormes, la banda vertical.

De ahí sale el concepto central.

### Concepto: dos registros

El informe alterna páginas claras de infografía con páginas oscuras de
fotografía. La aplicación replica esa alternancia y la carga de significado:

- **Registro de la cifra — fondo papel.** Lo que se puede contar: definiciones,
  estadísticas, responsables, mapas. Tipografía en tinta y carbón; terracota y
  granate como acentos de texto; ámbar y turquesa solo como formas grandes.
- **Registro del hecho — fondo tinta.** Lo que le pasó a personas con nombre:
  los tres momentos. Aquí turquesa y ámbar recuperan su legibilidad plena y
  pasan a ser el color del texto de acento.

El cambio de fondo le avisa a quien mira que cambió lo que está viendo. No es
decoración: es información.

### Paleta categórica: por qué casi no existe

La paleta cruda del informe fue sometida al validador de series categóricas:

```
[FAIL] Normal-vision floor  #F5DD9A ↔ #F6A340  ΔE 14.2 — por debajo de 15
[FAIL] Contrast vs surface  #F6A340 1.8:1 · #F5DD9A 1.17:1
```

El crema y el ámbar del documento son indistinguibles como series de datos. En
lugar de inventar colores que traicionen la fuente, se elimina la necesidad de
color categórico: **el gráfico de responsables es una sola serie** con las
categorías en el eje y codificación por énfasis (terracota para la barra
dominante, pizarra para las demás). El color nunca carga identidad que el texto
no cargue ya.

---

## 3. Tipografía

| Familia | Rol | Por qué |
|---|---|---|
| **Archivo Black** | Palabras-cartel: `MASACRES`, `VALLEDUPAR` | Grotesca pesada y ligeramente condensada, del mismo linaje que el titular del informe. Solo a tamaño enorme, nunca como etiqueta pequeña |
| **Archivo** (400/500/600) | Interfaz, cuerpo, cifras | Misma superfamilia: coherencia sin monotonía. Numerales tabulares activados para que las cifras se alineen |
| **Source Serif 4** | Únicamente citas textuales del informe | Distingue *la voz del documento* de *la voz de la presentación*. A tamaño de cuerpo, nunca como display |

Medida de línea máxima de 62 caracteres en sans, 68 en la serif. Sin versalitas
pequeñas tracked-out: las mayúsculas aparecen solo a escala de cartel, como en el
original.

---

## 4. Layout

Veinte secciones a pantalla completa, en cuatro bloques (uno por integrante).
Navegación por teclado (`←` `→` `espacio`), por rueda y por el riel.

**El gesto que ancla la interfaz al documento:** la banda turquesa vertical del
PDF —esa en la que el informe escribe "CIFRAS" en vertical— se convierte en el
riel de navegación pegado al borde derecho, con el nombre del bloque escrito en
vertical sobre ella. Es el mismo objeto gráfico, cumpliendo ahora una función.

Alineación a la izquierda en todo. El informe es un documento, no un póster
centrado.

### Registro de la cifra

```
┌──────────────────────────────────────────────┬──┐
│                                              │  │
│  1985–2012   Grupo de Memoria Histórica      │C │
│                                              │I │
│  MASACRES                                    │F │
│  ─────────────────────────────────────       │R │
│                                              │A │
│  1.982        11.751                         │S │
│  casos        víctimas                       │  │
│                                              │  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Paramilitares  1.166   │  │
│  ▓▓▓▓▓▓ Guerrillas                     343   │  │
│  ▓▓▓▓▓ No identificados                295   │  │
│  ▓▓▓ Fuerza pública                    158   │  │
│  ▓ Paras + fuerza pública               20   │  │
│                                              │  │
│  Fuente: Módulo 1, Cátedra Basta Ya, p. 11   │  │
└──────────────────────────────────────────────┴──┘
```

### Registro del hecho

```
┌──────────────────────────────────────────────┬──┐
│                                              │  │
│                                              │E │
│   21 de junio de 1998                        │L │
│                                              │  │
│   El Diluvio                                 │D │
│   Mariangola, zona rural de Valledupar       │I │
│                                              │L │
│   ▌ ▌ ▌ ▌ ▌ ▌ ▌ ▌   ocho personas            │U │
│                                              │V │
│   Sesenta hombres armados llegaron…          │I │
│                                              │O │
│   ┌ El Tiempo, 25 de junio de 1998 ─────┐    │  │
│   │ "asesinadas a cuchillo, navaja…"    │    │  │
│   └──────────────────────────────────────┘    │  │
└──────────────────────────────────────────────┴──┘
```

---

## 5. Principios

1. **Cada número es un número de personas.** El pictograma del CNMH es la unidad
   de conteo. Ninguna cifra aparece sin su unidad humana al lado.
2. **Dos registros.** La cifra vive en el papel; el hecho vive en la tinta.
3. **Ninguna afirmación sin procedencia.** Toda pantalla con un dato lleva su
   fuente visible, en la misma pantalla, no en un anexo.
4. **La sobriedad es ética.** Sin sombras, sin degradados, sin tarjetas
   redondeadas, sin decoración.
5. **Nada se mueve solo.** El movimiento solo responde a una acción de quien
   presenta. Se respeta `prefers-reduced-motion`.

---

## 6. Sobre las fotografías del informe

El Módulo 1 incluye fotografías de **Jesús Abad Colorado ©**, con copyright
individual explícito pese a estar dentro de un documento estatal de libre
distribución.

Como la aplicación queda **publicada en internet** —no proyectada en un salón—,
no se incrustan esas fotografías. Sí se usan las **infografías del CNMH**, que
son producción de la entidad estatal, se distribuyen abiertamente y además son
el objeto de estudio del trabajo.

La consecuencia de diseño es favorable: obliga a resolver la pieza con
tipografía y con la gramática diagramática del propio CNMH, en vez de apoyarse
en fotoperiodismo prestado.
