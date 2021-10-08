
async function mostrarEnPaginaAnyEd(idProducto, contenedor = 'cajaAdmin') {
    if (document.getElementById(contenedor)) {
        let url = 'http://localhost:3000/products/' + idProducto;
        let resp = await fetch(url);
        const data = await resp.json();
        let producto = `
    <div class="border contenido-producto" style="justify-content: center;">
      <img src=${data[0][0]['picture']} class="card-img-top"
      alt="...">
      <div class="card-body">
        <h5 class="card-title">${data[0][0]['name']}</h5>
        <p class="card-text">$${data[0][0]['price'].toFixed(2)}</p>
        <button class="btn btn-outline-danger"  onclick="agregarProducto('${data[0][0]['id']}',false)">Eliminar producto</button>
        <button class="btn btn-outline-warning"  onclick="agregarProducto('${data[0][0]['id']}',false)">Actualizar producto</button>
      </div>
    </div>`
        let productoHTML = document.createElement('div');
        productoHTML.classList.add('contenedor-producto', 'col-xl-3', 'col-md-4', 'col-sm-6', 'p-3', 'Secondary')
        productoHTML.innerHTML += producto;
        document.getElementById(contenedor).appendChild(productoHTML);
    }

}




async function buscarAnYEd() {
    let url = 'http://localhost:3000/products';
    let resp = await fetch(url);
    const data = await resp.json();
    //console.log(data[0][0]);
    for (let i = 0; i < data[0].length; i++) {
        mostrarEnPaginaAnyEd(data[0][i]['id'])
    }
}