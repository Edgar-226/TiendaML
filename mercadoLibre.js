//Busueda General
//https://api.mercadolibre.com/sites/MLM/search?q=Motorola%20G6
//Busqueda por categoria
//https://api.mercadolibre.com/sites/MLM/search?category=MLM1039
//Busqueda por id
//https://api.mercadolibre.com/products/MLA10025564

async function mostrarEnPagina (idProducto){
  let url = 'https://api.mercadolibre.com/items/' + idProducto;
  console.log(url);
  let resp = await fetch(url);

  const data = await resp.json();
  console.log(data['pictures'][0]['url']);


  let producto = `
  <div class="card p-3 border bg-light" style="width: 18rem;">
    <img src=${data['pictures'][0]['url']} class="card-img-top"
    alt="...">
    <div class="card-body">
      <h5 class="card-title">${data['title']}</h5>
      <p class="card-text">Precio $${data['price']}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
      <a href="#" class="btn btn-primary">Agregar al Carrito</a>
    </div>
  </div>`


let productoHTML = document.createElement('div');
productoHTML.classList.add('p-3', 'border', 'bg-light')

productoHTML.innerHTML += producto;
document.getElementById('caja').appendChild(productoHTML);

}


async function getMercadoLibre() {

  let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=10";
  let resp = await fetch(url);

  const data = await resp.json();
  console.log(data['results']);

  console.log(data['results'][0]['id'])

 for (let i = 0; i < data['results'].length; i++) {
  mostrarEnPagina(data['results'][i]['id'])
   
 }

  // mostrarEnPagina(data['results'][0]['id'])
  // mostrarEnPagina(data['results'][1]['id'])
  // mostrarEnPagina(data['results'][2]['id'])
  // mostrarEnPagina(data['results'][3]['id'])
 

}









getMercadoLibre()

