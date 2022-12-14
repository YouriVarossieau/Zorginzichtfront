const customerfetch = () => {
    fetch('https://localhost:7104/api/Customers')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    show(data)});
};


// Calling that async function
customerfetch();

// Function to define innerHTML for HTML table
function show(data) {
let code = "";

data.map (customer => {
    console.log(customer)
    code += (`<p>
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
    </p>`)
})

    // Setting innerHTML as tab variable
    document.getElementById("customers").innerHTML = code;
}