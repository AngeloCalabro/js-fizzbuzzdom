const myContainer = document.querySelector('.row');

// CICLO PER NUMERI DA 0 a 100
for (let i = 0; i <= 100; i++) {
    const mySquare = document.createElement('div')

    if (i % 3 === 0 && i % 5 === 0) {
        // PRIMO CICLO DIVISIBILE per 3 e 5
        // square.innerHTML += "<div>fizzbuzz</div>";
        mySquare.append('fizzbuzz');
        mySquare.className = 'my-square my-bg-blue';
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        // SECONDO CICLO DIVISIBILE per 3
        // square.innerHTML += "<div>fizz</div>";
        mySquare.append('fizz');
        mySquare.className = 'my-square my-bg-light-blue';
        console.log('Fizz');
    } else if (i % 5 === 0) {
        // TERZO CICLO DIVISIBILE per 5
        // square.innerHTML += "<div>buzz</div>";
        mySquare.append('buzz');
        mySquare.className = 'my-square my-bg-lile';
        console.log('Buzz');
    } else {
        // ULTIMO CICLO NEL CASO NON FOSSERO DIVISIBILI PER 3 o 5
        // square.innerHTML += "<div>" + i + "</div>"
        mySquare.append(i);
        mySquare.className = 'my-square';
    }

    myContainer.append(mySquare);

    console.log(i);
};