Mein Projekt
Zuerst habe ich mir ein richtiges Konzept überlegt und alles ausgearbeitet. Ich hatte eine genaue Idee für das Layout im Kopf und habe mir das auch auf gezeichnet, damit ich wusste, wo was hin soll. Dann ging es mit dem HTML los. Weil ich guten Content wollte, habe ich Google Gemini meine Ideen und ein paar Quellen gegeben. Ich habe der KI gesagt, sie soll mir eine einfache Ausführung in Stichpunkten machen und dazu einen langen Text für jedes Thema.

Als ich die Texte hatte, habe ich sie in das HTML eingebaut. Das hat echt lange gedauert, die ganzen Texte zu strukturieren, weil sie so lang waren. Ich habe alles von Hand beschriftet und ordentlich organisiert, damit ich später noch durchblicke. Nachdem alles am richtigen Ort war und die Größen gestimmt haben, wollte ich die Bilder einfügen.

Eigentlich wollte ich die Bilder auf der linken Seite haben, aber ich habe es einfach nicht hinbekommen. Ich habe viel gegoogelt und eine Lösung gefunden, wie ich sie auf die rechte Seite bekomme, aber das hat komischerweise nur mit einem einzigen Bild funktioniert. Ich wollte aber mehrere Bilder haben. Zuerst habe ich wieder gegoogelt, aber die Erklärungen dort habe ich überhaupt nicht verstanden. Also habe ich wieder Gemini gefragt. Er hat mir dann erklärt, dass ich einen "Container" machen muss. So habe ich alle Bilder an einem Ort und muss nicht für jedes Bild alles neu einstellen.

.buch-container {
    position: absolute;
    left: 75%;                 Damit es auf der rechten Seite ist 
    top: 750px;
    transform: translateX(-50%);
    text-align: center;}

.book-img {
    display: block;
    width: 200px;
    height: auto;
    margin-left: auto;
    margin-right: auto; }      Die Eigenschaften für alle Bilder 


Als die Bilder endlich am richtigen Ort waren, habe ich noch die Beschreibungen hinzugefügt. Danach habe ich mich um das Design gekümmert, also den Hintergrund und die Schriftfarbe. Ich wollte unbedingt einen eleganten Look, der aber trotzdem irgendwie an Geld erinnert. Meine erste Idee war Grün mit Schwarz, aber ich habe schnell gemerkt, dass das gar nicht geht – man konnte kaum was lesen wegen dem Kontrast. Deshalb habe ich mich für ein Cremeweiß entschieden. Ich habe dann noch den Vorschlag bekommen, Gold oder Gelb für die Details zu nehmen, was echt gut aussah.

Ganz am Ende wollte ich dann JavaScript hinzufügen, weil ich versuchen wollte, die Seite zu übersetzen. Ich hatte aber keine Ahnung von JavaScript und online stand überall, dass man das nicht mal eben schnell lernt. Also habe ich Gemini gefragt und er hat mir den Code geschrieben. Ich habe ihn eingefügt, aber es hat einfach nicht funktioniert. Ich habe bestimmt zwei Stunden lang alles versucht, mit Gemini, ChatGPT und ewiger Suche bei Google, aber es wollte nicht klappen. Irgendwann habe ich frustriert aufgegeben.

Am nächsten Tag habe ich dann durch Zufall herausgefunden, woran es lag: Ich hätte die JavaScript-Datei im HTML verlinken müssen. Als ich das endlich kapiert hatte, konnte ich auch meinen Zitaten-Durchklicker fertig machen. Den hatte ich erst alleine versucht, bin aber nicht weitergekommen und habe wieder Gemini gefragt. Er hat mir einen groben Code gegeben, und ich habe dann die Details angepasst und die Farben so gemacht, wie ich sie wollte. Das hat dann endlich funktioniert und ich musste nur noch ein paar kleine Details glattziehen.
