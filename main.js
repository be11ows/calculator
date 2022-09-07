let displayVal = document.querySelector('.output2');
let smDisplayVal = document.querySelector('.output');
displayVal.innerText = 0;
let n1, op, n2, display;

const nOpButtons = [...document.querySelectorAll('.num, .operator')];
const equalsBtn = document.querySelector('.equals');
const decimalBtn = document.querySelector('.decimal');
decimalBtn.disabled = true;
decimalBtn.addEventListener('click', showClicked);

for(let button of nOpButtons) {
    button.addEventListener('click', showClicked);
};



function showClicked(e) {
    // NUMBER
    if (e.target.className === 'num') {
        if (!display && op === undefined) {
            displayVal.innerText = e.target.innerText;
            display = displayVal.innerText;
            decimalBtn.disabled = false;
        } else if (display && op === undefined) {
            displayVal.innerText += e.target.innerText;
            display = displayVal.innerText;
        } else if (n1 && op && !n2) {
            n2 = e.target.innerText;
            displayVal.innerText += ` ${n2}`;
            display = displayVal.innerText;
            decimalBtn.disabled = false;
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
            displayVal.innerText = `${n1} ${op} `;
            display = displayVal.innerText;
        } else if (!op) {
            n1 = display;
            op = e.target.innerText;
            displayVal.innerText += ` ${op} `;
            display = displayVal.innerText;
            decimalBtn.disabled = true;
        } else if (n1 && op && n2) {
            n1 = operate(n1, op, n2);
            op = e.target.innerText;
            displayVal.innerText = `${n1} ${op} `;
            n2 = undefined;
            display = displayVal.innerText;
        }
    }

    if (e.target.className === 'decimal') {
        if (n1 && op && n2) {
            n2 += '.';
            decimalBtn.disabled = true;
            displayVal.innerText = `${n1} ${op} ${n2} `;
            display = displayVal.innerText;
        } else {
            display += '.';
            decimalBtn.disabled = true;
            displayVal.innerText = `${display} `;
            display = displayVal.innerText;
        } 
    }

    equalsBtn.addEventListener('click', (e) => {
        if (n1 && op && n2) {
            displayVal.innerText = operate(n1, op, n2)
        } else {
            return;
        }
    });
}

function add (n1, n2) {
    return +n1 + +n2;
}

function subtract(n1, n2) {
    return +n1 - +n2;
}

function multiply (n1, n2) {
    let output = +n1 * +n2;
    if(output - Math.floor(output) === 0) {
        return output;
    } else {
        return output.toFixed(2);
    }

}

function divide(n1, n2) {
    let output = +n1 / +n2;
    if(output - Math.floor(output) === 0) {
        return output;
    } else {
        return output.toFixed(2);
    }
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
    return output;
}