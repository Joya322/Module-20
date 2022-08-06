function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

var number = 117;
var answer = isEven(number);
console.log(answer);