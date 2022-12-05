function readFile(input) {
  if (/\.(pdf)$/i.test(file.name)){
    let file = input.files[0];
    
    let reader = new FileReader();
  
    reader.readAsDataURL(file);
  
    reader.onload = function() {
      console.log(reader.result);
    };
  
    reader.onerror = function() {
      console.log(reader.error);
    };
  }   
}