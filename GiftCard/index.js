// function validate() {
    

      
//     if( document.myForm.paisa.value == "" ) {
//        alert( "Please provide your name!" );
//        document.myForm.paisa.focus() ;
//        return false;
//     }

// }


(function() {
    'use strict';
    window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    

    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {

    form.addEventListener('submit', function(event) {
    if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
    }
    form.classList.add('was-validated');
    }, false);
    });
    }, false);
    })();


// responsive menu bootstrap
// onchange Event
// regular expression to accept only (first name)

// htm5 pattern attribute


