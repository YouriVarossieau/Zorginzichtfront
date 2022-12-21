const suggestfetch = (id) => {
  fetch(`https://pythonbk.azurewebsites.net/api/suggest/${id}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      showSug(data.results);
      showSugText(data.results);
    });
};

// function checkIfText(p) {
// 	if (!p.additional_insurance && p !== "Please contact us for advice.") {
// 		return "U kunt uw overige aanvullende verzekeringen behouden";
// 	} else {
// 		return "Geen suggestie beschikbaar o.b.v deze gegevens. Neem contact met ons op voor een beter advies.";
// 	}
// }
function showSugText(data) {
  let sugText = "";

  // ${add.additional_insurance ? add.additional_insurance : add}
  data.map((add) => {
    sugText += `<p>${add}</p> </br>
        `;
  });
  document.getElementById("suggestionText").innerHTML = sugText;
}

function showSug(data) {
  let sug = "";

  // ${add.additional_insurance ? add.additional_insurance : add}
  // const result = words.filter((word) => word.length > 6);
  const suggestedIns = data.filter((add) => add.additional_insurance);
  console.log(suggestedIns);
  document.getElementById("suggestion").innerHTML = sug;

  suggestedIns.map((add) => {
    sug += `
    <tr>
    <td> 
        ${add.additional_insurance}
        
    </td>
    <td>
       ${add.coverage ? add.coverage : ""}
    </td>
    <td>
        ${add.price ? `€ ${add.price}` : ""}
    </td>
    </div>
    </tr>
        `;
  });
  document.getElementById("suggestion").innerHTML = sug;
}

// Calling that async function
suggestfetch(localStorage.getItem("uid"));
