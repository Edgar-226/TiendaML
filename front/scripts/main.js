$(function () {

    $(".header").append(`<header class="header">
    <section class="header-top">
        <div class="container">
            <div class="row">
                <div class="col-sm-12">
                    <div class="header-top-center">
                        <p>Envíos a Todo México - Gratis para Compras Mayores a $599.00</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section>
        <div class="container">
            <div class="row">
                <article class="col-lg-3 col-md-4 col-sm-12">
                    <div class="header-logo">
                        <a href="index.html"><img src="img/logohead.png" style=width:82% alt=""></a>
                    </div>
                </article>
                <article class="col-lg-6 col-md-4 col-sm-12">
                        <nav class="navbar navbar-expand-lg navbar-light p-4 mt-2 header-menu">
                            <div class="container-fluid justify-content-center">
                                <button class="navbar-toggler " type="button" data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li class="nav-item">
                                            <a class="nav-link"  href="index.html">Inicio</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="shop.html">Tienda</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="login.html">Entrar</a>
                                        </li>
                                        
                                        <li class="nav-item">
                                            <a class="nav-link" href="help.html">Ayuda</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </article>
                <article class="col-lg-3 col-md-4 col-sm-12">
                    <div class="header-nav-option"  style = "display:flex;">
                        <a href="./shop.html"><img src="img/search.png" alt=""></a>
                        <a href="#"><img src="img/heart.png" alt=""></a>
                        <a class="carrito" onclick='irCarrito()'><img src="img/cart.png" alt=""> </a>
                        <p class="carrito" onclick='irCarrito()' id="total-carrito" class="total-carrito">$0.00</p>
                    
                        
                    </div>
                </article>
            </div>
        </div>
    </section>
</header>
<!-- Fin del Header -->`);

    $(".footer").append(`<h3>Síguenos</h3>
<span>
    <a href="index.html"><img src="img/logofoot.png" style=width:15% alt=""></a>
    <a href="https://www.facebook.com/"><i class="fab fa-facebook-square"></i></a>
    <a href="https://www.instagram.com/"><i class="fab fa-instagram-square"></i></a>
</span>`
    );

    function ocultarCajas() {
        $("#caja").hide();
        $("#cajaML").hide();
        $("#cajaPolaroid").hide();
        $("#cajaKodak").hide();
        $("#cajaNikon").hide();
        $("#cajaBuscar").hide()
    }


    $(".botonBusqueda").click(async function () {
        $("#cajaBuscar").empty()
        const busqueda = $(".formularioBusqueda").val()
        await buscarMercadoLibre(busqueda, 'cajaBuscar');
        ocultarCajas()
        $("#cajaBuscar").show()
    })

    $(".BotonAnyEd").click(function () {
        ocultarCajas()
        $("#caja").show();
    });
    $(".BotonMercadoL").click(function () {
        ocultarCajas()
        $("#cajaML").show();
    });
    $(".BotonPolaroid").click(function () {
        ocultarCajas()
        $("#cajaPolaroid").show();
    });
    $(".BotonKodak").click(function () {
        ocultarCajas()
        $("#cajaKodak").show();
    });
    $(".BotonNikon").click(function () {
        ocultarCajas()
        $("#cajaNikon").show();
    });


})



getCart()
