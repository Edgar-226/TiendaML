function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function validateText(valor) {
    if (valor == null || valor.length == 0 || /^\s+$/.test(valor)) {
        return false;
    }
    else {
        return true
    }
}


async function login() {
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

            fetch("http://localhost:3000/login", requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                    localStorage.setItem("token", result)
                })
                .then(() => {
                    alert('Bienvenido!!')
                    window.location.href = "./shop.html";
                })
                .catch(error => { console.log('error', error) });


        } else {
            alert('Introdusca su Contraseña')
        }
    } else {
        alert('Introdusca su Usuario Correctamente')
    }
}

async function createUser() {
    newUser = document.getElementById('newUser').value;
    if (validateText(newUser)) {
        newEmail = document.getElementById('newEmail').value;
        if (validateEmail(newEmail)) {
            newName = document.getElementById('newName').value;
            if (validateText(newName)) {
                newLastname = document.getElementById('newLastname').value;
                if (validateText(newLastname)) {
                    newPhone = document.getElementById('newPhone').value;
                    console.log(isNaN(newPhone))
                    if (!isNaN(newPhone)) {
                        
                        if (validateText(newLastname)) {
                            newPass = document.getElementById('newPass').value;
                            if (validateText(newPass)) {
                                newPass2 = document.getElementById('newPass2').value;
                            if (validateText(newPass2)) {                                       
                                if(newPass == newPass2){
                                    alert('datos correctos')
                                }
                                else{
                                    alert('los password no son iguales')
                                }
                            }
                            else {
                                alert('Ingrese su Password')
                            }                                
                            }
                            else {
                                alert('Ingrese su Password')
                            }
                        }
                    }
                    else {
                        alert('Ingrese su Telefono')
                    }
                }
                else {
                    alert('Ingrese su Apellido')
                }
            }
            else {
                alert('Ingrese su nombre')
            }
        }
        else {
            alert('Ingrese su Email')
        }
    }
    else {
        alert('Ingrese su usuario')
    }
}






// Simple but unreliable function to create string hash by Sergey.Shuchkin [t] gmail.com
// alert( strhash('http://www.w3schools.com/js/default.asp') ); // 6mn6tf7st333r2q4o134o58888888888
function strhash(str) {
    if (str.length % 32 > 0) str += Array(33 - str.length % 32).join("z");
    var hash = '', bytes = [], i = j = k = a = 0, dict = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    for (i = 0; i < str.length; i++) {
        ch = str.charCodeAt(i);
        bytes[j++] = (ch < 127) ? ch & 0xFF : 127;
    }
    var chunk_len = Math.ceil(bytes.length / 32);
    for (i = 0; i < bytes.length; i++) {
        j += bytes[i];
        k++;
        if ((k == chunk_len) || (i == bytes.length - 1)) {
            a = Math.floor(j / k);
            if (a < 32)
                hash += '0';
            else if (a > 126)
                hash += 'z';
            else
                hash += dict[Math.floor((a - 32) / 2.76)];
            j = k = 0;
        }
    }
    return hash;
}


