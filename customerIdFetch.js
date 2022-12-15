const customerIdFetch = () => {
    fetch('https://localhost:7104/api/Customers?[{id}]')
  .then((response) => response.json())
  .then((data) => {
    console.log(data)
    show(data)
    });
};


// Calling that async function
customerIdFetch(3);

localStorage.setItem("customerid", customerIdFetch(3));

console.log(localStorage.getItem("customerid"));

document.getElementById("customerId").innerHTML = localStorage;

//Function to define innerHTML for HTML table
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
            <td>Customer id:</td> </br>
            <td>${customer.id}</td> </br>
        </tr>
    </tbody>
    </p>`)
})

    // Setting innerHTML as tab variable
    document.getElementById("customerId").innerHTML = code;
}