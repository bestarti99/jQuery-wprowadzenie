'use strict'

/* zmiana koloru tła z zielonego na niebieski */
$(document).ready(function () {
    // $('#first').css('background-color', 'blue').hide('slow');

    // Manipulowanie obiektami
    /*
        $('#first p').css('font-size', '16px');
        console.log($('p').text());
        $('p').text('Hello world!')
    */
    // .html() łapie tylko pierwszy element
    console.log($('p').html());
    // .html(xyz) podmienia dla wszystkich
    $('p').html('Hello <b>World!</>');

    // Dodawanie treści
    $('.pierwszy').append(' 123');
    $('.pierwszy').prepend('456 ');
    $('.pierwszy').after('<h3>Zostalem dodany</h3>');
    $('.pierwszy').before('<h4 class="drugi">Jestem przed wszystkimi</h4>');

    // usuwanie treści
    // remove() usuwa cały element i elementy wewnątrz niego 
    //$('.drugi').remove();
    $('.drugi span').remove();

    // empty() usuwa treść, ale nie usuwa elementu
    // $('#first p').empty();

    // Metoda css()
    $('#first p').css({
        'font-size': '16px',
        'background-color': 'yellow',
        'color': 'red'
    })

    // Metoda val()
    var zmiennaVal = $('#formularz input').val();
    console.log(zmiennaVal);

    $('#formularz input').val('To jest test');

    // Metody dodające i usuwające klasy
    $('.trzeci').addClass('czwarty').removeClass('trzeci');
    
    // Metody find i each
    $('#znajdz').find('.find').css({
        'background-color':'blue',
        'color':'#fff',
        'font-size':'30px'
        
    })
    
    // dla wszystlich spanów
    /*$('#znajdz').find('span').css({
        'background-color':'blue',
        'color':'#fff',
        'font-size':'30px'
        
    })*/
    
    $('#kazdy ul li').each(function(index) {
        console.log($(this).text());
        // używamy this bo użycie $('#kazdy ul li') spowodowałoby dołożenie wszystkich klas do klientów
        $(this).addClass('list-item' + index);
    })

        
    // Eventy
    $('#eventy button').each(function(){
        $(this).click(function(){
            console.log('Przycisk został wciśnięty');
        })
    })
        
        
        
   


})