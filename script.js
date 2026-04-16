

      // Deine Zitat-Daten
    const zitateListe = [
        { text: "Warte nicht darauf, zu investieren. Investiere und warte.", author: "Unbekannt" },
        { text: "Gib nicht aus, was nach dem Sparen übrig bleibt, sondern spare, was nach dem Ausgeben übrig bleibt.", author: "Warren Buffett" },
        { text: "Reich wird man nicht durch das, was man verdient, sondern durch das, was man nicht ausgibt.", author: "Henry Ford" },
        { text: "Eine Investition in Wissen bringt noch immer die besten Zinsen.", author: "Benjamin Franklin" },
        { text: "Geld ist ein guter Diener, aber ein schlechter Herr.", author: "Francis Bacon" }
    ];

    let aktuellerIndex = 0;

    // Elemente aus dem HTML holen
    const textFeld = document.getElementById('quote-text');
    const autorFeld = document.getElementById('quote-author');
    const btnVor = document.getElementById('next-btn');
    const btnZurueck = document.getElementById('prev-btn');

    // Funktion zum Anzeigen des Zitats
    function updateZitat() {
        textFeld.textContent = `"${zitateListe[aktuellerIndex].text}"`;
        autorFeld.textContent = `- ${zitateListe[aktuellerIndex].author}`;
    }

    // Event-Listener für "Weiter"
    btnVor.addEventListener('click', () => {
        aktuellerIndex++;
        if (aktuellerIndex >= zitateListe.length) {
            aktuellerIndex = 0; // Zurück zum Start
        }
        updateZitat();
    });

    // Event-Listener für "Zurück"
    btnZurueck.addEventListener('click', () => {
        aktuellerIndex--;
        if (aktuellerIndex < 0) {
            aktuellerIndex = zitateListe.length - 1; // Zum letzten Zitat
        }
        updateZitat();
    });