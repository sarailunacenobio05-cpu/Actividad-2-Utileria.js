
const utileria = {
    //Valida el formato de un correo electronico
    validarCorreo(correo) { //Correo a validar
        const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return mail.test(correo); //Regresa true si el formato es valido
    },
    //Valida que el texto contenga solo letras

    soloLetras(texto) { //Texto a validar
        const text = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; 
        return text.test(texto); //Regresa True si se cumpl
    },
    //Valida que la longitud de un número sea menor o igual al máximo.

    validarLongitud(numero, maxLongitud) { //Numero a evaluar y longitud maxima 
        const str = String(numero);
        return str.length <= maxLongitud; //Regresa true si la longitud es menor o igual
    },

    //Calcula la edad exacta utilizando la fecha de nacimiento
    calcularEdad(fechaNacimiento) { //Fecha de nacimiento
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        } 
        return edad; //Devuelve la edad calculada
    },
    //Valida si una persona es mayor de edad
    esMayorDeEdad(fechaNacimiento) { //Recibe fecha de nacimiento
        return this.calcularEdad(fechaNacimiento) >= 18; //Devuelve true si es mayor de edad
    },

    //Valida si la contraseña cumple con los requisistos

    validarPassword(password) { //Contraseña a evaluar
        const cont = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return cont.test(password); //Devuelve true si cumple con los requisistos
    },

    //EXTRA

    //Valida si el numero ingresado es valido
    validarTelefono(telefono) { //Numero de telefono a evaluar
        const tel = /^\d{10}$/;
        return tel.test(String(telefono).trim()); //Devuelve true si tiene los 10 digitos 
    },
    
    //Valida un codigo postal

    validarCP(cp) {
        const regex = /^\d{5}$/;
        return regex.test(String(cp).trim());
    }
};