class Carrito {
    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {

      const productoExistente = this.productos.find(producto => producto.nombre === nombre);
      
      if (productoExistente) {
        productoExistente.unidades += unidades;
        console.log(`El producto ${nombre} ya está en la changuito con ${productoExistente.unidades} unidades.`);
      } 
      else {
        this.productos.push({nombre, precio, unidades});
        this.montoTotal += precio * unidades;
      }
    }
  }
  
  const carrito = new Carrito();
  carrito.agregarProducto("Fideos", 45, 3);
  carrito.agregarProducto("Mermelada", 1055, 2);
  carrito.agregarProducto("Aceite", 2, 1);
  console.log(carrito);