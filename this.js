Producto = function (cantidad, precio){
    this.cantidad = cantidad
    this.precio = precio
    this.sumarProducto = function(){
        this.cantidad += 1;
    }
    this.sumar10 = () => {
        for (i=1; i<=10; i++)
        this.sumarProducto() // Permite utilizar el metodo en el contexto del objeto
    }
}
// Se crea el producto con los atributos de cantidad y precio
producto1 = new Producto(1,12.5) 
console.log("Cantidad del producto 1:", producto1.cantidad);
producto1.sumar10() // Utilizamos el método sumar 10 del objeto producto1
console.log("Cantidad del producto 1 despues de sumar 10:", producto1.cantidad);