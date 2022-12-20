const form = document.getElementById("form");
const inputFile = document.getElementById("file");
const formData = new FormData();

const handleSubmit = (event) => {
  event.preventDefault();
    for (const file of inputFile.files) {
        formData.append("files", file);
    }
    
    console.log(formData);

    const uid =  localStorage.getItem("uid");
    fetch(`https://pythonbk.azurewebsites.net/upload_file/${uid}`, {
        method: "post",
        body: formData,
    }).catch((error) => ("Something went wrong!", error)).finally(() => {
      formData.delete("files");});
};

form.addEventListener("submit", handleSubmit);