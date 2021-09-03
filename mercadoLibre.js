
class ShoppingCart {

  constructor(nombre) {
    this.nombre = nombre;
    this.articles = [];
    this.total = 0;
    this.pagado = false;
  }

  addArticle(article) {
    this.articles.push(article);
  }

  deleteArticle(article){
    for (let i = 0; i < this.articles.length; i++) {
      const element = this.articles[i];
      
    }
    delete this.articles[article];
  }


  getTotal() {
    var total = 0;
    for (let i = 0; i < this.articles.length; i++) {
      const element = this.articles[i];
      total += element[1];
    }
    this.total = total;

    return this.total;
  }
}

const carrito = new ShoppingCart('Carrito');

function addcarrito(nombreProducto, precioProducto, urlImgProducto) {
  producto = [nombreProducto, precioProducto, urlImgProducto]
  carrito.addArticle(producto)
  total = carrito.getTotal();

  //console.log('$', total)
  alert(nombreProducto + ' Se agrego al carrito. ')
  var totalHTML = document.getElementById('total-carrito');

  //console.log(carrito);

  totalHTML.textContent = '$' + total.toFixed(2);
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

function saludo() {
  console.log('hi')
}

function deleteProduct(nombreProducto, precioProducto, urlImgProducto){
  producto = [nombreProducto, precioProducto, urlImgProducto];
  console.log(carrito);
  console.log(carrito['articles'][1][0])
  console.log(producto)
  console.log(carrito['articles'][1][0] == producto[0])
  
  carrito.deleteArticle(producto);
  guardarCarrito();
  //rercuperarCarrito();
}



//Busueda General
//https://api.mercadolibre.com/sites/MLM/search?q=Motorola%20G6
//Busqueda por categoria
//https://api.mercadolibre.com/sites/MLM/search?category=MLM1039
//Busqueda por id
//https://api.mercadolibre.com/products/MLA10025564

async function mostrarEnPagina(idProducto) {
  if (document.getElementById('caja')) {
    let url = 'https://api.mercadolibre.com/items/' + idProducto;
    //console.log(url);
    let resp = await fetch(url);

    const data = await resp.json();
    //console.log(data['pictures'][0]['url']);

    let producto = `
  <div class="contenido-producto" style="justify-content: center;">
    <img src=${data['pictures'][0]['url']} class="card-img-top"
    alt="...">
    <div class="card-body">
      <h5 class="card-title">${data['title']}</h5>
      <p class="card-text">$${data['price'].toFixed(2)}</p>
      
      <button class="btn btn-primary" onclick="addcarrito('${data['title']}', ${data['price']}, '${data['pictures'][0]['url']}')">Agregar al Carrito</button>
    </div>
  </div>`


    let productoHTML = document.createElement('div');
    productoHTML.classList.add('contenedor-producto', 'col-6', 'col-sm-3', 'p-3', 'border', 'Secondary')

    productoHTML.innerHTML += producto;
    document.getElementById('caja').appendChild(productoHTML);
  }

}

function mostrarCarrito(nombre, precio, imagen) {
  if (document.getElementById('productosCarrito')) {
    let producto = `
  <div class="contenido-producto" style="justify-content: center;">
    <img src="${imagen}" class="card-img-top"
    alt="...">
    <div class="card-body">
      <h5 class="card-title">${nombre}</h5>
      <p class="card-text">$${precio.toFixed(2)}</p>
      
      <button class="btn btn-primary" onclick="deleteProduct('${nombre}', ${precio}, '${imagen}')"">Eliminar</button>
    </div>
  </div>`


    let productoHTML = document.createElement('div');
    productoHTML.classList.add('contenedor-producto', 'col-6', 'col-sm-3', 'p-3', 'border', 'Secondary')

    productoHTML.innerHTML += producto;
    document.getElementById('productosCarrito').appendChild(productoHTML);
  }
}

async function getMercadoLibre() {
  console.log('hi')

  let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=12";
  let resp = await fetch(url);

  const data = await resp.json();
  //console.log(data['results']);

  //console.log(data['results'][0]['id'])

  for (let i = 0; i < data['results'].length; i++) {
    mostrarEnPagina(data['results'][i]['id'])

  }

}
getMercadoLibre()

function irCarrito() {
  guardarCarrito()
  window.location.href = "./carrito.html";

}



function setTotal() {
  rercuperarCarrito();
  var totalHTML = document.getElementById('total-carrito');
  total = carrito.getTotal()
  totalHTML.textContent = '$' + total.toFixed(2);
}

function guardarCarrito() {
  sessionStorage.setItem('carrito', JSON.stringify(carrito));
}

function rercuperarCarrito() {
  carritoRec = JSON.parse(sessionStorage.getItem('carrito'))
  if (carritoRec) {
    //console.log(carritoRec);
    if (carrito['total'] == 0) {
      for (let i = 0; i < carritoRec['articles'].length; i++) {
        carrito.addArticle(carritoRec['articles'][i])
        total = carrito.getTotal()
        //console.log(carrito)
      }
    }
  }
}

function colocarTotal() {
  //console.log(carrito.getTotal())
  rercuperarCarrito();


  //
  for (let i = 0; i < carrito['articles'].length; i++) {
    mostrarCarrito(carrito['articles'][i][0], carrito['articles'][i][1], carrito['articles'][i][2])
    total = carrito.getTotal()
    //console.log(carrito)
  }
  var totalHTML = document.getElementById('total-carrito');
  total = carrito.getTotal()
  totalHTML.textContent = '$' + total.toFixed(2);

  setTotal();



}
rercuperarCarrito();
colocarTotal();
setTotal();


//console.log(carrito)