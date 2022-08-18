function exibeMenu() {
    //alterar o css da navbar
    let navbar = document.getElementById('men');
    navbar.classList.toggle("showNavbar");
}


// Card Text
$(document).ready(function () {
    $(".buy-button").click(function () {
        $(this).text("Indisponível");
    });
});