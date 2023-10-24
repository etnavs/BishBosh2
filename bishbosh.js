// Skapa en tom array för att lagra output-värden
// let allaOutput = [];

document.getElementById("generateButton").addEventListener("click", function () {
    let numberOfValues = parseInt(document.getElementById("numberOfValues").value);
    let bish = parseInt(document.getElementById("bish").value);
    let bosh = parseInt(document.getElementById("bosh").value);

     // Hämta det element där du vill visa resultaten
     let outputContainer = document.getElementById("output-container");
    
    // Töm innehållet i outputContainer
    outputContainer.innerHTML = '';

    for (let i = 1; i <= numberOfValues; i++) {
        // Din kod för att generera och visa output här

        //for (let i = 1; i <= 35; i++) {
        let output = '';

        if (i % bish == 0 && i % bosh == 0) {
            output = 'Bish-Bosh';
        } else if (i % bish == 0) {
            output = 'Bish';
        } else if (i % bosh == 0) {
            output = 'Bosh';
        } else {
            output = i;
        }


        // Skapa ett nytt HTML-element (div) för varje output-värde och lägg till det 
        // direkt i dokumentet (body)
        outputContainer.innerHTML += '<div>' + output + '</div>';

    }
});