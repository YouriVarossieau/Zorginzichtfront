const registerForm = document.getElementById("register");

const handleRegisterSubmit = (event) => {
  event.preventDefault();

  const name = registerForm.elements["inputNaam"].value;
  const email = registerForm.elements["inputAddress"].value;
  const address = registerForm.elements["inputAddress2"].value;
  const postal_code = registerForm.elements["inputpostcode"].value;
  const city = registerForm.elements["inputCity"].value;
  const password = registerForm.elements["password"].value;

  const customer = {
    name,
    address,
    postal_code,
    city,
    email,
    password,
  };

  const link = "https://zi-webapp.azurewebsites.net/api/Customers?";

  fetch(link, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data || !data.id || data.id == -1) return;
      localStorage.setItem("uid", data.id);
      window.location.href = "myaccount.html";
    })
    .catch((error) => {
      console.error(error);
    });
};

registerForm.addEventListener("submit", handleRegisterSubmit);