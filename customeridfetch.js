// Initialize customer fetch function
const customerfetch = (id) => {
	fetch(`https://zi-webapp.azurewebsites.net/api/customers/${id}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			show(data);
		});
};

// Initialize customer fetch function
const policyFetch = (id) => {
	fetch(`https://zi-webapp.azurewebsites.net/api/policybycustomerid/${id}`)
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			showPolicy(data);
		});
};

// Initialize customer show function
function show(customer) {
	const code = ``;

	// Set inner HTML
	document.getElementById("customername").innerHTML = customer.name;
	document.getElementById("email").innerHTML = customer.email;
	document.getElementById("customernum").innerHTML = customer.customer_number;
	document.getElementById("address").innerHTML =
		customer.address + ` ` + customer.postal_code + ` ` + customer.city;
}

// Initialize policy show function
function showPolicy(policy) {
	let test = "";
	document.getElementById("policyName").innerHTML = `${policy.policyname}`;
	document.getElementById("policyKind").innerHTML = `${policy.insurance}`;
	if (policy.active) {
		document.getElementById("active").innerHTML = `Ja`;
	} else {
		document.getElementById("active").innerHTML = `Nee`;
	}
	document.getElementById("kosten").innerHTML = `€${policy.costs} per maand`;

	let totalCostsAdd = 0;

	policy.additional_insurances.map((add) => {
		test += `
    <p> Aanvullende verzekering: ${add.name}</p>
    <p> Kosten: €${add.costs},- per maand</p>`;
		totalCostsAdd += add.costs;
		console.log(totalCostsAdd);
		document.getElementById("additional").innerHTML = test;
	});

	let sumTable = "";
	policy.additional_insurances.map((add) => {
		sumTable += `
    <tr>
    <td>
        ${add.name}
    </td>
    <td>
        €${add.costs}
    <tr>
        `;
		document.getElementById("sumTable").innerHTML = sumTable;
	});

	let baseIns = `	<tr>
		<td>Basis</td>
		<td>€${policy.costs}</td>
	</tr>`;
	let totalCosts = `Totale premie: € ${totalCostsAdd + policy.costs}`;
	// document.getElementById("totalCostsAdd").innerHTML = totalCostsAdd;
	document.getElementById("baseIns").innerHTML = baseIns;
	document.getElementById("totalCosts").innerHTML = totalCosts;
}

// Fetch and show customer with the ID of 1
customerfetch(localStorage.getItem("uid"));
policyFetch(localStorage.getItem("uid"));

// policy.map((data) => {
// 	sum += `
//   <tr>
//   <td>
//       ${data.caretype}
//   </td>
//   <td>
//       ${data.total}
//   </td>
//   </div>
//   </tr>
//       `;
// });
