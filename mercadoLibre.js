//Busueda General
//https://api.mercadolibre.com/sites/MLM/search?q=Motorola%20G6
//Busqueda por categoria
//https://api.mercadolibre.com/sites/MLM/search?category=MLM1039
//Busqueda por id
//

async function getMercadoLibre() {

  let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1039";
  let resp = await fetch(url);

  const data = await resp.json();
  console.log(data['results'][0]);

  




  let producto = `
    <div class="card" style="width: 18rem;">
      <img src=${data['results'][0]['thumbnail']} class="card-img-top"
      alt="...">
      <div class="card-body">
        <h5 class="card-title">${data['results'][0]['title']}</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`


  let productoHTML = document.createElement('div');
  productoHTML.innerHTML += producto;
  document.getElementById('caja').appendChild(productoHTML);

}

getMercadoLibre()













