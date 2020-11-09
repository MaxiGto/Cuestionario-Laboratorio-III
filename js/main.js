(function() {
    "use strict"

    document.addEventListener("DOMContentLoaded", function() {


        /**  Secciones **/

        const campoPersonal = document.querySelector(".campo-personal");
        const campoHistoria = document.querySelector(".campo-historia");
        const campoLengua = document.querySelector(".campo-lengua");
        const campoMatematica = document.querySelector(".campo-matematica");
        const campoQuimica = document.querySelector(".campo-quimica");
        const campoFisica = document.querySelector(".campo-fisica");
        const campoResultados = document.querySelector(".campo-resultados");

        /** Otras variables **/

        var yCoord = 565;
        var preguntasSeccion = 5;
        var calificacion = [" Correcto", " Incorrecto"];
        var calificacionFinal = [" Aprobado &#10004;", " Recupera &#10008;"];

        /** Pautas del Examen **/

        document.getElementById("pautas-examen").onclick = function() {

            const instructivo = document.querySelector(".instructivo");

            instructivo.style.display = "none";
            campoPersonal.style.display = "block";
            window.scroll(0, yCoord);
        }


        /** Información Personal **/

        document.getElementById("btnPersonal").onclick = function() {

            //Elementos

            const nombre = document.getElementById("nombre");
            const apellido = document.getElementById("apellido");
            const legajo = document.getElementById("legajo");
            const correo = document.getElementById("correo");
            const telefono = document.getElementById("telefono");
            const declaracionJurada = document.getElementById("acepto");

            // Divs de error

            var campoObligatorio = "*Este campo es obligatorio";
            const errorNombre = document.getElementById("error-nombre");
            const errorApellido = document.getElementById("error-apellido");
            const errorLegajo = document.getElementById("error-legajo");
            const errorCorreo = document.getElementById("error-correo");
            const errorTelefono = document.getElementById("error-telefono");


            if (nombre.value != "" && apellido.value != "" && legajo.value != "" && correo.value != "" && verificarCorreo(correo) && telefono.value != "" && declaracionJurada.checked == true) {
                campoPersonal.style.display = "none";
                campoHistoria.style.display = "block";
                window.scroll(0, yCoord);

            } else {
                if (nombre.value == "") {
                    nombre.style.marginBottom = "10px";
                    errorNombre.style.display = "block";
                    errorNombre.innerHTML = campoObligatorio;
                    nombre.style.border = "1px solid red";
                }

                if (apellido.value == "") {
                    apellido.style.marginBottom = "10px";
                    errorApellido.style.display = "block";
                    errorApellido.innerHTML = campoObligatorio;
                    apellido.style.border = "1px solid red";
                }

                if (legajo.value == "") {
                    legajo.style.marginBottom = "10px";
                    errorLegajo.style.display = "block";
                    errorLegajo.innerHTML = campoObligatorio;
                    legajo.style.border = "1px solid red";
                }

                if (correo.value == "" || !verificarCorreo(correo)) {
                    correo.style.marginBottom = "10px";
                    errorCorreo.style.display = "block";
                    correo.style.border = "1px solid red";
                    if(correo.value == "") errorCorreo.innerHTML = campoObligatorio;
                    if(!verificarCorreo(correo) && correo.value != "") errorCorreo.innerHTML = "*La dirección de E-mail debe contener el símbolo \"@\"";
                }

                if (telefono.value == "") {
                    telefono.style.marginBottom = "10px";
                    errorTelefono.style.display = "block";
                    errorTelefono.innerHTML = campoObligatorio;
                    telefono.style.border = "1px solid red";
                }

                nombre.onclick = function() {
                    nombre.style.marginBottom = "30px";
                    errorNombre.style.display = "none";
                    nombre.style.border = "none";
                }

                apellido.onclick = function() {
                    apellido.style.marginBottom = "30px";
                    errorApellido.style.display = "none";
                    apellido.style.border = "none";
                }

                legajo.onclick = function() {
                    legajo.style.marginBottom = "30px";
                    errorLegajo.style.display = "none";
                    legajo.style.border = "none";
                }

                correo.onclick = function() {
                    correo.style.marginBottom = "30px";
                    errorCorreo.style.display = "none";
                    correo.style.border = "none";
                }

                telefono.onclick = function() {
                    telefono.style.marginBottom = "30px";
                    errorTelefono.style.display = "none";
                    telefono.style.border = "none";
                }

                if (declaracionJurada.checked == false) {
                    alert("Debe aceptar la Declaración Jurada");
                }
            }

        }


        /** Historia **/

        document.getElementById("btnHistoria").onclick = function () {

            // Elementos

            const h1 = document.getElementById("h1");
            const h3 = document.getElementById("h3c");
            const h4 = document.getElementById("h4");
            const h5 = document.getElementById("h5a");

            // Otras variables

            var puntajeHistoria = 0;
            var correctas = [1929, "right", "nagasaki", "union-sovietica", "pearl-harbour"];
            var opcion = confirm("¿Seguro/a que desea continuar? No podrá regresar a esta sección");

            if (opcion == true) {

                if (h1.value == correctas[0]) {
                    puntajeHistoria += 1;
                    document.getElementById("resultado-h1").innerHTML = calificacion[0];
                    document.getElementById("resultado-h1").style.color = "green";
                } else{
                    document.getElementById("resultado-h1").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[0];
                    document.getElementById("resultado-h1").style.color = "red";
                }

                if(puntuarCheckboxes("h2", correctas[1]) == 1){
                    puntajeHistoria += 1;
                    document.getElementById("resultado-h2").innerHTML = calificacion[0];
                    document.getElementById("resultado-h2").style.color = "green";
                } else{
                    document.getElementById("resultado-h2").innerHTML = calificacion[1];
                    document.getElementById("resultado-h2").style.color = "red";
                }

                if (h3.checked == true){
                    puntajeHistoria += 1;
                    document.getElementById("resultado-h3").innerHTML = calificacion[0];
                    document.getElementById("resultado-h3").style.color = "green";
                } else{
                    document.getElementById("resultado-h3").innerHTML = calificacion[1];
                    document.getElementById("resultado-h3").style.color = "red";
                }

                if (h4.value == correctas[3]) {
                    puntajeHistoria += 1;
                    document.getElementById("resultado-h4").innerHTML = calificacion[0];
                    document.getElementById("resultado-h4").style.color = "green";
                } else{
                    document.getElementById("resultado-h4").innerHTML = calificacion[1];
                    document.getElementById("resultado-h4").style.color = "red";
                }

                if (h5.checked == true) {
                    puntajeHistoria += 1;
                    document.getElementById("resultado-h5").innerHTML = calificacion[0];
                    document.getElementById("resultado-h5").style.color = "green";
                } else{
                    document.getElementById("resultado-h5").innerHTML = calificacion[1];
                    document.getElementById("resultado-h5").style.color = "red";
                }


                var correctasHistoria = document.getElementById("correctas-1");
                var calificacionHistoria = document.getElementById("calificacion-1");

                correctasHistoria.innerHTML = correctasHistoria.innerHTML + puntajeHistoria + "/" + preguntasSeccion;

                if (puntajeHistoria >= 3) 
                    calificacionHistoria.innerHTML = calificacionHistoria.innerHTML + calificacionFinal[0];
                else 
                    calificacionHistoria.innerHTML = /*calificacionHistoria.innerHTML +*/ calificacionFinal[1];


                campoHistoria.style.display = "none";
                campoLengua.style.display = "block";
                window.scroll(0, yCoord);

               
            } else return false;

        }


        /** Lengua y Literatura **/

        document.getElementById("btnLengua").onclick = function() {

            // Elementos

            const l1 = document.getElementById("l1c");
            const l2 = document.getElementById("l2");
            const l3 = document.getElementById("l3d");
            const l4 = document.getElementById("l4");
            const l5 = document.getElementById("l5c");

            var puntajeLengua = 0;
            var correctas = ["right", "semantica", "right", "ORWELL", "right"];
            var opcion = confirm("¿Seguro/a que desea continuar? No podrá regresar a esta sección");

            if (opcion == true) {
                if (l1.checked == true) {
                    puntajeLengua += 1;
                    document.getElementById("resultado-l1").innerHTML = calificacion[0];
                    document.getElementById("resultado-l1").style.color = "green";
                } else{
                    document.getElementById("resultado-l1").innerHTML = calificacion[1];
                    document.getElementById("resultado-l1").style.color = "red";
                }

                if (l2.value == correctas[1]) {
                    puntajeLengua += 1;
                    document.getElementById("resultado-l2").innerHTML = calificacion[0];
                    document.getElementById("resultado-l2").style.color = "green";
                } else{
                    document.getElementById("resultado-l2").innerHTML = calificacion[1];
                    document.getElementById("resultado-l2").style.color = "red";
                }


                if (l3.checked == true) {
                    puntajeLengua += 1;
                    document.getElementById("resultado-l3").innerHTML = calificacion[0];
                    document.getElementById("resultado-l3").style.color = "green";
                } else{
                    document.getElementById("resultado-l3").innerHTML = calificacion[1];
                    document.getElementById("resultado-l3").style.color = "red";
                }


                if ((l4.value).toUpperCase() == correctas[3]) {
                    puntajeLengua += 1;
                    document.getElementById("resultado-l4").innerHTML = calificacion[0];
                    document.getElementById("resultado-l4").style.color = "green";
                } else{
                    document.getElementById("resultado-l4").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[3];
                    document.getElementById("resultado-l4").style.color = "red";
                }


                if (l5.checked == true) {
                    puntajeLengua += 1;
                    document.getElementById("resultado-l5").innerHTML = calificacion[0];
                    document.getElementById("resultado-l5").style.color = "green";
                } else{
                    document.getElementById("resultado-l5").innerHTML = calificacion[1];
                    document.getElementById("resultado-l5").style.color = "red";
                }


                var correctasLengua = document.getElementById("correctas-2");
                var calificacionLengua = document.getElementById("calificacion-2");

                correctasLengua.innerHTML = correctasLengua.innerHTML + puntajeLengua + "/" + preguntasSeccion;

                if (puntajeLengua >= 3) 
                    calificacionLengua.innerHTML = calificacionLengua.innerHTML + calificacionFinal[0];
                else 
                    calificacionLengua.innerHTML = calificacionLengua.innerHTML + calificacionFinal[1];

                campoLengua.style.display = "none";
                campoMatematica.style.display = "block";
                window.scroll(0, yCoord);

            } else return false;
        }


        /** Matemática **/

        document.getElementById("btnMatematica").onclick = function() {

            // Elementos

            const m1 = document.getElementById("m1");
            const m2 = document.getElementById("m2b");
            const m4 = document.getElementById("m4b");
            const m5 = document.getElementById("m5");

            var puntajeMatematica = 0;
            var correctas = [306, "right", "right", "right", "85"];
            var opcion = confirm("¿Seguro/a que desea continuar? No podrá regresar a esta sección");

            if (opcion == true) {
                if (m1.value == correctas[0]) {
                    puntajeMatematica += 1;
                    document.getElementById("resultado-m1").innerHTML = calificacion[0];
                    document.getElementById("resultado-m1").style.color = "green";
                } else{
                    document.getElementById("resultado-m1").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[0];
                    document.getElementById("resultado-m1").style.color = "red";
                }

                if (m2.checked == true) {
                    puntajeMatematica += 1;
                    document.getElementById("resultado-m2").innerHTML = calificacion[0];
                    document.getElementById("resultado-m2").style.color = "green";
                } else{
                    document.getElementById("resultado-m2").innerHTML = calificacion[1];
                    document.getElementById("resultado-m2").style.color = "red";
                }

                if(puntuarCheckboxes("m3", correctas[2]) == 1) {
                    puntajeMatematica += 1;
                    document.getElementById("resultado-m3").innerHTML = calificacion[0];
                    document.getElementById("resultado-m3").style.color = "green";
                } else{
                    document.getElementById("resultado-m3").innerHTML = calificacion[1];
                    document.getElementById("resultado-m3").style.color = "red";
                }
                
                if (m4.checked == true) {
                    puntajeMatematica += 1;
                    document.getElementById("resultado-m4").innerHTML = calificacion[0];
                    document.getElementById("resultado-m4").style.color = "green";
                } else{
                    document.getElementById("resultado-m4").innerHTML = calificacion[1];
                    document.getElementById("resultado-m4").style.color = "red";
                }

                if (m5.value == correctas[4]) {
                    puntajeMatematica += 1;
                    document.getElementById("resultado-m5").innerHTML = calificacion[0];
                    document.getElementById("resultado-m5").style.color = "green";
                } else{
                    document.getElementById("resultado-m5").innerHTML = calificacion[1];
                    document.getElementById("resultado-m5").style.color = "red";
                }


                var correctasMatematica = document.getElementById("correctas-3");
                var calificacionMatematica = document.getElementById("calificacion-3");

                correctasMatematica.innerHTML = correctasMatematica.innerHTML + puntajeMatematica + "/" + preguntasSeccion;

                if (puntajeMatematica >= 3) 
                    calificacionMatematica.innerHTML = calificacionMatematica.innerHTML + calificacionFinal[0];
                else 
                    calificacionMatematica.innerHTML = calificacionMatematica.innerHTML + calificacionFinal[1];

                campoMatematica.style.display = "none";
                campoQuimica.style.display = "block";
                window.scroll(0, yCoord);

            } else return false;
        }


        /** Química **/

        document.getElementById("btnQuimica").onclick = function() {

            // Elementos

            const q1 = document.getElementById("q1");
            const q2 = document.getElementById("q2");
            const q3 = document.getElementById("q3c");
            const q4 = document.getElementById("q4");
            const q5 = document.getElementById("q5c");

            var puntajeQuimica = 0;
            var correctas = ["HG", 47, "right", "1", "right"];
            var opcion = confirm("¿Seguro/a que desea continuar? No podrá regresar a esta sección");

            if (opcion == true) {
                if ((q1.value).toUpperCase() == correctas[0]) {
                    puntajeQuimica += 1;
                    document.getElementById("resultado-q1").innerHTML = calificacion[0];
                    document.getElementById("resultado-q1").style.color = "green";
                } else{
                    document.getElementById("resultado-q1").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[0];
                    document.getElementById("resultado-q1").style.color = "red";
                }

                if (q2.value == correctas[1]) {
                    puntajeQuimica += 1;
                    document.getElementById("resultado-q2").innerHTML = calificacion[0];
                    document.getElementById("resultado-q2").style.color = "green";
                } else{
                    document.getElementById("resultado-q2").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[1];
                    document.getElementById("resultado-q2").style.color = "red";
                }

                if (q3.checked == true) {
                    puntajeQuimica += 1;
                    document.getElementById("resultado-q3").innerHTML = calificacion[0];
                    document.getElementById("resultado-q3").style.color = "green";
                } else{
                    document.getElementById("resultado-q3").innerHTML = calificacion[1];
                    document.getElementById("resultado-q3").style.color = "red";
                }

                if (q4.value == correctas[3]) {
                    puntajeQuimica += 1;
                    document.getElementById("resultado-q4").innerHTML = calificacion[0];
                    document.getElementById("resultado-q4").style.color = "green";
                } else{
                    document.getElementById("resultado-q4").innerHTML = calificacion[1];
                    document.getElementById("resultado-q4").style.color = "red";
                }

                if (q5.checked == true) {
                    puntajeQuimica += 1;
                    document.getElementById("resultado-q5").innerHTML = calificacion[0];
                    document.getElementById("resultado-q5").style.color = "green";
                } else{
                    document.getElementById("resultado-q5").innerHTML = calificacion[1];
                    document.getElementById("resultado-q5").style.color = "red";
                }


                var correctasQuimica = document.getElementById("correctas-4");
                var calificacionQuimica = document.getElementById("calificacion-4");

                correctasQuimica.innerHTML = correctasQuimica.innerHTML + puntajeQuimica + "/" + preguntasSeccion;

                if (puntajeQuimica >= 3) 
                    calificacionQuimica.innerHTML = calificacionQuimica.innerHTML + calificacionFinal[0];
                else 
                    calificacionQuimica.innerHTML = calificacionQuimica.innerHTML + calificacionFinal[1];

                campoQuimica.style.display = "none";
                campoFisica.style.display = "block";
                window.scroll(0, yCoord);

            } else return false;
        }


        /** Física y Resultados **/


        document.getElementById("btnFisica").onclick = function () {

            // Elementos

            const f1 = document.getElementById("f1d");
            const f2 = document.getElementById("f2");
            const f31 = document.getElementById("f3");
            const f32 = document.getElementById("f3d");
            const f4 = document.getElementById("f4");
            const resultadoFisica = document.getElementById("resultado-fisica");

            var puntajeFisica = 0;
            var correctas = ["right", "normal", 49, "EINSTEIN", "right"];
            var opcion = confirm("¿Seguro/a que desea continuar? No podrá regresar a esta sección");

            if (opcion == true) {
                if (f1.checked == true) {
                    puntajeFisica += 1;
                    document.getElementById("resultado-f1").innerHTML = calificacion[0];
                    document.getElementById("resultado-f1").style.color = "green";
                } else{
                    document.getElementById("resultado-f1").innerHTML = calificacion[1];
                    document.getElementById("resultado-f1").style.color = "red";
                }
                

                if (f2.value == correctas[1]) {
                    puntajeFisica += 1;
                    document.getElementById("resultado-f2").innerHTML = calificacion[0];
                    document.getElementById("resultado-f2").style.color = "green";
                } else{
                    document.getElementById("resultado-f2").innerHTML = calificacion[1];
                    document.getElementById("resultado-f2").style.color = "red";
                }

                

                if (f31.value == correctas[2] && f32.checked == true) {
                    puntajeFisica += 1;
                    document.getElementById("resultado-f3").innerHTML = calificacion[0];
                    document.getElementById("resultado-f3").style.color = "green";
                } else{
                    document.getElementById("resultado-f3").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[2] + " Newton";
                    document.getElementById("resultado-f3").style.color = "red";
                }


                if ((f4.value).toUpperCase() == correctas[3]) {
                    puntajeFisica += 1;
                    document.getElementById("resultado-f4").innerHTML = calificacion[0];
                    document.getElementById("resultado-f4").style.color = "green";
                } else{
                    document.getElementById("resultado-f4").innerHTML = calificacion[1] + ". Respuesta correcta: " + correctas[3];
                    document.getElementById("resultado-f4").style.color = "red";
                }


                if(puntuarCheckboxes("f5", correctas[4]) == 1){
                    puntajeFisica += 1;
                    document.getElementById("resultado-f5").innerHTML = calificacion[0];
                    document.getElementById("resultado-f5").style.color = "green";
                } else{
                    document.getElementById("resultado-f5").innerHTML = calificacion[1];
                    document.getElementById("resultado-f5").style.color = "red";
                }

                campoResultados.style.display = "block";

                document.getElementById("btnHistoria").style.display = "none";
                document.getElementById("btnLengua").style.display = "none";
                document.getElementById("btnMatematica").style.display = "none";
                document.getElementById("btnQuimica").style.display = "none";
                document.getElementById("btnFisica").style.display = "none";

                campoHistoria.style.display = "block";
                campoLengua.style.display = "block";
                campoMatematica.style.display = "block";
                campoQuimica.style.display = "block";

                window.scroll(0, yCoord);

                var ok = document.getElementsByClassName("ok");

                for(var i = 0; i < ok.length; i++)
                {
                    ok[i].style.color = "green";
                    ok[i].style.fontWeight = "bold";
                }

                var imgOK = document.getElementsByClassName("img-ok");

                for(i = 0; i < imgOK.length; i++)
                    imgOK[i].style.border = "5px solid green";
                
                
                    
                var correctasFisica = document.getElementById("correctas-5");
                var calificacionFisica = document.getElementById("calificacion-5");

                correctasFisica.innerHTML = correctasFisica.innerHTML + puntajeFisica + "/" + preguntasSeccion;

                if(puntajeFisica >= 3) 
                    calificacionFisica.innerHTML = calificacionFisica.innerHTML + calificacionFinal[0];
                else 
                    calificacionFisica.innerHTML = calificacionFisica.innerHTML + calificacionFinal[1];

                var resultados = document.getElementsByClassName("div-resultado");

                for(var i = 0; i < resultados.length; i++)
                    resultados[i].style.display = "block";
                

            } else return false;
        }


        // Verifica que la dirección de correo electrónico ingresada contenga el caracter "@".

        function verificarCorreo(correo)
        {
            for(var i = 0; i<correo.value.length; i++)
            {
                if(correo.value.substr(i, 1) === "@")
                    return true;
            }

            return false;
        }


        // Recibe el valor del atributo name de un conjunto checkboxes (también sirve para radio), y el valor de la respuesta correcta.
        // Verifica que se hayan marcado todos los checkboxes correctos, y que no se haya marcado ninguno incorrecto. En ese caso devuelve 1, y de lo contrario 0.

        function puntuarCheckboxes(Name, valorCorrecto) {
            var inputs = document.getElementsByName(Name);
            var correctos = 0;
            var totalCorrectos = 0;
            var i;

            for (i = 0; i < inputs.length; i++) {
                if (inputs[i].checked == true && inputs[i].value != valorCorrecto)
                    return 0;
                if (inputs[i].value == valorCorrecto)
                    totalCorrectos++;
                if (inputs[i].checked == true && inputs[i].value == valorCorrecto)
                    correctos++;
            }

            if (correctos == totalCorrectos) return 1;

            return 0;
        }







    }); // DOM Content Loaded




})();