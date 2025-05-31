
function entrar() {
    const NOMBRE = document.getElementById("NOMBRE").value;
    const clave = document.getElementById("clave").value;
    const usuarios = {
        "fredy": "123",
        "oscar": "125",
        "Emiliana":"222",
        "Bravo": "456",
        "Ruben":"111",
        "Bravo": "456",
        "Astrid": "123",
    
    };

    if (usuarios[NOMBRE] === clave) {
        window.location.href = "index1.html";
    } else {
        alert("Username or Password");
    }
}

