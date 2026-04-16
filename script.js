

    
    let aktuellerIndex = 0;

    function wechsle(richtung) {
       
        const alleZitate = document.getElementsByClassName("mein-zitat");

        alleZitate[aktuellerIndex].style.display = "none";

        aktuellerIndex = aktuellerIndex + richtung;

        if (aktuellerIndex >= alleZitate.length) {
            aktuellerIndex = 0;
        }
    
        if (aktuellerIndex < 0) {
            aktuellerIndex = alleZitate.length - 1;
        }

        alleZitate[aktuellerIndex].style.display = "block";
    }