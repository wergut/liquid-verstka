$(function () {

    // Аккордион меню
    $('.accordion_item').on('click', function () {
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
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });
    var swiper3 = new Swiper(".swiper-industries", {
        slidesPerView: 4,
        grid: {
            rows: 2,
        },
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });


});


    let mobileBtn = document.getElementsByClassName('mobile-btn');
    let mobileMenu = document.getElementsByClassName('header-inner');
    mobileBtn[0].onclick = function() {
        mobileMenu[0].classList.toggle("show");
    }

    let filterBtn = document.getElementsByClassName('mobile-filter-btn');
    let filterCatalog = document.getElementsByClassName('filter-catalog');
    if (filterBtn.length > 0) {
        filterBtn[0].onclick = function () {
            filterCatalog[0].classList.toggle("show");
        }
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

    if (x) {
        x.onmouseover = function () {
            y.style.display = 'block';
        };
        x.onmouseout = function () {
            y.style.display = 'none';
        };
    }
    
    let mobileFilterBtn = document.getElementsByClassName('mobile-filter-btn');
    let mobileFilter = document.getElementsByClassName('filter-catalog');
    if (mobileFilterBtn[0]) {
        mobileFilterBtn[0].onclick = function () {
            mobileFilter[0].classList.toggle("show");
        }
    }



    function handleFileSelect(evt) {
        var file = evt.target.files; // FileList object
        // Loop through the FileList and render image files as thumbnails.
        for (var i = 0, f; f = files[i]; i++) {
            // Only process image files.
            if (!f.type.match('image.*')) {
                alert("Image only please....");
            }
            var reader = new FileReader();
            // Closure to capture the file information.
            reader.onload = (function (theFile) {
                return function (e) {
                    // Render thumbnail.
                    var span = document.createElement('span');
                    span.innerHTML = ['<img class="thumb" title="', escape(theFile.name), '" src="', e.target.result, '" />'].join('');
                    document.getElementById('output').insertBefore(span, null);
                };
            })(f);
            // Read in the image file as a data URL.
            reader.readAsDataURL(f);
        }
    }

    let file = document.getElementById('file');
    if (file) {
        file.addEventListener('change', handleFileSelect, false);
    }




 function e(str){
     console.log(str);
 }



var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("mob-step");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").innerHTML = "Отправить";
    } else {
        document.getElementById("nextBtn").innerHTML = "Далее";
    }
    // ... and run a function that displays the correct step indicator:
    //fixStepIndicator(n)
}

function nextPrev(n) {

    // This function will figure out which tab to display
    var x = document.getElementsByClassName("mob-step");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        // document.getElementById("formSteps").submit();
        openPopup();
        return false;
    }
    // Otherwise, display the correct tab:
    showTab(currentTab);

    if (document.getElementsByClassName("msg-error")[0]) {
        document.getElementsByClassName("msg-error")[0].remove();
    }

    for (i = 0; i < document.getElementsByClassName("invalid").length; i++) {
        document.getElementsByClassName("invalid")[i].classList.remove("invalid");
    }

}

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("mob-step");

    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:

    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].hasAttribute('required')) {
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                if (!y[i].classList.contains('invalid')) {
                    y[i].className += " invalid";
                }
                // and set the current valid status to false:
                valid = false;
            }
        }
    }

    y = x[currentTab].getElementsByTagName("textarea");
    // A loop that checks every textarea field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].hasAttribute('required')) {
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                if (!y[i].classList.contains('invalid')) {
                    y[i].className += " invalid";
                }
                // and set the current valid status to false:
                valid = false;
            }
        }
    }

    y = x[currentTab].getElementsByTagName("select");
    // A loop that checks every textarea field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].hasAttribute('required')) {
            if (y[i].value == "") {
                // add an "invalid" class to the field:
                if (!y[i].classList.contains('invalid')) {
                    y[i].className += " invalid";
                }
                // and set the current valid status to false:
                valid = false;
            }
        }
    }


    if (!valid) {
        if (document.getElementsByClassName("msg-error").length < 1) {
            let p = document.createElement('p');
            p.className += " msg msg-error";
            p.innerHTML = 'Поля заполнены некорректно';
            document.getElementById("formSteps").appendChild(p);
        }


    }

    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        if (document.getElementsByClassName("msg-error")[0]) {
            document.getElementsByClassName("msg-error")[0].remove();
        }
        //document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

function openPopup() {

    $('#btn').click(function(){
        $.fancybox.open({
            src: '#popup',
            type: 'inline'
        });
    });

}



