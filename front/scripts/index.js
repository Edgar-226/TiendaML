async function mostrarCarrito(id, nombre, precio, imagen, cantidad) {
    if (document.getElementById('productosCarrito')) {
        let producto = `
            <div class="contenido-producto border" style="justify-content: center;">
                <img src="${imagen}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${nombre}</h5>
                    <p class="card-text">Cantidad: ${cantidad}</p>
                    <p class="card-text">$${(precio * cantidad).toFixed(2)}</p>
                    <button class="btn btn-primary" onclick="eliminarProducto('${id}')">Eliminar</button>
                </div>
            </div>`;

        let productoHTML = document.createElement('div');
        productoHTML.classList.add('contenedor-producto', 'col-xl-3', 'col-md-4', 'col-sm-6', 'Secondary')

        productoHTML.innerHTML += producto;
        document.getElementById('productosCarrito').appendChild(productoHTML);
    }
}

async function getCart() {
    token = localStorage()
    const result = await fetch('http://localhost:3000/cart');
    const cart = await result.json();
    var total = 0;

    if ($.isEmptyObject(cart)) {
        if (document.getElementById('productosCarrito')) {
            let mensaje = `<h1>El Carrito Esta Vacio</h1>`;
            let productoHTML = document.createElement('div');
            productoHTML.classList.add('contenedor-producto', 'center')
            productoHTML.innerHTML += mensaje;
            document.getElementById('productosCarrito').appendChild(productoHTML);
        }
    }
    else {
        for (i in cart) {
            mostrarCarrito(cart[i]['id'], cart[i]['nombre'], cart[i]['precio'], cart[i]['foto'], cart[i]['cantidad'])
            total += cart[i]['precio'] * cart[i]['cantidad']
        }
        totalhtml = document.getElementById('total-carrito');
        totalhtml.textContent = `$${total.toFixed(2)}`
        console.log(totalhtml)
    }
}

getCart()


async function agregarProducto(id) {
    let url = 'http://localhost:3000/ml/' + id;
    let resp = await fetch(url);
    const data = await resp.json();

    articulo = {
        'id': data['id'],
        'nombre': data['title'],
        'cantidad': 1,
        'precio': data['price'],
        'foto': data['pictures'][0]['url'],
        'clave': 'alojomora'
    }

    await fetch('http://localhost:3000/cart', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(articulo)
    });
    alert(data['title'] + ' Ha sido agregado al Carrito')
    getCart()
}


async function eliminarProducto(id) {
    await fetch('http://localhost:3000/cart/' + id + '/alojomora', {
        method: 'DELETE'
    });
    // const cart = getCart();
    // console.log(cart)
    alert('Producto eliminado');
    location.reload();
}

function saludo() {
    console.log("Hi")
}



