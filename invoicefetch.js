const invoicesSum = (customerId) => {
  fetch(`https://pythonbk.azurewebsites.net/api/sum_per_caretype/${customerId}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showSum(data.results);
    });
};

function showSum(data) {
  let sum = "";

  data.map((data) => {
    data.total = new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(data.total);

    sum += `
    <tr>
    <td>
        ${data.caretype}
    </td>
    <td>
        ${data.total}
    </td>
    </div>
    </tr>
        `;
  });
  // Setting innerHTML as tab variable
  document.getElementById("sumCare").innerHTML = sum;
}

invoicesSum(localStorage.getItem("uid"));

const invoicesfetch = (id) => {
  fetch(`https://pythonbk.azurewebsites.net/api/invoices/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      show(data.results);
    });
};

// Calling that async function
invoicesfetch(localStorage.getItem("uid"));

// Function to define innerHTML for HTML table
function show(data) {
  let code = "";

  data.map((invoice) => {
    // Format data in invoice

    // Format date
    // invoice.date = new Date(invoice.date).toLocaleDateString("nl-NL");

    // Format amount to an EUR value
    invoice.amount = new Intl.NumberFormat("nl-NL", {
      style: "currency",
      currency: "EUR",
    }).format(invoice.amount);

    code += `
        <tr>
            <td>
                ${invoice.invoice_nr}
            </td>
            <td>
                ${invoice.caretype}
            </td>
            <td>
                ${new Date(invoice.invoice_date).toLocaleDateString()}
            </td>
            <td>
                ${invoice.amount}
            </td>
        </tr>
   `;
  });

  // Setting innerHTML as tab variable
  document.getElementById("invoices").innerHTML = code;
}
