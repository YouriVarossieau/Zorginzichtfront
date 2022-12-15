const customerfetch = () => {
    
    fetch('https://localhost:7104/api/customers')
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
    
};  


// Calling that async function
customerfetch();

// Function to define innerHTML for HTML table
function show(data) {
let code = "";

data.map (customer => {
    console.log(customer)
    code += (`
    <div class="container mt-5 border bg-light rounded">
        <div class="d-flex ">
            <div class="col-sm-4 mt-3 mb-3 pl-">
            
                <div class="card" style="width:250px; height:300px">
                    <img class="card-img-top" src="#" alt="Card image">
                    <div class="card-body">
                    <h4 class="card-title"></h4>
                    <p class="card-text"></p>
                
                </div>
            </div>
        </div>
            <div class="container mt-3 mb-3 bg-light">
            <div class="col-sm-11">
            
                <div class="container mt-3">

                    <table class="table table-borderless text-middle">
                        <thead>
                            <th>Persoonlijke Gegevens</th> </br>
                        </br>
                        </thead>                        
                        <tbody>
                            <tr>
                                <td>Naam: </td> </br>             
                                <td>${customer.name}</td> </br>
                            </tr>
                            <tr>
                                <td>Email: </td> </br>
                                <td>${customer.email}</td> </br>
                            </tr>
                            <tr>
                                <td>Password:</td> </br>
                                <td>${customer.password}</td> </br>
                            </tr>
                            <tr>
                                <td>Customer number:</td> </br>
                                <td>${customer.customer_number}</td> </br>
                            </tr>
                            <tr>
                                <td>Customer id:</td> </br>
                                <td>${customer.id}</td> </br>
                            </tr>
                            <tr>
                                <td>Invoice costs:</td> </br>
                                <td>${customer.invoices.map(invoice => {return (invoice.costs)})}</td> </br>
                            </tr>
                        </tbody>
                    </table>
            
            </div>
        </div>
    </div>
    `)
})

    // Setting innerHTML as tab variable
    document.getElementById("customers").innerHTML = code;
}