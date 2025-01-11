document.getElementById("aktualisierenButton").addEventListener("click", berechneZutaten);

function berechneZutaten() {
    // Hole die Anzahl der Portionen aus dem Eingabefeld
    let portionen = parseInt(document.getElementById("zutatenInput").value);

    // Überprüfe, ob eine gültige Anzahl von Portionen eingegeben wurde
    if (isNaN(portionen) || portionen < 1) {
        alert("Bitte eine gültige Anzahl an Portionen eingeben!");
        return;
    }

    console.log("Anzahl der Portionen:", portionen);
    const zutatenListe = document.querySelectorAll("#zutaten-liste li");

    zutatenListe.forEach(item => {
        // Hole die Grundmenge aus dem data-menge Attribut und ersetze Komma durch Punkt
        let grundMenge = parseFloat(item.getAttribute("data-menge").replace(",", "."));
        
        // Wenn die Grundmenge ungültig ist, überspringen wir das Item
        if (isNaN(grundMenge)) return;

        // Berechne die neue Menge und runde auf 2 Dezimalstellen
        const neueMenge = (grundMenge * portionen).toFixed(2);

        // Zerlege Text in Menge, Maßeinheit und Resttext
        let [menge, einheit, ...restText] = item.innerText.split(" ");

        // Setze den Text mit der neuen Menge und der gleichen Einheit zusammen
        item.innerText = `${neueMenge} ${einheit} ${restText.join(" ")}`;
    });
}
