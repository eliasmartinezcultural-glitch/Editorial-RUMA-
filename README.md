# Editorial RUMA
Casa digital de publicaciones originales desarrolladas desde Ocarina Producciones. Sitio estático, sin cuentas ni base de datos.

## Archivos
- index.html: portada, catálogo y presentación editorial.
- assets/css/styles.css: diseño adaptable.
- assets/js/catalog.js: datos editables de las publicaciones.
- assets/js/app.js: búsqueda, filtros y detalle de cada publicación.

## Activar GitHub Pages
En Settings → Pages → Deploy from a branch, elegí main y /(root). La URL esperada es https://eliasmartinezcultural-glitch.github.io/Editorial-RUMA-/.

## Agregar una publicación
Editá assets/js/catalog.js y agregá un objeto al arreglo window.RUMA_CATALOG. Campos: id único, title, subtitle, category, description, audience, format, price, status, statusLabel, cover, coverInk, icon, sampleUrl, purchaseUrl y note.
Estados: available (publicada), coming (en preparación), hidden (no mostrar).

## Seguridad comercial
No alojar el PDF completo de un producto pago en GitHub Pages: cualquier archivo público puede compartirse. Publicar solo muestras y conectar un sistema externo que confirme el pago antes de entregar el archivo. GitHub Pages no procesa pagos ni protege descargas.

## Criterio editorial
Publicar obras propias o con permisos claros; acreditar fuentes, autorías y fotografías; distinguir hechos documentados, testimonios e interpretaciones; indicar público, formato, edición y fecha. Una ficha no pasa a available hasta que el archivo final, compra y entrega estén probados.