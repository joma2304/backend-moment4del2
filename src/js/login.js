//JS login/out

// Funktion för att logga ut
document.getElementById("logout-link").addEventListener("click", function logout() {
    // Ta bort JWT-token från localStorage
    localStorage.removeItem("jwtToken");
    // Omdirigera användaren till startsidan 
    window.location.href = "index.html"; // Vid utlogg skickas till index
});

function showProtectedPage() {
    window.location.href = "protected.html";
}

document.addEventListener("DOMContentLoaded", function() {
    // Kontrollera om det finns en giltig JWT-token sparad i localStorage
    const jwtToken = localStorage.getItem("jwtToken");

    if (jwtToken) {
        // Användaren är inloggad, visa länken till den skyddade sidan och dölj andra
        document.getElementById("login-link").style.display = "none";
        document.getElementById("register-link").style.display = "none";
        document.getElementById("protected-link").style.display = "block"; // Visa skyddad sida-länken
        document.getElementById("logout-link").style.display = "block"; // Visa utloggningslänken
    } else {
        // Användaren är inte inloggad, göm länken till den skyddade sidan och utloggningslänken
        document.getElementById("protected-link").style.display = "none";
        document.getElementById("logout-link").style.display = "none";
    }

    document.getElementById("loginForm").addEventListener("submit", async function(event) {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        try {
            const response = await fetch("https://backend-moment4-del1.onrender.com/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ username, password })
            });
            const data = await response.json();
            // Sparar JWT i localStorage
            localStorage.setItem("jwtToken", data.token);
            showProtectedPage(); // Visa skyddad sida efter inloggning
        } catch (error) {
            console.error("Error:", error);
            alert("Fel användarnamn eller lösenord.");
        }
    });
});