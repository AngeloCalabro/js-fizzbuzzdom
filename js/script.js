let square = document.querySelector('.fizz-buzz');

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
        square.innerHTML += "<div>" + i + "</div>"
        console.log(i);
    }
    let square = `<span class="box box-b${i}">${i}<span>`
    console.log(square);
    // square.append(i);
};

// console.log(square);