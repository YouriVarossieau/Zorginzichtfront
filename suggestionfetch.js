const isStringArray = (object) => {
  const bool = object.length > 0 && typeof object[0] === "string";
  return bool;
};

const suggestfetch = (id) => {
  fetch(`https://pythonbk.azurewebsites.net/api/suggest/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const results = data.results;
      if (isStringArray(results)) return showSugText(data.results);

      showSug(data.results);
    });
};

function showSugText(data) {
  let sugText = "";
  let sugTable = "";

  data.map((add) => {
    if (typeof add === "string") {
      sugText += returnString(add);
    } else {
      sugTable += returnTable(add);
    }
  });

  document.getElementById("suggestionText").innerHTML = sugText;
  document.getElementById("suggestion").innerHTML = sugTable;
}

const returnTable = (data) => {
  return `
  <tr>
  <td> 
      ${data.additional_insurance}
  </td>
  <td>
     ${data.coverage ? data.coverage : ""}
  </td>
  <td>
      ${
        data.price
          ? `${new Intl.NumberFormat("nl-NL", {
              style: "currency",
              currency: "EUR",
            }).format(data.price)}`
          : ""
      }
  </td>
  </div>
  </tr>
      `;
};

const returnString = (data) => {
  return `<p>${data}</p> </br>
  `;
};

// Calling that async function
suggestfetch(localStorage.getItem("uid"));
