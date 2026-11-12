# Integración de ventas y entrega digital

## Decisión de arquitectura

RUMA conserva su sitio estático en GitHub Pages. No se programará un sistema propio para recibir tarjetas, validar transferencias ni entregar archivos: eso requiere backend, seguridad, mantenimiento y responsabilidad sobre datos de compradores.

La tienda externa se ocupa de:
1. Mostrar el checkout.
2. Procesar el pago con el proveedor conectado.
3. Esperar la confirmación real del pago.
4. Habilitar una descarga privada o enviar el acceso por correo.
5. Gestionar límites o vencimiento del enlace, si el servicio lo ofrece.

RUMA muestra la ficha y enlaza al checkout externo. El PDF pago nunca se sube al repositorio público.

## Proveedores a evaluar

### Wecito
- Sitio oficial: https://wecito.com/
- La documentación indica conexión con Mercado Pago, venta de descargables y entrega automática por email.
- La página principal y sus preguntas frecuentes muestran comisiones distintas en consultas recientes; la página /precios también presenta condiciones diferentes. Antes de elegir, verificar dentro del alta y del panel cuál es la comisión vigente del plan Free, el límite de productos, las condiciones de descarga y si existen cargos adicionales.
- No cargar el PDF maestro hasta haber comprobado el recorrido de compra con un archivo de prueba.

### Paidrop
- Sitio oficial: https://paidrop.com/
- La guía pública describe vista previa con marca de agua, confirmación del pago mediante Mercado Pago y descarga mediante enlace temporal.
- Antes de elegir, verificar tarifa total, límites de archivo, plazos, soporte, política de reembolsos y condiciones de uso.

### Pagy
- Sitio oficial: https://pagy.shop/
- Permite conservar una landing propia y dirigir el botón de compra a un checkout, con entrega automática después de la aprobación.
- Antes de elegir, verificar costos de plan, comisiones, compatibilidad de cuenta argentina y límites del producto.

## Criterio de selección
Elegir el servicio que cumpla todos estos puntos:
- Cuenta de vendedor disponible para Argentina.
- Mercado Pago argentino conectado mediante autorización segura.
- Cobro acreditado directamente en la cuenta del titular.
- Entrega digital automática únicamente después de pago aprobado.
- Enlace privado, con vencimiento o límite de descargas.
- Comisión total transparente y sin costos sorpresa.
- Posibilidad de hacer una compra de prueba.
- Condiciones claras de privacidad, soporte y reembolsos.

No decidir por una publicidad de "gratis" o "0%": revisar los términos vigentes del plan y el costo real del proveedor de pagos.

## Procedimiento de alta
1. El titular crea su cuenta directamente en el servicio elegido.
2. Verifica su identidad y conecta Mercado Pago desde el flujo oficial del proveedor. Nunca compartir contraseñas ni códigos de acceso con terceros.
3. Crea un producto de prueba barato o de prueba interna, sin publicar el PDF final.
4. Carga un archivo de test sin información privada.
5. Completa una compra de prueba con un método permitido por el proveedor.
6. Comprueba que un pago pendiente o rechazado no libera el archivo.
7. Comprueba que un pago aprobado sí entrega el archivo al email comprador.
8. Comprueba que el enlace de descarga no sea público ni permanente, si el servicio ofrece esa protección.
9. Revisa el importe neto recibido, las comisiones y los correos.
10. Recién entonces cargar la publicación definitiva y copiar el checkout real a la ficha del catálogo.

## Conectar una publicación con RUMA
En `assets/js/catalog.js`:
- `status: "coming"` mientras falte una validación.
- `sampleUrl`: enlace público a una muestra reducida, sin el contenido completo.
- `purchaseUrl`: enlace real al checkout externo, nunca un enlace directo al PDF.
- `status: "available"` solo después de completar todo el control de calidad.

El sitio ya contempla mostrar el botón de compra cuando la ficha está disponible y existe `purchaseUrl`. Si falta el enlace, no debe inventarse ni reemplazarse por una descarga pública.

## Estado de Chañar en colores
- Precio de referencia en catálogo: ARS 2.500.
- Estado: en preparación.
- No hay checkout enlazado.
- No se debe publicar el archivo completo como descarga pública.
- Antes de vender: verificar el contenido histórico, finalizar el PDF, crear una muestra y probar la entrega.

## Datos que no se deben pedir por chat
No solicitar contraseña de Mercado Pago, códigos de autenticación, datos completos de tarjeta ni credenciales. El usuario debe completar la vinculación directamente en el sitio oficial del proveedor.
