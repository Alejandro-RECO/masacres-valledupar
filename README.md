# Masacres en Valledupar — Cátedra Basta Ya

Presentación interactiva para la asignatura **Cátedra de Paz**. Analiza tres
momentos de violencia en la zona rural de Valledupar (Cesar) con el marco
conceptual del **Módulo 1 de la Cátedra Basta Ya** del Centro Nacional de
Memoria Histórica.

## La regla del proyecto

Ninguna cifra, fecha ni hecho entró a la presentación sin verificarse contra su
fuente original. Los datos que no se pudieron respaldar quedaron registrados
como descartados, y el único hecho con versiones contradictorias se expone
como disputado, no como hecho.

Todo eso está en **[docs/03-ficha-de-datos-y-fuentes.md](docs/03-ficha-de-datos-y-fuentes.md)**.

## Contenido

| Archivo | Qué es |
|---|---|
| `docs/00-plan-de-diseno.md` | Sistema visual: colores muestreados del PDF, tipografía, layout |
| `docs/01-analisis-y-estudio.md` | El trabajo escrito: marco, los tres momentos, conclusiones |
| `docs/02-guion-por-integrante.md` | Quién dice qué, en qué lámina, con tiempos |
| `docs/03-ficha-de-datos-y-fuentes.md` | Cada dato con su fuente y su estado de verificación |
| `docs/04-plan-de-entendimiento.md` | Cómo prepararse para exponer y responder preguntas |
| `app/` | La aplicación (React + Vite) |

## Correr la aplicación

```bash
cd app
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build      # queda en app/dist
npm run preview    # para revisarla antes de publicar
```

## Cómo se navega

| Tecla | Acción |
|---|---|
| `→` `↓` `espacio` | Lámina siguiente |
| `←` `↑` | Lámina anterior |
| `I` | Abrir el índice general |
| `Esc` | Cerrar el índice |
| `Inicio` / `Fin` | Primera / última lámina |

También funciona con la rueda del ratón y deslizando en pantalla táctil.

## Sobre las imágenes

La única imagen del proyecto es el mapa «Municipios en estado crítico» de la
infografía de masacres del Módulo 1, recortado del PDF original. Es producción
del CNMH —entidad estatal, documento de libre distribución— y además es el
objeto de estudio del trabajo.

Las fotografías de **Jesús Abad Colorado ©** que trae el módulo no se
incluyeron: conservan copyright individual y esta aplicación queda publicada en
internet, no proyectada en un salón.
