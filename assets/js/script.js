// Temos que puxar o DOM para editarmos a estrutura do HTML 

// var Inicia variavel global
// let Inicia uma variavel local
// const Inicia uma variavel constante

// Temos algumas maneiras de acessar os elementos
//  Por tag: getElementByTagName()
//  Por Id: getElementById()
//  Por Nome: getElementsByName() - Plural pois podemos buscar todos os elementos por aquele nome
//  Por Nome: getElementsByClassName() - Plural pois podemos buscar todos os elementos por aquele nome
//  Por Seletor: querySelector() - Mais utilizado | Boas práticas

var nome = window.document.getElementById('nome')
var nomeOk = false;
var email = document.querySelector('#email')


//cria uma função
function validarNome() {
    let txtNome = document.querySelector('#txt-nome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
        nomeOk = false

        //O innerHTML transforma nossa variavel em texto/id (verificar)
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txt-email')
    if ((email.value.indexOf('@') > 0) && (email.value.indexOf('.') > 0)) {
        txtEmail.innerHTML = 'Email válido'
        txtEmail.style.color = 'green'
        emailOk = true

    } else {
        txtEmail.innerHTML = 'Email Inválido'
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true) {
        alert('Preenchido corretamente')
    } else {
        alert('Não foi preenchido corretamente!')
    }
}
