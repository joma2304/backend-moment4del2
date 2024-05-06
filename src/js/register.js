//JS registrera användare

document.getElementById("registerForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validera användarnamn och lösenord
    if (!validateUsername(username)) {
        usernameError.textContent = "Ogiltigt användarnamn. Användarnamnet måste vara minst 5 tecken långt.";
        return;
    }

    if (!validatePassword(password)) {
        passwordError.textContent = "Ogiltigt lösenord. Lösenordet måste vara minst 6 tecken långt.";
        return;
    }
    //Skapa användare
    try {
        const response = await fetch("https://backend-moment4-del1.onrender.com/api/register", { 
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, password })
        });
        const data = await response.json();
        if (response.status === 201) {
            window.location.href = "login.html"; // Byt ut "login.html" mot den sida du vill att användaren ska omdirigeras till
        } else {
            // Visa felmeddelandet på sidan
            const errorMessage = document.getElementById("errorMessage");
            errorMessage.textContent = data.message;
            errorMessage.style.display = "block";
        }
    } catch (error) {
        console.error("Error:", error);
        alert("Ett fel inträffade. Försök igen senare.");
    }
});

// Funktion för att validera användarnamn
function validateUsername(username) {
    return username.length >= 5; // Minst 5 tecken långt
}

// Funktion för att validera lösenord
function validatePassword(password) {
    return password.length >= 6; // Minst 6 tecken långt
}

