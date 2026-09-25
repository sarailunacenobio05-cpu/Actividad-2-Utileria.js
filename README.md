# Librería utileria.js

**Materia:** Programación Web 

**Autor:**
Luna Cenobio Sarai

**Problema que resuelve:**  
Evita escribir validaciones repetitivas en cada formulario web, centralizando y reutilizando la lógica esencial (correos, contraseñas, longitudes y fechas) en un solo archivo de JavaScript puro.

---

## Instalación

Para utilizar esta librería en cualquiera de tus proyectos, simplemente descarga el archivo `utileria.js` y enlázalo en tu documento HTML antes del cierre de la etiqueta `<body>` o dentro de la etiqueta `<head>`:

```html
<script src="js/utileria.js"></script>

o

<head>
  <script src="js/utileria.js"></script>
</head>

---
## Funciones


---

### 1. `validarCorreo(correo)`

**Qué hace:** Valida si una cadena de texto cumple con el formato básico de un correo electrónico mediante una expresión regular.

*Funcion:**
```javascript
validarCorreo(correo) { 
        const mail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        return mail.test(correo); 
    }


**Ejemplos :**

```javascript
validarCorreo("test@example.com"); 
// Retorna: true

validarCorreo("correo-invalido.com"); 
// Retorna: false

---

### 2. `soloLetras(texto)`

**Qué hace:** Comprueba que un texto contenga exclusivamente letras (incluyendo acentos y la letra ñ) y espacios, evitando números o símbolos.

*Funcion:**
```javascript
soloLetras(texto) { 
        const text = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/; 
        return text.test(texto);
    }

**Ejemplos :**

```javascript
soloLetras("María José"); 
// Retorna: true

soloLetras("Usuario123"); 
// Retorna: false

---

### 3. `validarLongitud(numero, maxLongitud)`

**Qué hace:** Evalúa si la cantidad de dígitos o caracteres de un valor numérico (convertido a cadena) es menor o igual al límite máximo permitido.

**Funcion:**
```javascript
validarLongitud(numero, maxLongitud) {
        const str = String(numero);
        return str.length <= maxLongitud; 
    }

**Ejemplo de uso y consola:**

```javascript
validarLongitud(12345, 5); 
// Retorna: true

validarLongitud(123456, 5); 
// Retorna: false

---

### 4. `utileria.calcularEdad(fechaNacimiento)`

**Qué hace:** Calcula de forma exacta la edad en años actuales tomando como referencia una fecha de nacimiento proporcionada en formato de fecha.

**Funcion:**
```javascript
calcularEdad(fechaNacimiento) { 
        const hoy = new Date();
        const nacimiento = new Date(fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const m = hoy.getMonth() - nacimiento.getMonth();
        if (m < 0 || (m === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        } 
        return edad; 
    }


**Ejemplo :**

```javascript
utileria.calcularEdad("2000-05-15"); 
// Resultado: 26 (dependiendo del año actual en curso)

---

### 5. `esMayorDeEdad(fechaNacimiento)`

**Qué hace:** Determina si una persona es mayor de edad (18 años o más) evaluando el resultado devuelto por la función calcularEdad.

**Funcion:**
```javascript
esMayorDeEdad(fechaNacimiento) {
        return this.calcularEdad(fechaNacimiento) >= 18; 
    }


**Ejemplo de uso y consola:**

```javascript
utileria.esMayorDeEdad("2000-05-15"); 
// Retorna: true

utileria.esMayorDeEdad("2015-08-20") 
// Retorna: false

---

### 6. `utileria.validarPassword(password)`

**Qué hace:** Verifica que una contraseña cumpla con estándares estrictos de seguridad: mínimo 8 caracteres, al menos una letra minúscula, una mayúscula, un número y un carácter especial.

**Funcion:**
```javascript
validarPassword(password) { 
        const cont = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return cont.test(password); 
    }


**Ejemplo de uso y consola:**

```javascript
utileria.validarPassword("P@ssw0rd1"); 
// Retorna: true

utileria.validarPassword("debil"); 
// Retorna: false

---
## Funciones adicionales
### 7. `utileria.validarTelefono(telefono)`

**Qué hace:** Comprueba que un número telefónico tenga exactamente 10 dígitos numéricos válidos, limpiando espacios previos o posteriores.

**Funcion:**
```javascript
validarTelefono(telefono) { 
        const tel = /^\d{10}$/;
        return tel.test(String(telefono).trim()); 
    }


**Ejemplo de uso y consola:**

```javascript
utileria.validarTelefono("9511234567"); 
// Retorna: true

utileria.validarTelefono("12345"); 
// Retorna: false

---

### 8. `vutileria.validarCP(cp)`

**Qué hace:** EValida que un código postal conste exactamente de 5 dígitos numéricos.

**Funcion:**
```javascript
validarCP(cp) {
        const regex = /^\d{5}$/;
        return regex.test(String(cp).trim());
    }


**Ejemplo de uso y consola:**

```javascript
utileria.validarCP("68120"); 
// Retorna: true

utileria.validarCP("1234"); 
// Retorna: false



##Capturas de pantalla

**Formulario de registro**
![Formulario de registro](img/registro.png)

**Modal de registro**
![Modal de registro](img/modal.png)

**Login**
![Validación del index](img/login.png)



##Video 