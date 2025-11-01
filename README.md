📌 Hito 21 – Pizzería Mamma Mía – Context API  
Este proyecto corresponde al **Hito 6 del bootcamp Desafío Latam**, donde se validan los conocimientos del **Context API** en React.  
La aplicación implementa un estado global para manejar el **carrito de compras**, consumiendo la información de las pizzas desde una API externa y manteniendo la sincronización del total de la compra en toda la aplicación.

---

🚀 Objetivo del desafío  
Implementar el manejo de estado global en React utilizando **Context API**, permitiendo compartir el estado del carrito de compras entre múltiples componentes.

---

✅ Requerimientos cumplidos  

### 🧠 Context API
- Implementa un **CartContext** para manejar el carrito de compras.  
- Permite **agregar, eliminar y actualizar** la cantidad de productos.  
- Calcula automáticamente el **total general** del carrito.

### 🧩 Navbar
- Consume el `CartContext` para mostrar el **precio total actualizado** de los productos.  
- Incluye navegación hacia las páginas **Home**, **Cart** y otras secciones.

### 🏠 Página Home
- Consume la API `GET http://localhost:5000/api/pizzas` para obtener todas las pizzas.  
- Renderiza un componente `<CardPizza />` por cada pizza.  
- Cada tarjeta muestra:
  - Nombre de la pizza  
  - Precio  
  - Lista de ingredientes  
  - Imagen  
  - Botón **“Añadir al carrito”** que utiliza el `CartContext`.

### 🍕 Página Pizza
- Muestra la información detallada de una pizza individual.  
- Permite añadir la pizza directamente al carrito desde el botón correspondiente.  

### 🛒 Página Cart
- Muestra los productos agregados al carrito.  
- Permite **aumentar, disminuir o eliminar** productos.  
- Calcula y muestra el **total final de la compra**, sincronizado con el Navbar.  

### ⚙️ Opcional implementado
- Se puede centralizar el consumo de pizzas (fetch de Home y Pizza) en un segundo contexto (`PizzaContext`).

---

🛠️ Tecnologías utilizadas
- React 18  
- JavaScript (JSX, useState, useContext, createContext)  
- React Router DOM  
- CSS3 / Bootstrap 5  
- Vite como bundler  
- Git para control de versiones  
- Node.js (para el backend de ejemplo)

---

▶️ Cómo ejecutar el proyecto

1. Clona este repositorio:
   ```bash
   git clone https://github.com/NicoMunozJS/desafio-21-context-api.git
   cd desafio-21-context-api
