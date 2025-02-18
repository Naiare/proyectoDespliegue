# Proyecto Tienda de Chuches - Aprendiendo Git

Este es un proyecto sencillo creado con el propósito de aprender a usar Git. La idea es tener una pequeña tienda en línea de chuches (dulces) que permita a los usuarios agregar productos a su carrito y ver el total. 

## Estructura del Proyecto

El proyecto está compuesto por los siguientes archivos y carpetas:

- **`index.html`**: Página principal de la tienda que muestra una lista de chuches disponibles para comprar.
- **`cart.html`**: Página donde se visualiza el carrito de compras con los productos seleccionados.
- **`script.js`**: Archivo JavaScript que maneja la funcionalidad de agregar productos al carrito, calcular el total y otras interacciones.
- **`cart.js`**: Archivo JavaScript que maneja el contenido del carrito de compras, manteniendo los productos que el usuario ha seleccionado.
- **`style.css`**: Estilos de la página para darle formato y mejorar la apariencia de la tienda y del carrito.
- **`images/`**: Carpeta que contiene las imágenes de las chuches disponibles en la tienda.

## Funcionalidad

1. **Página de inicio (`index.html`)**: 
   - Los usuarios pueden ver los productos disponibles en la tienda con una pequeña imagen y su precio.
   - Al hacer clic en "Agregar al carrito", el producto seleccionado se añade al carrito de compras.
   
2. **Página de carrito (`cart.html`)**:
   - En esta página se muestra el listado de productos que el usuario ha agregado al carrito, junto con su cantidad y precio total.
   
3. **JavaScript**:
   - **`script.js`** gestiona las interacciones con la tienda (agregar productos al carrito).
   - **`cart.js`** maneja el almacenamiento de los productos en el carrito y actualiza la página de carrito en tiempo real.

## Tecnologías Usadas

- **HTML**: Para la estructura de las páginas.
- **CSS**: Para el diseño y estilo visual de la tienda y el carrito.
- **JavaScript**: Para la funcionalidad dinámica, como agregar productos al carrito y calcular el total.

## Cómo Ejecutar el Proyecto

1. Clona el repositorio en tu máquina local:

    ```bash
    git clone https://github.com/tu_usuario/tienda-chuches.git
    ```

2. Navega al directorio del proyecto:

    ```bash
    cd tienda-chuches
    ```

3. Abre el archivo `index.html` en tu navegador web.

    ```bash
    open index.html # O abre el archivo directamente desde tu navegador
    ```

## Contribuciones

Si deseas contribuir al proyecto, siéntete libre de hacer un *fork* del repositorio y enviar un *pull request* con mejoras o nuevas funcionalidades.

## Licencia

Este proyecto es de código abierto, por lo que puedes usarlo, modificarlo y distribuirlo bajo los términos de la licencia MIT.

---
