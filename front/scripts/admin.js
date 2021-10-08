function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}
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
            <p class="card-text">Stock: ${data[0][0]['stock']}</p>
            <button class="btn btn-outline-danger"  onclick="eliminarProducto('${data[0][0]['name']}')">Eliminar producto</button>
            
        </div>
    </div>`
        let productoHTML = document.createElement('div');
        productoHTML.classList.add('contenedor-producto', 'col-xl-3', 'col-md-4', 'col-sm-6', 'p-3', 'Secondary')
        productoHTML.innerHTML += producto;
        document.getElementById(contenedor).appendChild(productoHTML);
    }

}

async function buscarAnYEd() {
    $("#cajaAdmin").empty()
    let url = 'http://localhost:3000/products';
    let resp = await fetch(url);
    const data = await resp.json();
    //console.log(data[0][0]);
    for (let i = 0; i < data[0].length; i++) {
        mostrarEnPaginaAnyEd(data[0][i]['id'])
    }
}

async function agregarProducto() {
    newProductName = document.getElementById("newProductName").value;
    if (validateText(newProductName)) {
        newProductStock = document.getElementById("newProductStock").value;
        newProductPrice = document.getElementById("newProductPrice").value;
        newProductPicture = document.getElementById("newProductPicture").value;
        if (validateText(newProductPicture)) {
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "id": newProductName,
                "name": newProductName,
                "stock": newProductStock,
                "price": newProductPrice,
                "picture": newProductPicture
            });
            console.log(newProductPicture)
            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };

            fetch("http://localhost:3000/products/insert", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    alert('Producto Agregado')
                    buscarAnYEd()
                    $('#popup').fadeOut('slow');
                    $('.popup-overlay').fadeOut('slow');
                })
                .catch(error => console.log('error', error));
        }
        else {
            alert('No inventes no puedes agregar el Vacio')
        }

    }
    else {
        alert('Ingrese un Nombre')
    }
}

async function eliminarProducto(name) {

    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + localStorage.getItem("token"));

    var requestOptions = {
        method: 'DELETE',
        headers: myHeaders,
        redirect: 'manual'
    };

    fetch("http://localhost:3000/products/delete/" + name, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            alert('Producto Eliminado')
            buscarAnYEd()
            $('#popup').fadeOut('slow');
            $('.popup-overlay').fadeOut('slow');
        })
        .catch(error => console.log('error', error));
}