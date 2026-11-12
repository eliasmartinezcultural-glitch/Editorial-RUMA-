# Editorial RUMA

Casa digital de publicaciones originales desarrolladas desde Ocarina Producciones. Sitio estático, sin cuentas, base de datos ni seguimiento de visitantes.

## Objetivo
Dar identidad, orden y una vidriera comercial a cuadernos, recursos educativos, publicaciones culturales y proyectos editoriales. RUMA presenta las obras; Ocarina desarrolla la producción.

## Estructura
- `index.html`: portada, catálogo, método editorial, preguntas frecuentes y presentación.
- `assets/css/styles.css`: diseño adaptable, móvil y accesible.
- `assets/js/catalog.js`: fichas y estados de las publicaciones.
- `assets/js/app.js`: búsqueda, filtros y detalle de las fichas.
- `assets/img/ruma-mark.svg`: marca del sitio.
- `CATALOGO-EDITORIAL.md`: líneas editoriales y política de selección.
- `FICHA-PUBLICACION.md`: plantilla para cada obra.
- `CONTROL-DE-CALIDAD.md`: lista previa a publicación.
- `MODELO-COMERCIAL.md`: criterios para vender y entregar.
- `INTEGRACION-VENTAS.md`: arquitectura y criterios de venta digital.
- `CONECTAR-WECITO.md`: guía paso a paso para configurar Wecito y Mercado Pago.
- La tienda externa y los cobros están pausados. No hay integraciones activas.

## Activar GitHub Pages
En GitHub: Settings → Pages → Deploy from a branch. Elegir `main` y `/(root)`. La URL esperada es https://eliasmartinezcultural-glitch.github.io/Editorial-RUMA-/; solo estará activa cuando Pages esté configurado y el despliegue termine correctamente.

## Agregar una publicación
1. Completar primero `FICHA-PUBLICACION.md`.
2. Revisar autoría, permisos, fuentes, créditos y archivo final.
3. Agregar un objeto al arreglo `window.RUMA_CATALOG` en `assets/js/catalog.js`.
4. Usar un `id` único. Completar título, descripción, categoría, público, formato, autor, edición, palabras clave, precio y nota.
5. Mantener `status: "coming"` hasta probar archivo, muestra, compra y entrega.
6. Pasar a `status: "available"` solo cuando todo esté verificado.

Estados: `available` = publicada y lista; `coming` = en preparación; `hidden` = no mostrar.

## Seguridad comercial
No alojar el PDF completo de una publicación paga en GitHub Pages: todo archivo público puede copiarse y compartirse. Publicar solo muestras. La compra y entrega deben depender de un proveedor externo que confirme el pago antes de liberar el archivo. GitHub Pages no procesa pagos ni protege descargas.

## Límites actuales
El catálogo y el sitio son estáticos. No guardan pedidos, no reciben pagos, no envían correos y no administran clientes. Esas funciones requieren un proveedor externo; no simularlas con un botón que no haga nada.

## Publicación responsable
Distinguir hechos documentados, testimonios e interpretaciones. No presentar hipótesis como hechos. Acreditar fuentes, autorías e imágenes; solicitar autorización cuando corresponda. Una obra no se habilita para venta hasta superar el control de calidad.
