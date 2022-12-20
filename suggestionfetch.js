const suggestfetch = (id) => {
    fetch(`https://pythonbk.azurewebsites.net/api/suggest/${id}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        showSug(data.results);
    });
};

function showSug(data) {
    let sug = "";

    data.map((data) => {
		sug += `
    <tr>
    <td>
        ${data.additional_insurance}
    </td>
    <td>
       € ${data.coverage} ,-
    </td>
    <td>
        € ${data.price} ,- per maand
    </td>
    </div>
    </tr>
        `;
	});
    document.getElementById("suggestion").innerHTML = sug;
}

// Calling that async function
suggestfetch(localStorage.getItem("uid"));
    