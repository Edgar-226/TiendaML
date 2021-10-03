let carrito = {}
function getToken() {
    return localStorage.getItem('token');
    //console.log(token)
}

async function getCart() {
    let token =  getToken()
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + token);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/cart", requestOptions)
        .then(response => response.text())
        .then(result => {
            carrito = JSON.parse(result)  
            console.log(carrito)
            showCart()                   
        })
        .catch(error => console.log('error', error));
}





async function showCart() {
    let total = 0
    
    
    if ($.isEmptyObject(carrito[0])) {

        if (document.getElementById('productosCarrito')) {
            let mensaje = `<h1>El Carrito Esta Vacio</h1>`;
            let productoHTML = document.createElement('div');
            productoHTML.classList.add('contenedor-producto', 'center')
            productoHTML.innerHTML += mensaje;
            document.getElementById('productosCarrito').appendChild(productoHTML);
        }
    }
    else {
        for (i in carrito[0]) {
            mostrarCarrito(carrito[0][i]['id_product'], carrito[0][i]['name_product'], carrito[0][i]['price'], carrito[0][i]['picture'], carrito[0][i]['quantity'])
            total += carrito[0][i]['price'] * carrito[0][i]['quantity']
        }
        totalhtml = document.getElementById('total-carrito');
        totalhtml.textContent = `$${total.toFixed(2)}`

        const cajaCarrito = document.getElementById('productosCarrito')
        if (cajaCarrito) {
            let mensaje = `<button class="btn btn-primary" onclick="saludo()">Finalizar Compra</button>`;
            let productoHTML = document.createElement('div');
            productoHTML.classList.add('contenedor-producto', 'center')
            productoHTML.innerHTML += mensaje;
            document.getElementById('productosCarrito').appendChild(productoHTML);
        }
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


async function agregarProducto(id, ml = true) {
    enExistencia = false
    let token = getToken()
    await getCart()

    if (token == null) {
        console.log(token)
        alert("Acceda a su cuenta")
        window.location.href = "./login.html";
    }
    else {
        
        
        console.log(await carrito[0])
        for (let i = 0; i < carrito[0].length; i++) {
            if (id == carrito[0][i].id_product) {
                var myHeaders = new Headers();
                myHeaders.append("Authorization", "Bearer " + token);
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "id": id,
                    "quantity": carrito[0][i].quantity + 1
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'manual'
                };

                fetch("http://localhost:3000/cart/update", requestOptions)
                    .then(response => response.text())
                    .then(result => {
                        console.log(result)
                        alert(carrito[0][i].name_product + "A sido agregado al carrito")
                    })
                    .then(() => {
                        getCart()
                        getCarrito()
                        
                    })
                    .catch(error => console.log('error', error));
                enExistencia = true
            }
        }
        if (!enExistencia) {
            if (ml) {
                let url = 'http://localhost:3000/ml/' + id;
                let resp = await fetch(url);
                const data = await resp.json();
                producto = { id: data.id, name: data.title, ml: 1, quantity: 1, price: data.price, picture: data['pictures'][0]['url'] }
            } else {
                let url = 'http://localhost:3000/products/' + id;
                let resp = await fetch(url);
                const data = await resp.json();
                producto = { id: data[0][0].id, name: data[0][0].name, ml: 0, quantity: 1, price: data[0][0].price, picture: data[0][0].picture }
            }

            console.log(producto);
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + token);
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify(producto);

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };
            fetch("http://localhost:3000/cart/add", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    alert(producto.name + "A sido agregado al carrito")
                })
                .then(() => {
                    getCart()
                    showCart()
                })
                .catch(error => console.log('error', error));
        }
    }

}

async function eliminarProducto(id) {
    let token = getToken()
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
        
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    getCart()
    alert('Producto eliminado');
    location.reload();
}





function saludo() {
    console.log("Hi")
}

