// Initialize customer fetch function
const customerfetch = (id) => {
    fetch(`https://localhost:7104/api/customers/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        show(data);
      });
  };
  
  // Initialize customer show function
  function show(customer) {
    const code = `<div class="container mt-5 border bg-light rounded">
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

                <table class="table table-borderless">
                    <thead>
                        <th>Persoonlijke Gegevens</th> </br>
                    </br>
                    </thead>                        
                    <tbody>
                        <tr>
                            <td>Naam: </td> </br>             
                            <td id="customername">${customer.name}</td> </br>
                        </tr>
                        <tr>
                            <td>Email: </td> </br>
                            <td id="email">${customer.email}</td> </br>
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
</div>`;
  
    // Set inner HTML
    document.getElementById("customername").innerHTML = customer.name;
    document.getElementById("email").innerHTML = customer.email;
    document.getElementById("customernum").innerHTML = customer.customer_number;
    document.getElementById("adrress").innerHTML = (customer.address + customer.postal_code + customer.city) ;
    document.getElementById("city").innerHTML = customer.customer_address;
  }
  
  // Fetch and show customer with the ID of 1
  customerfetch(1);