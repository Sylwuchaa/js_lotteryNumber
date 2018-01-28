// tablica która zapisuje wyniki 
const result = [];


const randomNumber = function() {
    // jeśłi długość tablicy bedzie rowna 6 zakoncz działanie funckji
    if(result.length === 6) return;
    // tworzymy elemnt div 
    const div = document.createElement("div");
    // div posiada możliwość dodania zawartości math floor obcina wszystko po przecinku 
    const resultDraw =  Math.floor(Math.random() * 49 + 1);
    //tworzymy pętla aby sprawdzała czy liczba sie nie powtarza jeśli sie potwtórzy konsola daje nam taka informację 
    for (let i = 0; i < result.length; i++) {
        if(resultDraw === result[i] ) {
            console.log("ta sama liczba!");
            return randomNumber()
        }
    }
    div.textContent = resultDraw;
    // dodajemy do tablicy nasze wyniki
    result.push(resultDraw)
    // wez dokument i dodaj diva
    document.body.appendChild(div)

    
}

// łapiemy guzik na którym będziemy pracować
const button = document.querySelector("button");
// nasłuchujemy na zdarzeniu w tym wypadku na klik myszka guzika
button.addEventListener("click", randomNumber);