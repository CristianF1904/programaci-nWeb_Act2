function validar(){
    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellidoP = document.getElementById("apellidoP").value;
    var apellidoM = document.getElementById("apellidoM").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var genero = document.getElementById("genero").value;

    var larRut = rut.length;
    var larNombre = nombre.length;
    var larApellidoP = apellidoP.length;
    var larApellidoM = apellidoM.length;
    var larTelefono = telefono.length;


    if (larRut == 9 || larRut == 10) {
        if (larNombre >= 3 && larNombre <= 20) {
            if (larApellidoP >= 3 && larApellidoP <= 20) {
                if (larApellidoM >= 3 && larApellidoM <= 20) {
                    if (edad >= 18 && edad <= 35) {
                        if (genero != "0") {
                            if (larTelefono >= 9 && larTelefono <=12) {
                                alert("Formulario enviado correctamente");
                            }else{
                                alert("Telefono ingresado no valido, ingresar nuevamente");
                            }
                        }else{
                            alert("Seleccione un genero");
                        }
                    }else{
                        alert("Usted no cumple con la edad requerida");
                    }
                }else{
                    alert("Apellido no valido, ingresar nuevamente");
                }
            }else{
                alert("Apellido no valido, ingresar nuevamente");
            }
        }else{
            alert("Nombre no valido, ingresar nuevamente");
        }
    }else{
        alert("Rut no valido, ingrese nuevamente rut");
    }
}

function generarCarta(){
    var carta = document.getElementById("carta");

    var rut = document.getElementById("rut").value;
    var nombre = document.getElementById("nombre").value;
    var apellidoP = document.getElementById("apellidoP").value;
    var apellidoM = document.getElementById("apellidoM").value;
    var edad = document.getElementById("edad").value;
    var telefono = document.getElementById("telefono").value;
    var genero = document.getElementById("genero").value;

    carta.value = "Rut: " + rut + "\n" +
        "Nombre: " + nombre + "\n" +
        "Apellidos: " + apellidoP + " " + apellidoM + "\n" +
        "Edad: " + edad + "\n" +
        "Número Telefonico: " + telefono + "\n" + 
        "Genero: " + genero;





}

