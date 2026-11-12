# Estado operativo — Editorial RUMA
Actualizado: 12 de noviembre de 2026

## Diagnóstico
El proyecto está en **pre-lanzamiento comercial**. La web y el catálogo están construidos; el perfil de Wecito ya tiene una URL configurada. Todavía no hay evidencia de que el circuito completo de cobro y entrega haya sido probado.

## Lo que ya existe
- Sitio estático en GitHub Pages preparado: portada, catálogo, búsqueda, filtros, fichas, preguntas frecuentes y presentación editorial.
- Catálogo con una primera publicación: **Chañar en colores**.
- Ficha del producto con precio de referencia ARS 2.500 y estado «En preparación».
- Enlace al perfil Wecito configurado en `assets/js/store-config.js`.
- Cada publicación admite una URL individual de compra mediante `purchaseUrl`.
- El PDF completo no debe subirse al repositorio público.

## Lo que no está confirmado
- Que GitHub Pages esté habilitado y que la web pública cargue correctamente.
- Que el perfil Wecito sea visible para cualquier visitante.
- Que Mercado Pago figure como conectado en Wecito.
- Que exista un producto descargable creado y publicado en Wecito.
- Que se haya realizado una compra real/de prueba y comprobado el email de entrega.
- Que el PDF final de Chañar en colores esté revisado, tenga fuentes y créditos completos y esté listo para comercializar.

## Próxima secuencia — no saltar pasos
1. Abrir el perfil público de Wecito y confirmar que muestra Ocarina Producciones.
2. En el panel de Wecito, comprobar que Mercado Pago figura «Conectado».
3. Crear un descargable de prueba con un archivo ficticio, no con el PDF final.
4. Probar el recorrido permitido por Wecito: pago aprobado, email recibido, descarga y monto neto acreditado. No liberar el producto real antes de esta prueba.
5. Terminar y revisar Chañar en colores: precisión histórica, fuentes, derechos de imágenes, legibilidad, impresión y versión móvil.
6. Crear el producto real en Wecito, cargar el archivo final y copiar la URL individual del checkout.
7. Pegar esa URL en `purchaseUrl` de `assets/js/catalog.js`. Cambiar `status` a `available` solo después de validar todo.
8. Confirmar que el sitio público muestra el botón correcto y hacer una última prueba desde otro navegador/dispositivo.

## Criterios comerciales
- Mantener el plan Free hasta tener ventas y datos reales.
- No pagar un plan superior para resolver un problema que todavía no se comprobó.
- La página principal actual de Wecito informa 10% de comisión en Free, 5% en Pro y 0% en Creadores; otra página pública de precios muestra condiciones distintas. Confirmar la comisión y los límites vigentes dentro de la cuenta antes de calcular el precio neto.
- El precio de ARS 2.500 es una referencia inicial, no un precio validado por ventas. Revisarlo con el costo de producción, comisiones, impuestos aplicables y valor percibido.
- No producir muchos títulos todavía. Primero vender y aprender con una sola publicación bien terminada.

## Enfoque estratégico
**Ocarina Producciones** produce y firma el contenido. **Editorial RUMA** lo presenta y comercializa como sello editorial. No convertir RUMA en una biblioteca genérica de archivos ajenos ni mezclarla con todos los proyectos de Ocarina: la prioridad es validar un producto original, útil y vendible.

## Qué necesita hacer el titular
Las únicas acciones que requieren entrar personalmente a Wecito/Mercado Pago son las autorizaciones de cobro y las pruebas que involucren su cuenta y su dinero. Nunca compartir contraseñas ni códigos de acceso por chat.
