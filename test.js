function readFile(input) {

    let file = input.files[0];
  
    return new Promise((resolve, reject) => {
      if (/\.(pdf)$/i.test(file.name)){
  
        let reader = new FileReader();
       
        reader.onload = () => {
          resolve(reader.result);
        };
        
        reader.onerror = reject;
        reader.readAsDataURL(file);
        
        console.log(reader.result);
       }   
    })
}