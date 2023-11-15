// instancia jquery e evita conflitos com outras bibliotecas
// jQuery( function($){
$(document).ready(function(){

    $('.owl-carousel').owlCarousel();

    let titulos = $('h4') // seletor de tag

    let items = $('.featured-item') // seletor de class

    let destaques = $('#featured') // seletor de id

    console.log(titulos.first());

    // Configuração de produtos

    $('.featured-item a').addClass('btn btn-dark stretch-link');

    $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')





})