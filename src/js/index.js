$(function () {

    // Аккордион меню
    $('.accordion_header').on('click', function () {
        let orderContent = $(this).closest('.accordion_item').find('.accordion_content');
        orderContent.slideToggle();
        $(this).toggleClass('active');
    });

});

$( function() {
    var filterAmount = '#price-filter';

    $( filterAmount ).slider({
      range: true,
      min: 0,
      max: 140,
      values: [ 0, 140 ],
      // slide: function( event, ui ) {
      //   $(filterAmount).parents('.filter--box').find( ".amount" ).val( " " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      // }
      slide: function( event, ui ) {
        $('#lower').text(ui.values[ 0 ]);
        $('#upper').text(ui.values[ 1 ]);
      }
    });
    // $(filterAmount).parents('.filter--box').find( ".amount" ).val( " " + $( filterAmount ).slider( "values", 0 ) +
    //   " - " + $( filterAmount ).slider( "values", 1 ) );
    $('#lower').text($(filterAmount).slider("values", 0));
    $('#upper').text($(filterAmount).slider("values", 1));
});


$(document).ready(function() { 
    var swiper = new Swiper(".mySwiper", {
        loop: false,
        spaceBetween: 20,
        slidesPerView: 5,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: false,
        spaceBetween: 0,
        thumbs: {
          swiper: swiper,
        },
    });
});


    let mobileBtn = document.getElementsByClassName('mobile-btn');
    let mobileMenu = document.getElementsByClassName('header-inner');
    mobileBtn[0].onclick = function() {
        mobileMenu[0].classList.toggle("show");
    }


    let filterHide = document.getElementsByClassName('filter__drop-title');
    let filterShow = document.getElementsByClassName('filter--box');
    

    for (let i = 0;i<filterHide.length;i++) {
       filterHide[i].onclick = function() {
            filterShow[i].classList.toggle("show");
        } 
    }


    var x = document.querySelector('.help-quality');
    var y =  document.querySelector('.quality-info');
    x.onmouseover = function () {
        y.style.display = 'block';
    };
    x.onmouseout = function () {
        y.style.display = 'none';
    };
    
    let mobileFilterBtn = document.getElementsByClassName('mobile-filter-btn');
    let mobileFilter = document.getElementsByClassName('filter-catalog');
    mobileFilterBtn[0].onclick = function() {
        mobileFilter[0].classList.toggle("show");
    }
    