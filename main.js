let displayVal = document.querySelector('.output2');
let smDisplayVal = document.querySelector('.output');
displayVal.innerText = 0;
let n1, op, n2, display;

const nOpButtons = [...document.querySelectorAll('.num, .operator')];
const equalsBtn = document.querySelector('.equals');

for(let button of nOpButtons) {
    button.addEventListener('click', showClicked);
};

function showClicked(e) {
    // NUMBER
    if (e.target.className === 'num') {
        if (!display && op === undefined) {
            displayVal.innerText = e.target.innerText;
            display = displayVal.innerText;
        } else if (display && op === undefined) {
            displayVal.innerText += e.target.innerText;
            display = displayVal.innerText;
        } else if (n1 && op && !n2) {
            n2 = e.target.innerText;
            displayVal.innerText += ` ${n2}`;
            display = displayVal.innerText;
        } else if (n1 && op && n2) {
            n2 += e.target.innerText;
            displayVal.innerText = `${n1} ${op} ${n2}`;
            display = displayVal.innerText;
        }
    }
    // OPERATOR
    if (e.target.className === 'operator') {
        if(!display) {
            n1 = 0;
            op = e.target.innerText;
            displayVal.innerText += `${n1} ${op} `;
            display = displayVal.innerText;
        } else {
            n1 = display;
            op = e.target.innerText;
            displayVal.innerText += ` ${op} `;
            display = displayVal.innerText;
        }
    }
    equalsBtn.addEventListener('click', (e) => operate(n1, op, n2));
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
    smDisplayVal.innerText = `${n1} ${op} ${n2} =`;
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
    console.log(output);
    displayVal.innerText = output;
}