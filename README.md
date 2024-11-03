PROYECTO: ECOMMERCE FICTICIO
Este proyecto es una aplicación de comercio electrónico desarrollada con Next.js y TypeScript, diseñada para ofrecer una experiencia de usuario eficiente y moderna, con funcionalidades esenciales como la gestión de un carrito de compras y filtros dinámicos de productos.


DESCRIPCION:
El proyecto Ecommerce permite a los usuarios navegar por una variedad de productos, agregarlos al carrito, y proceder con una compra ficticia. La aplicación incorpora un diseño responsivo y limpio, con un sistema de filtrado avanzado basado en URLs y un manejo de estado global utilizando Context API.


CARACTERISTICAS PRINCIPALES
Catálogo de productos: Listado de productos con detalles específicos y opción de búsqueda.

Carrito de compras: Gestión de productos seleccionados con cantidades editables y precios actualizados en tiempo real.

Sistema de filtrado: Implementación de carpetas dinámicas en Next.js para filtrar productos por categoría y búsqueda mediante URLs.

Compra ficticia: Formulario de datos del cliente y confirmación de compra con un mensaje de éxito.

Despliegue: La aplicación está desplegada en Vercel y accesible públicamente.


TECNOLOGÍAS UTILIZADAS
Next.js: Framework de React utilizado para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).
React: Biblioteca para la creación de interfaces de usuario.
TypeScript: Tipado estático para una mejor seguridad y mantenibilidad del código.


DESAFIOS Y SOLUCIONES

Filtrado Dinámico de Productos:
Desafío: Implementar un sistema de filtrado eficaz para diferentes categorías y búsquedas sin sobrecargar la aplicación.

Solución: Se utilizaron las capacidades de carpetas dinámicas de Next.js, permitiendo que los filtros se gestionen directamente desde la URL, lo que mejora la navegación y mantiene el código modular y eficiente.

Manejo de Estado Global:
Desafío: Gestionar de manera eficiente los productos en el carrito, asegurando que los precios y cantidades se actualicen correctamente.

Solución: Se implementó Context API para un manejo de estado global, asegurando que las actualizaciones sean rápidas y fiables.

Primer Proyecto con TypeScript y Testing:
Desafío: Aprender y aplicar TypeScript y Jest con Testing Library.

Solución: Se utilizó TypeScript de forma básica pero efectiva, asegurando tipados simples. Se realizaron pruebas unitarias para validar componentes clave y prevenir errores.
Despliegue en Vercel
La aplicación se ha desplegado en Vercel para un fácil acceso. Visita el proyecto en: ecommerce-woad-psi.vercel.app