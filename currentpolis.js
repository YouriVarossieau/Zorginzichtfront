const policyFetchshort = (id) => {
  fetch(`https://zi-webapp.azurewebsites.net/api/policybycustomerid/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showPolicys(data);
    });
};

function showPolicys(data) {
  let aaa = "";

  data.additional_insurances.map((addp) => {
    aaa += `
        <tr>
        <td> 
             ${addp.name}* 
        </td>
        <td>  
            ${new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(addp.costs)} per maand 
        </td>
        </tr>
    
        `;

    document.getElementById("additionalAll").innerHTML = aaa;
  });
}
policyFetchshort(localStorage.getItem("uid"));
