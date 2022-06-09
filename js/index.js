
//FASE 1
const moduloProductos = () => {

    const a = document.querySelectorAll('#productos a.producto');
    const ampliarProductos = document.querySelector('#ampliarProductos');

    a.forEach( (producto, i, productos) => {
        
        producto.addEventListener('click', ev =>{
            productos.forEach( producto => {
                producto.classList.remove('active');
            });

            /*
            if(ev.target.tagName !=='A'){
                ev.target.parentNode.classList.add('active');
            }
            else{
                ev.target.classList.add('active');
            }
            */
            producto.classList.add('active');

            ampliarProductos.classList.add('active');
            ampliarProductos.innerHTML = '<a class="close" title="Cerrar">X</a>';
            ampliarProductos.innerHTML += producto.innerHTML;

            const aClose = ampliarProductos.querySelector('a.close');
            aClose.addEventListener('click', ev => {
                ampliarProductos.classList.remove('active');
                producto.classList.remove('active');

            });
        });
    });
}
// --------------------------------------------------------------------------

//FASE 2
const moduloCrearCuenta = () =>{
    // agrego los SPAN
    document.querySelectorAll('div.campo').forEach(div => {
        div.innerHTML += '<span class="err"></span>'
    });

    const form = document.querySelector('form');
    console.dir(form);

    //FUNCIONES DE VALIDACION DEL FORMULARIO
    //Validar el largo del texto ingresado. Debe estar entre 3 y 25 caracteres
    const validTextLength = (texto) => {
        //console.log(texto);
        let mensaje;
        if(texto < 3 || texto > 25){
            mensaje = 'El texto debe tener entre 3 y 25 caracteres';
        }
        else{
            mensaje = '';
        }
        return mensaje;

    };

    //Validar la cantidad de palabras del texto ingresado. Debe tener de 1 a 3 palabras
    const validTextWord = (texto) => {
        let mensaje;
        
        texto = texto.trim();//quito espacios al inicio y al fin
        let arrTexto = texto.split(" ");//armo un array separando por espacios
        
        //cada palabra sera un elemento del array -> array.lenght = 3 --> 3 palabras.
        if(arrTexto.length > 3){
            mensaje = 'El texto debe tener entre 1 y 3 palabras';
        }
        else{
            mensaje = '';
        }
        return mensaje;
    };

    //Solo dejo ingresar numeros, borrar o tab
    const validKey = (tecla) => {
        let accion ;
        if(tecla !== 'Backspace' && tecla !== 'Tab' && isNaN(tecla)){
            return accion = true;
        };
    };

    //Maxima cantidad de digitos (inputLength y cantidad maxima de digitos)
    const maxDigit = (valor, max) => {
        let mensaje;

        if(valor > max){
            mensaje = `El valor ingresado no puede superar los ${max} dígitos`;
        }
        else{
            mensaje = '';
        }
        return mensaje;
    };

    //Validacion NOMBRE

    form.nombre.addEventListener('input', ev =>{
        let msj = validTextLength(ev.target.value.length)
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    form.nombre.addEventListener('blur', ev => {
        let msj = validTextWord(ev.target.value);
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    /*VALIDACION INICIAL DEL CAMPO NOMBRE
    form.nombre.addEventListener('input', ev => {
        let mensaje;

        if(ev.target.value.length < 3 || ev.target.value.length > 25){
            mensaje = 'El texto debe tener entre 3 y 25 caracteres';

        }else{
            mensaje = '';
        }

            ev.target.parentElement.querySelector('.err').innerText = mensaje;
            ev.target.setCustomValidity(mensaje);
    })

    form.nombre.addEventListener('blur', ev => {
        let mensaje;

        ev.target.value = ev.target.value.trim();//quito espacios al inicio y al fin

        let arrInput = ev.target.value.split(" ");//armo un array separando por espacios

        if(arrInput.length > 3){
            mensaje = 'El texto debe tener entre 1 y 3 palabras';
        
        }else{
            mensaje = '';
        }
            ev.target.parentElement.querySelector('.err').innerText = mensaje;
            ev.target.setCustomValidity(mensaje);
    });
    */

    //Validacion APELLIDO

    form.apellido.addEventListener('input', ev =>{
        let msj = validTextLength(ev.target.value.length)
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    form.apellido.addEventListener('blur', ev => {
        let msj = validTextWord(ev.target.value);
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    //Validacion CALLE
    form.calle.addEventListener('input', ev =>{
        let msj = validTextLength(ev.target.value.length)
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    form.calle.addEventListener('blur', ev => {
        let msj = validTextWord(ev.target.value);
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
    });

    //Validacion TELEFONO

    form.telefono.addEventListener('keydown', ev => {
        
        //console.log(ev);
        //solo dejo ingresar numeros, borrar, o tab
        let accion = validKey(ev.key);
        if(accion){ev.preventDefault()}
        /*if(ev.key !== 'Backspace' && ev.key !== 'Tab' && isNaN(ev.key)){
            ev.preventDefault();
        }*/
    });

    form.telefono.addEventListener('input', ev => {
        let mensaje;

        if(ev.target.value.length !== 10){
            mensaje = 'El telefono debe tener 10 dígitos';

        }else{
            mensaje = '';
        }

        ev.target.parentElement.querySelector('.err').innerText = mensaje;
        ev.target.setCustomValidity(mensaje);
        
    });

    //Validacion NUMERACION

    form.numeracion.addEventListener('keydown', ev => {
        let accion = validKey(ev.key);
        if(accion){ev.preventDefault()}
    });

    form.numeracion.addEventListener('input', ev => {
        let msj = maxDigit(ev.target.value.length, 5);
        
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
        
    });

    //Validacion CODIGO POSTAL

    form.CP.addEventListener('keydown', ev => {
        let accion = validKey(ev.key);
        if(accion){ev.preventDefault()}
    });

    form.CP.addEventListener('input', ev => {
        let msj = maxDigit(ev.target.value.length, 8);
        
        ev.target.parentElement.querySelector('.err').innerText = msj;
        ev.target.setCustomValidity(msj);
        
    });

    //VALIDACION EMAIL

    form.email.addEventListener('blur', ev => {
        let mensaje;

        let arrEmail = ev.target.value.split("@"); //armo un array dividiendo con el @
        let arrDominio;

        //debo tener 2 indices (0-> nombre @ 1-> domino)
        if (arrEmail.length !== 2){
            mensaje = 'El email debe tener un signo @';
        }else if(arrEmail[0].length === 0){
            mensaje = 'Debe escribir un texto antes del @'
        }else if ((arrDominio = arrEmail[1].split(".")).length < 2 || arrDominio.length > 3){
            mensaje = 'Ingrese un dominio válido';
        }else if(arrDominio[0].length === 0 || arrDominio[1] === 0){
            mensaje = 'Ingrese un dominio válido';
        }else{
            mensaje = '';
        }
        ev.target.parentElement.querySelector('.err').innerText = mensaje;
        ev.target.setCustomValidity(mensaje);
    });
}
// --------------------------------------------------------------------------

// FASE 3
const moduloUsuarios = () => {
    fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                // console.log(response)
                if(response.ok){
                    return response.json()
                }
            })
            .then(json => {
                console.log(json);
                const tbody = document.querySelector('#usuarios table tbody');
                const frag = document.createDocumentFragment();
                
                //MI CODIGO QUE FUNCIONA
                /*
                json.forEach (user =>{
                    let flag = false;
                    const tr = document.createElement('tr');
                    if (flag === false){
                        const nombre = user.name.split(" ");
                        if (nombre.length > 2){
                            if(nombre[0] == 'Mrs.' || nombre[0] == 'Mr.'){
                                nombre.shift();
                            }
                            else{
                                nombre[1]=nombre[1] +" "+nombre[2];
                                nombre.pop();
                            }   
                        }
                        //console.log(nombre);
                        let td1 = document.createElement('td')
                        td1.innerText = nombre[0];
                        tr.appendChild(td1);
                        let td2 = document.createElement('td')
                        td2.innerText = nombre[1];
                        tr.appendChild(td2);
                        flag = true;
                    }
                    let td3 = document.createElement('td');
                    td3.innerText = user.phone;
                    tr.appendChild(td3);
                    let td4 = document.createElement('td');
                    td4.innerText = user.email;
                    tr.appendChild(td4);
                    let td5 = document.createElement('td');
                    td5.innerText = user.address.street;
                    tr.appendChild(td5);
                    let td6 = document.createElement('td');
                    td6.innerText = user.address.suite;
                    tr.appendChild(td6);
                    let td7 = document.createElement('td');
                    td7.innerText = user.address.city;
                    tr.appendChild(td7);
                    let td8 = document.createElement('td');
                    td8.innerText = user.address.zipcode;
                    tr.appendChild(td8);
                    let td9 = document.createElement('td');
                    td9.innerText = user.company.name;
                    tr.appendChild(td9);
                    let td10 = document.createElement('td');
                    td10.innerText = user.company.catchPhrase;
                    tr.appendChild(td10);
                    
                    frag.appendChild(tr);
                    
                    
                })
                console.log(frag);
                tbody.appendChild(frag);
                */

                //EL CODIGO VISTO EN EL CURSO
                json.forEach(user => {
                    const tr = document.createElement('tr');

                    //Separar Nombre y Apellido
                    arrayName = user.name.split(' ');
                    let apellido, nombre;
                    if(arrayName.length === 2){
                        nombre = arrayName[0];
                        apellido = arrayName[1];
                    }
                    else if( arrayName[arrayName.length-1].length === 1){
                        nombre = arrayName[0];
                        apellido = `${arrayName[1]} ${arrayName[2]}`;
                    }
                    else{
                        nombre = `${arrayName[0]} ${arrayName[1]}`;
                        apellido = arrayName[2]
                    }
                    // --------

                    let contenidoTr =  `<td>${nombre}</td>`;
                    contenidoTr += `<td>${apellido}</td>`;
                    contenidoTr += `<td>${user.phone}</td>`;
                    contenidoTr += `<td>${user.email}</td>`;
                    contenidoTr += `<td>${user.address.street}</td>`;
                    contenidoTr += `<td>${user.address.suite}</td>`;
                    contenidoTr += `<td>${user.address.city}</td>`;
                    contenidoTr += `<td>${user.address.zipcode}</td>`;
                    contenidoTr += `<td>${user.company.name}</td>`;
                    contenidoTr += `<td>${user.company.catchPhrase}</td>`;
                    
                    tr.innerHTML = contenidoTr;
                    frag.appendChild(tr);
                });
                tbody.appendChild(frag);
            });
}
//------------------------------------

const cargarModulos = (nombreModulo) => {

    console.log ("carga:" + nombreModulo.toLowerCase());

    switch (nombreModulo.toLowerCase()) {
        case 'productos':
            moduloProductos();
            break;
        case 'usuarios':
            moduloUsuarios();
            break;
        case 'crear cuenta':
            moduloCrearCuenta();
            break;
        default:
            console.warn(`El modulo que desea cargar no existe: ${nombreModulo}`);
            break;
    }
}
//FASE 4 - SPA
const titleBase = 'Proyecto Integrador';
const main = document.querySelector("main.principal");

document.querySelectorAll('header.principal nav a').forEach(a =>{
    a.addEventListener('click', evClick =>{
        evClick.preventDefault();

        const xhr = new XMLHttpRequest();
        xhr.open('GET', evClick.target.href);
        xhr.send();

        xhr.addEventListener('load', evLoad =>{
            if(evLoad.target.status !== 200){
                alert('Error en la peticion');
                return;
            }
            // Carga del HTML
            main.innerHTML = evLoad.target.response;
            // Carga del JS asociado
            cargarModulos(evClick.target.innerText);
            // Carga del title
            document.title = `${titleBase} | ${evClick.target.innerText}`
            // History
            const objetoSate =  {
                url: evClick.target.href,
                html: evLoad.target.response,
                modulo: evClick.target.innerText
            }
            history.pushState(objetoSate, null, evClick.target.innerText);
        });
    });
});

// PopState
window.addEventListener('popstate', ev => {

/*    // RECARGA
    const xhr = new XMLHttpRequest();
    xhr.open('GET', history.state.url);
    xhr.send();

    xhr.addEventListener('load', evLoad =>{
        if(evLoad.target.status !== 200){
            alert('Error en la peticion');
            return;
        }
        // Carga del HTML
        main.innerHTML = evLoad.target.response;
        // Carga del JS asociado
        cargarModulos(history.state.modulo);
        // Carga del title
        document.title = `${titleBase} | ${history.state.modulo}` 
    });
*/

    // Desde Memoria
    // Carga del HTML
    main.innerHTML = history.state.html;
    // Carga del JS asociado
    cargarModulos(history.state.modulo);
    // Carga del title
    document.title = `${titleBase} | ${history.state.modulo}` 

});