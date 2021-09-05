<!DOCTYPE html>
<html lang="es">

<head>
  <!--Inicia metadatos-->
  <!-- Elementos requeridos  -->
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <meta name="keywords" content="camaras, accesorios para camara ">
  <meta name="description" content="Venta de camaras y accesorios en Línea">
  <title>Venta de camaras y accesorios</title>
  <!-- Referencia Bootstrap CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">

  <!-- Referencia Bootstrap Bundle with Popper -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
  <!--Referencia a hoja de estilo-->
  <link rel="stylesheet" type="text/css" href="css/dashboard.css">
  <!--Agrega un favicon-->
  <link rel="icon" href="img/favicon.ico" type="image/x-icon">
  <!--Referencia de framework FontAwesome-->
  <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" integrity="sha384-Bfad6CLCknfcloXFOyFnlgtENryhrpZCe29RTifKEixXQZ38WheV+i/6YWSzkz3V" crossorigin="anonymous">
  <!--Referencia de fuentes de Google-->
  <link href="https://fonts.googleapis.com/css?family=Nunito+Sans|Montserrat" rel="stylesheet">
  <!--<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Tangerine">-->
  <!--<link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">-->

  <script type="text/javascript" src="js/pedidos.js"></script>


</head>
<!--Termina metadatos-->

<body>


  <header class="navbar navbar-light sticky-top bg-light flex-md-nowrap p-0 shadow">
    <a class="navbar-brand col-md-3 col-lg-2 me-0 px-3" href="homeu.html"><img src="img/logocam.jpg" width="70%" alt=""></a>

    <button class="navbar-toggler position-absolute d-md-none collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <input class="form-control form-control-dark w-100 d-sm-none d-md-none d-lg-block" type="text" placeholder="Buscar" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap d-sm-none d-md-none d-lg-block">
        <a class=" btn btn-outline-info " href="login.html">Salir</a>
      </li>
    </ul>
  </header>

  <div class="container-fluid">
    <div class="row">
      <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
        <div class="position-sticky pt-3">
          <ul class="nav flex-column">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <i class="fas fa-home"></i>
                Inicio
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-shopping-cart"></i>
                Pedidos
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-user"></i>
                Perfil
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="login.html">
                <i class="fas fa-sign-out-alt"></i>
                Salir
              </a>
            </li>

          </ul>


        </div>
      </nav>

      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 class="h2">Bienvenido <span id="correo"><?php echo $_POST["email"]; ?> </span></h1>
          <div class="btn-toolbar mb-2 mb-md-0">
            <div class="btn-group me-2">
              <button type="button" class="btn btn-sm btn-outline-info">Compartir</button>
              <button type="button" class="btn btn-sm btn-outline-info">Exportar</button>
            </div>
            <button type="button" class="btn btn-sm btn-outline-info dropdown-toggle">
              <span data-feather="calendar"></span>
              Esta Semana
            </button>
          </div>
        </div>


        <h2>Historial de Pedidos</h2>
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <thead>
              <tr>
                <th># Pedido</th>
                <th>Fecha de Compra</th>
                <th>Total</th>
                <th>Estatus de Pedido</th>
                <th>Detalle</th>
              </tr>
            </thead>
            <tbody id="tabla">


            </tbody>
          </table>
        </div>
      </main>
    </div>
  </div>




</body>

</html>