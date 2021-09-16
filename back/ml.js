
mercadoLibreGet = async function  (){
    console.log('hi')

    let url = `https://api.mercadolibre.com/sites/MLM/search?category=MLM1039&offset=10&limit=11`;
    let resp =  fetch(url);
    const data = await resp.json();
    return data;
}

async function poke (){
    da
}

module.exports = {mercadoLibreGet};