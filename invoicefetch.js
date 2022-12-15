const invoicesSum = (customerId) => {
    fetch(`http://localhost:5000/api/sum_per_caretype/${customerId}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            showSum(data.results);
        });
};

function showSum(data) {
    let sum = "";

    data.map((data) => {
        sum += `<div> <p> Totaal: ${data.total} </p> </div>`;
    });
    // Setting innerHTML as tab variable
    document.getElementById("sum").innerHTML = sum;
}

invoicesSum(1);






const invoicesfetch = (id) => {
    fetch(`http://127.0.0.1:5000/api/invoices/${id}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            show(data.results);
        });
};


// Calling that async function
invoicesfetch(1);

// Function to define innerHTML for HTML table
function show(data) {
    let code = "";

    data.map((invoice) => {
        code += `
   <div> <p> ${invoice.amount} </p> </div>
   `;
    });

    // Setting innerHTML as tab variable
    document.getElementById("invoices").innerHTML = code;
}
