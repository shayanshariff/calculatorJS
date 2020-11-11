function add(a , b){
    return a + b;
}

function subtract(a, b){
    return a -b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a/b;
} 

function operate(operator, a, b){
    let ans;
    switch(operator){
        case "+":
            ans = add(a, b);
            break;
        case "-":
            ans = subtract(a,b);
            break;
        case "*":
            ans = multiply(a,b);
            break;
        case "/":
            ans = divide(a,b);
            break;
    }
    return ans;
}