//JS login/out

function showProtectedPage() {
    window.location.href = "protected.html"; //Omdirigeras till den skyddade sidan
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
    
    //För att logga in
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
            if (response.ok) {
                const data = await response.json();
                // Sparar JWT i localStorage
                localStorage.setItem("jwtToken", data.token);
                showProtectedPage(); // Visa skyddad sida efter inloggning
            } else {
                // Visa felmeddelande på webbplatsen om användaren inte hittades eller inloggningen misslyckades
                const errorContainer = document.getElementById("error-message");
                errorContainer.textContent = "Fel användarnamn eller lösenord.";
            }
        } catch (error) {
            const errorContainer = document.getElementById("error-message");
            errorContainer.textContent = "Ett fel inträffade. Försök igen senare.";
        }
    });
});