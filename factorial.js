function factorial(number) {
    var factorial = 1;
    for (let i = number; i >= 1; i--){
        factorial = factorial * i;
    }
    return factorial;
}

let number = 6;
let factorialResult = factorial(number);
console.log(factorialResult);