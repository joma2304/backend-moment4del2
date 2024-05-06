# Moment 4 del 2, DT207G - Backend-baserad webbutveckling
Denna webbplatsen använder sig av webbtjänsten jag skapade i del av av denna uppgift för att man ska kunna logga in på webbplatsen och därmed komma åt delar som man annars inte har tillgång till.

När en användare registrerar sig och loggar in så skickas ett JWT-Token med och sparas i localStorage, så länge användaren har detta Token så kommer den åt en del av webbplatsen som annars inte är tillgängligt. 

Webbplatsen är uppdelad i: 
* Startsidan (som alla kommer åt)
* Inloggnings-sida (som alla kommer åt)
* Registrerings-sida (som alla kommer åt)
* Mina sidor/protected (kommer endast åt ifall man är inloggad och har JWT-Token)



