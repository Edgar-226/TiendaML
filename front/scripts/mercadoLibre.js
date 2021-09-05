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
    // console.log(data);

    let producto = `
  <div class="border contenido-producto" style="justify-content: center;">
    <img src=${data['pictures'][0]['url']} class="card-img-top"
    alt="...">
    <div class="card-body">
      <h5 class="card-title">${data['title']}</h5>
      <p class="card-text">$${data['price'].toFixed(2)}</p>
      
      <button class="btn btn-primary"  onclick="agregarProducto({id:'${data['id']}',nombre:'${data['title']}',cantidad:1,precio:${data['price']},foto: '${data['pictures'][0]['url']}'})">Agregar al Carrito</button>
    </div>
  </div>`


    let productoHTML = document.createElement('div');
    productoHTML.classList.add('contenedor-producto', 'col-xl-3', 'col-md-4', 'col-sm-6', 'p-3',  'Secondary')

    productoHTML.innerHTML += producto;
    document.getElementById('caja').appendChild(productoHTML);
  }

}

async function getMercadoLibre() {
  console.log('hi')

  let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=11";
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
  window.location.href = "./carrito.html";

}
