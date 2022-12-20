const form = document.getElementById("form");
const inputFile = document.getElementById("file");
const formData = new FormData();

const handleSubmit = (event) => {
  event.preventDefault();
    for (const file of inputFile.files) {
        formData.append("files", file);
    }
    
    console.log(formData);

    fetch(`http://localhost:8080/files`, {
        method: "post",
        body: formData,
    }).catch((error) => ("Something went wrong!", error)).finally(() => {
      formData.delete("files");});
};

form.addEventListener("submit", handleSubmit);