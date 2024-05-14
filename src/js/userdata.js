// Funktion för att hämta användarnamnet från servern
async function fetchUserData() {
    try {
      // Hämta JWT-token från localStorage
      const jwtToken = localStorage.getItem('jwtToken');
  
      // Gör en GET-begäran till skyddad resurs på servern och skicka med JWT-token i Authorization-header
      const response = await fetch('https://backend-moment4-del1.onrender.com/api/protected/user', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${jwtToken}`
        }
      });
  
      // Kontrollera om ok
      if (response.ok) {
        // Ändra svaret till JSON-format
        const userData = await response.json();
        
        // Visa användarnamnet på sidan
        document.getElementById('username').innerText = userData.username;
      } else {
        // Om fel
        console.error('Failed to fetch user data');
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }
  
  // Anropa funktionen för att hämta användardata när sidan laddas
  fetchUserData();