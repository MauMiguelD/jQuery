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
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active')
    // $('.featured-item:first h4').removeClass('active')
    // $('.featured-item:first h4').toggleClass('active')
    // $('.featured-item:first h4').hide()
    // $('.featured-item:first h4').show()
    // $('.featured-item:first h4').fadeIn(2000)
    // $('.featured-item:first h4').fadeOut()
    // $('.featured-item:first h4').css('color', '#f00')
    // Tudo é baseado na seleção do elemento. 
   
   
    $('.featured-item h4').dblclick( function(){
        
        $(this).css({
            'color': '#f00',
            'background': '#ff0',
            'font-weight': '100',
         });
    });
     /*
        Manipulação de eventos
     */

     $('.featured-item a').on('blur', function(event){
         
        event.preventDefault();

        alert('Produto esgotado');

     })

   /* 
   *  Callback
   *  Entendendo ações que começam ao termino de outra
   */
   $('.featured-item:nth(1)')
      .hide(500, function(){
       // este é o callback
       console.log( $(this).find('h4').text() + ' esgotado')
      })
      .show(500, function(){
       console.log( $(this).find('h4').text() + ' em estoque')
      })
   








})