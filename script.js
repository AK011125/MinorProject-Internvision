const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let valid = true;

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    document.getElementById("nameError").textContent= "";
    document.getElementById("emailError").textContent= "";
    document.getElementById("messageError").textContent= "";

    if(name === ""){
        document.getElementById("nameError").textContent = "Name is required";
        valid = false;
    }
    const emailPattern = /.+@.+\..+/;

    if(message.length < 10){
        document.getElementById("messageError").textContent = "Message must be at least 10 characters ";
        valid = false;
    }
    if(valid){
        console.log("Form submitted successfully!");
        alert("Form submitted successfully!");
        form.requestFullscreen();
    }
});