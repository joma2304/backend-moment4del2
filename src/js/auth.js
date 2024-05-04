window.onload = init;
//KOllar så att token finns för protected.html annars skickas man till login.html
async function init() {

    const jwtToken = localStorage.getItem("jwtToken");
    if(!jwtToken) {
        window.location.href="login.html"
    }

};