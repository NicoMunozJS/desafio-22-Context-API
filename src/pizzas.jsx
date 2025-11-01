export const pizzas = [
    {
        id: 1,
        name: "Napolitana",
        price: 5999,
        ingredients: ["Mozzarella", "Tomates", "Jamón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    },
        {
        id: 2,
        name: "Española",
        price: 5999,
        ingredients: ["Carne Mechada", "Tomates", "Jamón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    },
        {
        id: 3,
        name: "Italiana",
        price: 5999,
        ingredients: ["Salsa QQB", "Tomates", "Jamón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    },
        {
        id: 4,
        name: "Clasica",
        price: 5999,
        ingredients: ["Pimienta", "Tomates", "Jamón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    },
        {
        id: 5,
        name: "Latina",
        price: 5999,
        ingredients: ["Ajo", "Queso", "Jamón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    },
        {
        id: 6,
        name: "Hot",
        price: 5999,
        ingredients: ["Ají", "Tomates", "Pimentón", "Orégano"],
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=150&q=80"
    }
];

export const pizzaCart = [
    {
        id: 1,
        name: "Napolitana",
        price: 5990,
        img: pizzas[0].img,
        quantity: 2
    },
    {
    id: 3,
    name: "Pepperoni",
    price: 7990,
    img: pizzas[2].img,
    quantity: 1
  }
];