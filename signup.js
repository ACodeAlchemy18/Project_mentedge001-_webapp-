function validateAndSignup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    let confirm = document.getElementById("confirm").value;

    if (!name || !email || !pass || !confirm) {
        alert("Please fill all required fields");
        return;
    }

    if (pass !== confirm) {
        alert("Passwords do not match");
        return;
    }

    
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
 function handleCredentialResponse(response) {
            console.log("JWT Token: " + response.credential);

            const data = JSON.parse(atob(response.credential.split('.')[1]));
            console.log("Name:", data.name);
            console.log("Email:", data.email);
        }
