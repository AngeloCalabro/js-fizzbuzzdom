const square = document.createElement('span');

// CICLO PER NUMERI DA 0 a 10
for (let i = 0; i <= 100; i++) {

    // PRIMO CICLO DIVISIBILE per 3 e 5
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        // SECONDO CICLO DIVISIBILE per 3
        console.log('Fizz');
    } else if (i % 5 === 0) {
        // TERZO CICLO DIVISIBILE per 5
        console.log('Buzz');
    } else {
        console.log(i);
    }
    let square = `<span class="box box-b${i}">${i}<span>`
    console.log(square);
    // square.append(i);
};

console.log(square);