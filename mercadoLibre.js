
///Acceder a la lista de categorias
// async function getMercadoLibre() {
//     let url = "https://api.mercadolibre.com/sites/MLM/categories";
//     let resp = await fetch(url);

//     const data = await resp.json();
//     console.log(data);

// }


// Accede a los mas vendidos de una categoria {
//   "id": "MLM1039",
//   "name": "Cámaras y Accesorios"
//}

//https://auth.mercadolibre.com.mx/authorization?response_type=901&client_id=$7671715030088705

async function getMercadoLibre() {
    // let url = "'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/highlights/MLM/category/MLM1039";
    let url = "https://auth.mercadolibre.com.mx/authorization?response_type=code&client_id=$7671715030088705&redirect_uri=$https://www.mercadolibre.com.mx/";
    let resp = await fetch(url);

    const data = await resp.json();
    console.log(data);

}

async function CreatePoke(a) {
    let ctn = document.createElement('div');
    let nombre = document.createElement('h2');
    nombre.textContent = `${this.data.name} #${this.data.id}`;
    let img = document.createElement('img');
    img.setAttribute('src', this.data.sprites.front_default);
    ctn.appendChild(nombre);
    ctn.appendChild(img);
    pokeDiv.appendChild(ctn);
}


getMercadoLibre();