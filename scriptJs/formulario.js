

//Validación del formulario

const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
let inputName = document.getElementById('name');
let inputEmail = document.getElementById('email');
let inputCheckbox = document.getElementById('check');

 //funcion validacion nombre

const validName = () => {
    if(inputName.value.length <= 2 || inputName.value.length > 100) {
        inputName.style.border = '0.2rem solid #FB3B64';
        return false;
    } else {

        inputName.style.border = '0.2rem solid #63eabf74';
        return true;
    }
}
inputName.onchange = () => validName(); //Asignamos el evento onchange a nuestro input y cada vez que cambie su estado llama a la funcion validName();

 //funcion validación email

const validEmail = () => {
    //Cuando el valor del inputEmail sea diferente a la variable con la expresion regular
    if(!regex.test(inputEmail.value)) {
    
        inputEmail.style.border = '0.2rem solid #FB3B64';
        return false
    } else {

        inputEmail.style.border = '0.2rem solid #63eabf74';
        return true
    }
}

inputEmail.onchange = () => validEmail(); //Asignamos el evento onchange a nuestro inputEmail y cada vez que cambie su estado llama a la funcion validEmail();

//funcion validacion checkbox

const validCheck = () => {
    //Si nuestro check es distinto de checked
    if(!inputCheckbox.checked) {
    
        inputCheckbox.style.border = '0.2rem solid #FB3B64';
        return false;
    } else {
        //Dejamos nuestro input por defecto
        inputCheckbox.style.border = '';
        return true;
    }
}

inputCheckbox.onchange = () => validCheck();//Asignamos el evento onchange a nuestro check y cada vez que cambie su estado llama a la funcion validCheck();
//Recoger los datos del formulario y mandarselos a una API de testing

if (validCheck()) {
    fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
        name: userName,
        email: userEmail,
        userId: 1,
    }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
    })
    .then((response) => response.json())
    .then((json) => { 
        console.log(json); 
        alert("Form submitted successfully")
    }) 
    .catch((error) => console.error('Error:', error));
}






