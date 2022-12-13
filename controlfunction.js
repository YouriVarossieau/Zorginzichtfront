function checkPassword() {
    
    var password = document.getElementById("inputWachtwoord2").value;
    var password = document.getElementById("inputWachtwoord1").value;

    // Check if the password is valid
    if (inputWachtwoord2 == inputWachtwoord1) {
      // If the password is valid, do something (e.g. display a message or enable a button)
      document.getElementById("result").innerHTML = "";
    } else {
      // If the password is not valid, do something (e.g. display a message or disable a button)
      document.getElementById("result").innerHTML = "The password is not valid";
    }
  }