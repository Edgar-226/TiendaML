function getToken() {
    return localStorage.getItem('token');
}
function getCarrito() {
    return localStorage.getItem('carrito');
}

async function getCart() {
    token = getToken()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/cart", requestOptions)
        .then(response => response.text())
        .then(result => localStorage.setItem('carrito', result))
        .catch(error => console.log('error', error));
}


async function eliminarProducto(id) {
    console.log(id)
    token = getToken()
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "id": id
    });

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        body: raw,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/cart/delete", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        getCart()
        alert('Producto eliminado');
        location.reload();
}


async function showCart() {
    total = 0
    await getCart()
    cart = await JSON.parse(getCarrito());


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
        for (i in cart[0]) {
            mostrarCarrito(cart[0][i]['id_product'], cart[0][i]['name_product'], cart[0][i]['price'], cart[0][i]['picture'], cart[0][i]['quantity'])
            total += cart[0][i]['price'] * cart[0][i]['quantity']
        }
        totalhtml = document.getElementById('total-carrito');
        console.log(totalhtml)
        totalhtml.textContent = `$${total.toFixed(2)}`

    }
}
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


// async function agregarProducto(id) {
//     let url = 'http://localhost:3000/ml/' + id;
//     let resp = await fetch(url);
//     const data = await resp.json();

//     articulo = {
//         'id': data['id'],
//         'nombre': data['title'],
//         'cantidad': 1,
//         'precio': data['price'],
//         'foto': data['pictures'][0]['url'],
//         'clave': 'alojomora'
//     }

//     await fetch('http://localhost:3000/cart', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(articulo)
//     });
//     alert(data['title'] + ' Ha sido agregado al Carrito')
//     getCart()
// }



function saludo() {
    console.log("Hi")
}
async function inicio(){
    await getCart()
    await showCart()
    getCarrito()
}

inicio()
