const myContainer = document.querySelector('.row');

// CICLO PER NUMERI DA 0 a 100
for (let i = 0; i <= 100; i++) {
    const mySquare = document.createElement('div')
    mySquare.className = 'my-square';

    if (i % 3 === 0 && i % 5 === 0) {
        // PRIMO CICLO DIVISIBILE per 3 e 5
        mySquare.textContent = "Fizzbuzz";
        mySquare.classList.add('fizzbuzz');
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        // SECONDO CICLO DIVISIBILE per 3
        mySquare.textContent = "Fizz";
        mySquare.classList.add('fizz');
        console.log('Fizz');
    } else if (i % 5 === 0) {
        // TERZO CICLO DIVISIBILE per 5
        mySquare.textContent = "Buzz";
        mySquare.classList.add('buzz');
        console.log('Buzz');
    } else {
        // ULTIMO CICLO NEL CASO NON FOSSERO DIVISIBILI PER 3 o 5
        mySquare.textContent = i;
    }

    myContainer.append(mySquare);

    console.log(i);
};