const productosCasaComidas = [
    {
      id: 1,
      nombre: "Empanada de Carne",
      precio: 900,
      categoria: "Empanadas",
      descripcion: "Empanada de carne, huevo, papa y aceitunas",
      stock: 50,
      imagenProducto:'public/Images/empanadas.jpg'
    },
    {
        id: 2,
        nombre: "Empanada de Jamón y Queso",
        precio: 900,
        categoria: "Empanadas",
        descripcion: "Empanada de Jamón y Queso",
        stock: 50,
        imagenProducto:'public/Images/empanadas.jpg'
      },
    {
        id: 3,
        nombre: "Empanada de Pollo",
        precio: 900,
        categoria: "Empanadas",
        descripcion: "Empanada de Pollo",
        stock: 50,
        imagenProducto:'public/Images/empanadas.jpg'
    },
    {
        id: 4,
        nombre: "Empanada de Roquefort",
        precio: 900,
        categoria: "Empanadas",
        descripcion: "Empanada de muzzarella y roquefort",
        stock: 50,
        imagenProducto:'public/Images/empanadas.jpg'
    },

    {
      id: 5,
      nombre: "Hamburguesa clásica",
      precio: 5400,
      categoria: "Hamburguesas",
      descripcion: "Hamburguesa con lechuga y tomate",
      stock: 100,
      imagenProducto:'public/Images/hamburguesas.jpg'
      
    },
    {
      id: 6,
      nombre: "Hamburguesa con cheddar",
      precio: 6500,
      categoria: "Hamburguesas",
      descripcion: "Hamburguesa doble con cheddar",
      stock: 100,
      imagenProducto:'public/Images/hamburguesas2.jpg'
      
    },
    {
      id: 7,
      nombre: "Milanesa con ensalada",
      precio: 5800,
      categoria: "Milanesas",
      descripcion: "Milanesa con ensalada de lechuga y tomate",
      stock: 30,
      imagenProducto:'public/Images/mila+ensa.jpg'
      
    },
    {
      id: 8,
      nombre: "Milanesa napolitana con fritas",
      precio: 7800,
      categoria: "Milanesas",
      descripcion: "Milanesa con salsa y muzzarella, acompañada de papas fritas",
      stock: 30,
      imagenProducto:'public/Images/mila+papa.jpg'
    },
    {
      id: 9,
      nombre: "Pizza de muzzarella",
      precio: 2500,
      categoria: "Pizzas",
      descripcion: "Pizza de muzzarella con orégano y aceitunas",
      stock: 100,
      imagenProducto: 'public/Images/pizza.jpg'
    },
    {
        id: 10,
        nombre: "Pizza de Jamón y Morrón",
        precio: 3800,
        categoria: "Pizzas",
        descripcion: "Pizza de muzzarella con jamón, morrón, orégano y aceitunas",
        stock: 100,
        imagenProducto: 'public/Images/pizzajm.jpg'
      },
    {
        id: 11,
        nombre: "Pizza Napolitana",
        precio: 2500,
        categoria: "Pizzas",
        descripcion: "Pizza de muzzarella con tomate, orégano y aceitunas",
        stock: 100,
        imagenProducto: 'public/Images/pizzanapo.jpg'
    },
  ];
  export const mFetch = () => new Promise ((res) =>{
    setTimeout(()=>{
        res(productosCasaComidas)
    },1)

}) 