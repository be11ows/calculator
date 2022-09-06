const displayVal = document.querySelector('.output2');
displayVal.textContent = 0;
let n1, n2, op;

const numButtons = [...document.querySelectorAll('.num')];
for(let button of numButtons) {
    button.addEventListener('click', doThings);
}

function doThings(e) {
    let n1 = e.target.innerText;
    displayVal.textContent = e.target.innerText;
    console.log(n1);
}

function add (n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply (n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function operate(n1, op, n2) {
    let output;
    
    switch (op) {
        case '+':
            output = add(n1, n2);
            break;
        case '-':
            output = subtract(n1, n2);
            break;
        case '*':
            output = multiply(n1, n2);
            break;
        case '/':
            output = divide(n1, n2);
            break;
    }
    // output should be displayed on the calculator screen
    // console.log(output);
}

function equals() {

}

function display() {
    // Create the functions that populate the display when you click the number buttons. 
    // You should be storing the ‘display value’ in a variable somewhere for use in the next step.
} 

// Make the calculator work! 
// You’ll need to store the first number that is input into the calculator when a user presses an operator, 
// and also save which operation has been chosen 
// and then operate() on them when the user presses the “=” key.

// operate(2, '/', 5);