class Carrito {

  
}






  async function getMercadoLibre() {
    
    let url = "https://api.mercadolibre.com/sites/MLM/search?category=MLM1039";
    let resp = await fetch(url);

    const data = await resp.json();
    console.log(data);

}

getMercadoLibre();