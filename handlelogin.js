const form = document.getElementById("login");

const handleSubmit = (event) => {
  // Prevent page from refreshing
  event.preventDefault();

  // Extract e-mail and password from form
  const email = form.elements["email"].value;
  const password = form.elements["pwd"].value;
  console.log(email, password);

  // Create link to send post request to
  const link =
    "https://zi-webapp.azurewebsites.net/api/Login?" +
    new URLSearchParams({
      email: email,
      password: password,
    });

  // Create post request
  fetch(link, {
    method: "post",
  })
    .then((response) => response.json())
    .then((data) => {
      // If the user does not exist, stop the function
      if (data == -1) return;

      // Set the uid (user ID) value to the user ID returned by the back=end
      localStorage.setItem("uid", data);

      window.location.href = "myaccount.html";
    });
};

form.addEventListener("submit", handleSubmit);