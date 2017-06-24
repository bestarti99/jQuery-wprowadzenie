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
        'background-color': 'blue',
        'color': '#fff',
        'font-size': '30px'

    })

    // dla wszystlich spanów
    /*$('#znajdz').find('span').css({
        'background-color':'blue',
        'color':'#fff',
        'font-size':'30px'
        
    })*/

    $('#kazdy ul li').each(function (index) {
        console.log($(this).text());
        // używamy this bo użycie $('#kazdy ul li') spowodowałoby dołożenie wszystkich klas do klientów
        $(this).addClass('list-item' + index);
    })


    // Eventy
    //Pierwsze rozwiązanie z .each
    /*$('#eventy button').each(function(){
        $(this).click(function(){
            console.log('Przycisk został wciśnięty');
        })
    })*/

    clickMouseOver();
    // showHide();
    // fades();
    // slides();
    // toggleDiv();
    animacja();

    // drugie rozwiązanie z .on, na .on można podpiąć kilka zdarzeń

    // zmiana koloru oi zmianie rozmiaru okna
    $(window).resize(function () {
        changeColor();
    });

    $(window).scroll(function () {
        changePosition();
    })

    function clickMouseOver() {
        $('#eventy button').on({
            'click': function () {
                console.log('Przycisk został wciśnięty');
            },

            'mouseover': function () {
                console.log('Jestem nad przyciskiem');
            }
        })
    }
})

function changeColor() {
    $('#first').css('background-color', 'blue')
}

function changePosition() {
    var parent = $('#main-nav');
    var wysokosc = $('#main-nav').height();
    // console.log(wysokosc);
    //    console.log($(window).scrollTop());

    var offset = $(window).scrollTop();

    if (offset >= wysokosc) {
        $(parent).css({
            'position': 'fixed',
            'width': '100%'
        })
    } else {
        $(parent).css('position', 'static');
    }
}

function showHide() {
    var parent = $('#showHide');
    // .show i .hide steruje wysokością, szerokości, opacity, marginesamji i paddingami -> w wyniku "display: none"
    $(parent).hide(5000).show(5000);
}

function fades() {
    var parent = $('#showHide');
    // steruje tylko opacity 
    $(parent).fadeOut(5000).fadeIn(5000);
}

function slides() {
    var parent = $('#showHide');
    // steruje właściwościami takimi jak hide i show
    $(parent).slideUp(5000).slideDown(5000);
}

// toggle
function toggleDiv() {
    var parent = $('#showHide');
    // .toggle steruje wysokością, szerokości, opacity, marginesamji i paddingami -> w wyniku "display: none"
    $(parent).click(function () {
        $(this).find('h1').toggle(4000);
    })
}

function animacja() {
    var parent = $('#animacja');
    $(parent).find('button').click(function () {
        $(parent).find('#animowany').animate({
            width: '100%'
        }, 'slow', function () {
            $(this).animate({
                width: '200px'
            }, 'slow')
        });
    })
}


