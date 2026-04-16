

    // Wir merken uns, welches Zitat gerade dran ist
    let aktuellerIndex = 0;

    function wechsle(richtung) {
        // 1. Alle Zitate finden
        const alleZitate = document.getElementsByClassName("mein-zitat");

        // 2. Das aktuelle Zitat verstecken
        alleZitate[aktuellerIndex].style.display = "none";

        // 3. Den Index neu berechnen (+1 oder -1)
        aktuellerIndex = aktuellerIndex + richtung;

        // Wenn wir über das Ende hinausgehen -> zurück zum Anfang
        if (aktuellerIndex >= alleZitate.length) {
            aktuellerIndex = 0;
        }
        // Wenn wir vor den Anfang gehen -> zum letzten Zitat
        if (aktuellerIndex < 0) {
            aktuellerIndex = alleZitate.length - 1;
        }

        // 4. Das neue Zitat anzeigen
        alleZitate[aktuellerIndex].style.display = "block";
    }