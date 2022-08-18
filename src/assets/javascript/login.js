// Carrega o jquery quando a página estiver disponível

$(document).ready(function () {
    // alert('Hello World');

    $(".button-entrar").click(function () {
        validarFormJQuery();
    })
})

function validarFormJQuery() {
    let usuario = $("#usuario").val();
    let senha = $("#senha").val();
    if (usuario.trim() == '' || senha.trim() == '') {
        $("#msgValidacao").text("Preencher todos os campos!")
    } else {
        $("#msgValidacao").html('Dados Validados!!');
    }
}


// Função com Java Script
// function validarLogin() {
//     event.preventDefault(); // para o submit do funcionário
//     let usuario = document.getElementById('usuario').value;
//     let senha = document.getElementById('senha').value;

//     if (usuario.trim() == '' || senha.trim() == '') {
//         document.getElementById('msgValidacao').innerText = 'Preencher todos os campos';
//     } else {
//         document.getElementById('msgValidacao').innerHTML =
//             console.log("Efetuar o Login: ");
//         console.log(usuario);
//         console.log(senha);
//     }
// }


