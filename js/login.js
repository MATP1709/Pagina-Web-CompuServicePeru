const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const validarFormulario = (e) =>{ //e = evento
    switch (e.target.name){
        case "usuario":
            validarCampo(expresiones.usuario, e.target, 'usuario');  //OK
        break;

        case "password":
            validarCampo(expresiones.password, e.target, 'password'); //OK
        break;
    }
}

const validarCampo = (expresion, input, campo) =>{
    if(expresion.test(input.value)){
        // usamos el metodo backtick `, template string se usa con el simbolo `${nombre}`
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
    }else{
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
    }
}


inputs.forEach((input) => { // la funcion se ejecutara por cada imput
    // para el keyup, es cada vez que se preciona la tecla
    input.addEventListener('keyup',validarFormulario); 
    input.addEventListener('blur',validarFormulario);
})


// para evitar que se envie el formulario 
formulario.addEventListener('submit', (e) =>{
    e.preventDefault();
})

/*
if(expresiones.nombre.test(e.target.value)){
    document.getElementById('#grupo__nombre').classList.remove('formulario__grupo-incorrecto');
    document.getElementById('#grupo__nombre').classList.add('formulario__grupo-correcto');
    document.querySelector('#grupo__nombre i').classList.add('fa-check-circle');
    document.querySelector('#grupo__nombre i').classList.remove('fa-times-circle');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.remove('formulario__input-error-activo');

}else{
    document.getElementById('grupo__nombre').classList.add('formulario__grupo-incorrecto');
    document.getElementById('grupo__nombre').classList.remove('formulario__grupo-correcto');
    document.querySelector('#grupo__nombre i').classList.add('fa-times-circle');
    document.querySelector('#grupo__nombre i').classList.remove('fa-check-circle');
    document.querySelector('#grupo__nombre .formulario__input-error').classList.add('formulario__input-error-activo');
}*/