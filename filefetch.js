
function readFile(input) {
    let file = input.files[0];
    alert(file.name)
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = function() {
      console.log(reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  
  }
  
