const myContainer = document.createElement('section')
const square = document.querySelector('.fizz-buzz');
square.className = "square"

// CICLO PER NUMERI DA 0 a 10
for (let i = 0; i <= 100; i++) {
    // PRIMO CICLO DIVISIBILE per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        square.innerHTML += "<div>fizzbuzz</div>";
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        // SECONDO CICLO DIVISIBILE per 3
        square.innerHTML += "<div>fizz</div>";
        console.log('Fizz');
    } else if (i % 5 === 0) {
        // TERZO CICLO DIVISIBILE per 5
        square.innerHTML += "<div>buzz</div>";
        console.log('Buzz');
    } else {
        // ULTIMO CICLO NEL CASO NON FOSSERO DIVISIBILI PER 3 e 5
        square.innerHTML += "<div>" + i + "</div>"
        console.log(i);
    }
    console.log(square);
};