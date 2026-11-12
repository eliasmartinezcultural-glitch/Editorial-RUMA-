# Conectar Wecito con Editorial RUMA

## Arquitectura preparada
- RUMA sigue siendo la página editorial y el catálogo.
- Wecito administra los productos descargables, checkout, Mercado Pago y entrega.
- Cada ficha de RUMA tendrá el enlace público de compra del producto en el campo `purchaseUrl`.
- El perfil público de Wecito se configura en `assets/js/store-config.js`. Al agregar la URL real, aparecerá el enlace «Visitar tienda RUMA» en la cabecera.
- No se insertan credenciales, claves ni tokens en GitHub.

## Alta de cuenta
1. Abrí https://wecito.com/registrarse
2. Registrate con nombre, apellido, correo propio y contraseña.
3. Confirmá el correo desde el enlace que llega a tu bandeja.
4. Elegí un usuario público. Recomendación a probar: `editorialruma` o `ruma.editorial` (Wecito admite letras, números y guion bajo; confirmar disponibilidad en el momento).
5. En «¿Para qué querés tu página?» elegí vender productos o ambas opciones.
6. Nombre visible recomendado: Editorial RUMA.
7. Bio sugerida: «Publicaciones digitales de Ocarina Producciones. Educación, cultura e historias del territorio».
8. Dejá el perfil privado o sin promocionar hasta completar pruebas.

## Conectar Mercado Pago
1. En el panel de Wecito entrá a «Cobros».
2. En la tarjeta Mercado Pago elegí «Conectar Mercado Pago».
3. Wecito te redirige al sitio oficial de Mercado Pago.
4. Iniciá sesión allí y autorizá la conexión.
5. Volvé a Wecito y comprobá que el estado diga «Conectado».
Nunca compartas la contraseña ni códigos de Mercado Pago por chat.

## Crear Chañar en colores
Crear primero un producto en borrador:
- Tipo: descargable (no se puede cambiar después).
- Título: Chañar en colores.
- Descripción: Cuaderno ilustrado para descubrir la historia y la identidad de San Patricio del Chañar mediante actividades y propuestas para todas las edades.
- Precio de referencia: ARS 2.500.
- Portada: subir una portada cuadrada de Editorial RUMA.
- Archivos: subir solamente la edición final una vez revisada. Antes se puede probar con un PDF ficticio que no sea el producto vendible.
- Activar protección PDF si el panel la ofrece y revisar su funcionamiento.
- Mantener en borrador hasta aprobar la prueba comercial.

## Comisiones y plan
La página principal de Wecito consultada el 12 de noviembre de 2026 indica Free sin mensualidad, 10% por venta y hasta 5 productos; Mercado Pago cobra aparte. Otras páginas de Wecito rastreadas recientemente muestran porcentajes distintos (por ejemplo, una landing de productos digitales indica 4% Free). Por esa inconsistencia, confirmar el porcentaje vigente en el panel y condiciones antes de publicar o calcular rentabilidad. No pagar Pro ni Creadores para iniciar: probar Free primero.

## Protección y entrega
La ayuda de Wecito indica que, después de la confirmación del pago, envía un correo con el enlace privado de descarga. La guía actual indica que el enlace dura 72 horas y cada archivo tiene 5 descargas. El comprador debe revisar el email y las carpetas spam/promociones. Guardar el archivo al recibirlo.

## Prueba antes de publicar
- [ ] Perfil público con identidad Editorial RUMA.
- [ ] Mercado Pago figura conectado.
- [ ] Producto en borrador, no anunciado.
- [ ] Archivo de prueba sin datos sensibles.
- [ ] Compra de prueba aprobada.
- [ ] Email de entrega recibido.
- [ ] Enlace abre y descarga el archivo.
- [ ] Pago pendiente/rechazado no libera el archivo.
- [ ] Comisiones y neto revisados en Wecito y Mercado Pago.
- [ ] Reembolso y soporte entendidos.

## Conectar la compra en RUMA
Una vez creado y publicado el producto en Wecito:
1. Copiar su URL pública de producto.
2. En `assets/js/catalog.js`, pegarla en `purchaseUrl`.
3. Pegar la URL del perfil Wecito en `assets/js/store-config.js` dentro de `profileUrl`.
4. Solo después de comprobar archivo final, muestra y entrega, cambiar el estado a `available`.
5. Verificar desde un navegador privado que los enlaces abren correctamente.

No publicar el PDF completo en GitHub Pages. RUMA no debe marcar como disponible una publicación si el pago o la entrega no están probados.
