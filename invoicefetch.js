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

invoicesSum(1);

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
		code += `
        <tr>
            <td>
                ${invoice.invoice_nr}
            </td>
            <td>
                ${invoice.caretype}
            </td>
            <td>
                ${invoice.invoice_date}
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
