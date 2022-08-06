function inchToFeet(inch) {
    var feet = inch / 12;
    return feet;
}

var inch = 84;
var feet = inchToFeet(inch);
console.log(feet);