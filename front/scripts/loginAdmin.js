const { response } = require("express");
const { result } = require("lodash");

function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}

function validarAdmin() {
    if (localStorage.getItem("tokenAdmin")) {
        window.location.href = "./admin.html";
    }
}

validarAdmin()

async function loginAdmin() {
    let temToken 
    userUser = document.getElementById('loginUser').value;
    if (validateText(userUser)) {
        userPassword = document.getElementById('loginPassword').value;
        if (validateText(userPassword)) {
            let login = { user: userUser, password: userPassword }

            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");

            var raw = JSON.stringify({
                "user": userUser,
                "password": userPassword
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'manual'
            };

            fetch("http://localhost:3000/loginAdmin", requestOptions)
                .then(response => response.text())
                .then(result => {


                    temToken = result

                })
                .then(() => {
                    
                    if (temToken.length > 34) {
                        localStorage.removeItem("token");
                        localStorage.setItem("tokenAdmin", temToken)
                        console.log(temToken)
                        alert('Bienvenido!!')
                        window.location.href = "./admin.html";
                    }
                    else {
                        alert('No pasas');
                    }
                })
                .catch(error => { console.log('error', error) });


        } else {
            alert('Introdusca su Contraseña')
        }
    } else {
        alert('Introdusca su Usuario Correctamente')
    }
}
