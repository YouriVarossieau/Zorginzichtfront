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
    const code = ``;
  
    // Set inner HTML
    document.getElementById("customername").innerHTML = customer.name;
    document.getElementById("email").innerHTML = customer.email;
    document.getElementById("customernum").innerHTML = customer.customer_number;
    document.getElementById("adrress").innerHTML = customer.address +` `+ customer.postal_code +` `+ customer.city;
    document.getElementById("city").innerHTML = customer.customer_address;
  }
  
  // Fetch and show customer with the ID of 1
  customerfetch(1);