async function getMercadoLibre(cat = 'MLM1039') {
    let productos = {}
    let url = `https://api.mercadolibre.com/sites/MLM/search?category=${cat}&offset=10&limit=11`;
    let resp = await fetch(url);
    const data = await resp.json();
    //console.log(data['results']);
    

    for (let i = 0; i < data['results'].length; i++) {
        productos[data['results'][i]['id']] = await consultaProducto(data['results'][i]['id'])
        
    }
    
    return productos
}

async function consultaProducto(idProducto) {
    let producto = {} 
    let url = 'https://api.mercadolibre.com/items/' + idProducto;
    
    let resp = await fetch(url);
    const data = await resp.json();
    return {'id':data['id'],'nombre':data['title'],'cantidad':1,'precio':data['price'],'foto': data['pictures'][0]['url']};
    
}

console.log(await getMercadoLibre());

module.exports = {getMercadoLibre, consultaProducto}