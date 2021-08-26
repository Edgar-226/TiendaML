class ShoppingCart{

    constructor(nombre){
        this.nombre = nombre;
        this.articles = [];
        this.total = 0;
        this.pagado = false;
    }

    addArticle(article){
        this.articles.push(article);
    }

    getTotal(){
        var total = 0;
        for (let i = 0; i < this.articles.length; i++) {
            const element = this.articles[i];
            total += element[1];
        }
        this.total = total;
        console.log(this.total)
    }
}


//Ejercicio crear un metodo que remueva los articulos
//Calcular el total cuando se vallan agregando los articulos


const carrito = new ShoppingCart('Carrito');


let camisa = ['Camisa', 350.00]

carrito.addArticle(camisa);
carrito.addArticle(camisa);
carrito.addArticle(camisa);
carrito.getTotal();

console.log(carrito)