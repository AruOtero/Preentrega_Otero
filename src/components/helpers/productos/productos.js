const productos = [
    {
      id: 1,
      nombre: 'Pizza Margarita',
      precio: 250,
      stock: 20,
      categoria: 'Pizzas',
      descripcion: 'Deliciosa pizza con salsa de tomate, mozzarella y albahaca.'
    },
    {
      id: 2,
      nombre: 'Empanada de Carne',
      precio: 40,
      stock: 50,
      categoria: 'Empanadas',
      descripcion: 'Empanada rellena de carne picada, cebolla, huevo y especias.'
    },
    {
      id: 3,
      nombre: 'Milanesa de Pollo',
      precio: 180,
      stock: 15,
      categoria: 'Milanesas',
      descripcion: 'Jugosa milanesa de pollo empanizada y frita.'
    },
    {
      id: 4,
      nombre: 'Pizza Pepperoni',
      precio: 280,
      stock: 18,
      categoria: 'Pizzas',
      descripcion: 'Pizza con salsa de tomate, queso mozzarella y rodajas de pepperoni.'
    },
    {
      id: 5,
      nombre: 'Empanada de Queso y Jamón',
      precio: 35,
      stock: 40,
      categoria: 'Empanadas',
      descripcion: 'Empanada rellena de queso y jamón, una deliciosa combinación.'
    },
    {
      id: 6,
      nombre: 'Milanesa de Ternera',
      precio: 200,
      stock: 12,
      categoria: 'Milanesas',
      descripcion: 'Milanesa de ternera bien tierna y dorada, acompañada de limón.'
    },
    {
      id: 7,
      nombre: 'Pizza Vegetariana',
      precio: 260,
      stock: 25,
      categoria: 'Pizzas',
      descripcion: 'Pizza cargada de vegetales frescos, queso y salsa de tomate.'
    },
    {
      id: 8,
      nombre: 'Empanada de Pollo BBQ',
      precio: 45,
      stock: 30,
      categoria: 'Empanadas',
      descripcion: 'Empanada de pollo con salsa barbacoa, una explosión de sabores.'
    },
    {
      id: 9,
      nombre: 'Milanesa Napolitana',
      precio: 220,
      stock: 10,
      categoria: 'Milanesas',
      descripcion: 'Milanesa cubierta con salsa de tomate, jamón y queso gratinado.'
    },
    {
      id: 10,
      nombre: 'Pizza Hawaiana',
      precio: 270,
      stock: 22,
      categoria: 'Pizzas',
      descripcion: 'Pizza con piña, jamón, queso y salsa de tomate, una combinación tropical.'
    }
  ];
  
  console.log(productos);
  
  export const Productsfetch = () => new Promise ((res) =>{
    setTimeout(()=>{
        res(productos)
    },3000)

}) 