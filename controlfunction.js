function checkPassword() {
    
    var password = document.getElementById("inputWachtwoord2").value;
    var password = document.getElementById("inputWachtwoord1").value;

    // Check if the password is valid
    if (inputWachtwoord2 === inputWachtwoord1) {
      // If the password is valid, do something (e.g. display a message or enable a button)
      document.getElementById("result").innerHTML = "";
    } else {
      // If the password is not valid, do something (e.g. display a message or disable a button)
      document.getElementById("result").innerHTML = "The password is not valid";
    }
  }

  (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()