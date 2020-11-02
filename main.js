let container = document.querySelector('#container');

let add = ((a,b) => a+b);
const subtract= ((a,b) => a-b);
const multiply= ((a,b) => a*b);
const divide = ((a,b) => {
    return b> 0 ? a/b : alert('Error. 0 not allowed')
});

const operate = ((op, x, y) => {
    switch (op){
        case '+':
            return add(x,y);
            break;
        case '-':
            return subtract(x,y);
            break;
        case '*':
            return multiply(x,y);
            break;
        case '/':
            return divide(x,y);
            break;
        default:
            alert(`Please enter a valid operator`);

    }

});

let displayValue='';
let sym;
let n1, n2;

const display = document.querySelector('#display');
const numbers = document.querySelectorAll('.num');
const operators = document.querySelectorAll('.opr');
const equal = document.querySelector('.equal');
const clear = document.querySelector('.clear');

numbers.forEach((num) => {
    num.addEventListener('click', (e) => {
        let input= num.textContent.replace(/\s/g, "");
        show(input);
    });
    
})

const show = (input) => {
    displayValue += input;
    return display.textContent = displayValue;
};

operators.forEach((opr)=> {
    opr.addEventListener('click', (e) => {
        let sym= opr.textContent.replace(/\s/g, "");
        store(sym);
    });
})


const store = (data) => {
    sym = data;
    if (displayValue > 0){
        n1= Number(displayValue);
        displayValue='';
    }
}

equal.addEventListener('click', (e) => {
    calculate(n1, sym);
});

const calculate = (first, sym)=> {
    if (n1 && displayValue){
        n2= Number(displayValue);
        n1= operate(sym,first,n2);
        displayValue=n1
        if (displayValue===0) {
            displayValue='';
            display.textContent=0;
        } else {
            display.textContent=displayValue;
        }
        
    }
}

clear.addEventListener('click', (e) => {
    clean();
})

const clean = () => {
    n1 ='';
    n2='';
    sym= '';
    displayValue='';
    return display.textContent=0;
}

