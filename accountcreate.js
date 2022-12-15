//Create the account object
let account = { 
    name: "string", 
    email: "string", 
    password: "string"
  };
  
  //Create the post request to the database
  let postRequest = new XMLHttpRequest();
  
  //Set the URL for the post request
  postRequest.open("POST", "https://localhost:7104/api/Customers", true);
  
  //Set the request header
  postRequest.setRequestHeader("Content-Type", "application/json");
  
  //Send the request with the account object
  postRequest.send(JSON.stringify(account));