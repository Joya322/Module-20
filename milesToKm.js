function milesToKm(miles) {
  var kilometers = miles * 1.609;
  return kilometers;
}

var miles = 3;
var kilometers = milesToKm(miles);
console.log(kilometers);
