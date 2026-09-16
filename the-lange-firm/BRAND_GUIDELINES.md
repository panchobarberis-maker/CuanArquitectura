# The Lange Firm — Guías de marca para HeyGen Video Agent

Este documento es la referencia fija para generar videos con HeyGen manteniendo
consistencia de marca. Cada script nuevo que se guarde en `scripts/` debe
cumplir con estas reglas.

## Colores del brand kit (usar SIEMPRE en gráficos)

- **Azul marino:** `#2E3548`
- **Dorado:** `#F4B83F`

Todo gráfico, chart, infografía o elemento visual generado por el video agent
debe usar exclusivamente esta paleta. Nunca dejar que la IA invente colores o
diseños nuevos por video — la consistencia visual es el objetivo.

## Prompt para pegar en HeyGen Video Agent

```
For all graphics, charts, and visual elements in this video, always use the
brand kit's primary colors: navy blue #2E3548 and gold #F4B83F. Do not
invent new color palettes or new graphic designs — keep the same visual
style and colors consistent across every video.

Avoid any dead air or silences in the video — do not leave gaps between
sentences or scenes. If a silence would occur, cut it out so the pacing
stays continuous.
```

## Cierre obligatorio de todos los scripts

Todos los scripts deben terminar con:

> Hit the follow button for more helpful tips.

## Redes sociales

- Instagram: **@the_lange_firm**

## Estructura del caption

1. **Hook** inicial (una línea que capture la atención).
2. Presentación fija:
   > My name is Evan Lange and I'm one of the best rated employment lawyers
   > in Texas.
3. Desarrollo/explicación del tema del video.

## Cómo se guardan los scripts nuevos

De ahora en más, cada script que se pase se guarda como un archivo nuevo en
`the-lange-firm/scripts/`, numerado y con el hook como referencia en el
nombre, por ejemplo:

```
the-lange-firm/scripts/01-fired-without-notice.md
the-lange-firm/scripts/02-overtime-pay-rights.md
```

Cada archivo de script sigue este formato:

```md
# [Título corto del tema]

## Hook
[línea de hook]

## Script
My name is Evan Lange and I'm one of the best rated employment lawyers in Texas.
[desarrollo del contenido...]

Hit the follow button for more helpful tips.

## Notas de diseño
- Colores: #2E3548 (azul marino) / #F4B83F (dorado)
- IG: @the_lange_firm

## Prompt listo para HeyGen

[prompt completo: script + instrucciones de colores + instrucción de no silencios]
```
