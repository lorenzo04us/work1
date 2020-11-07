'use strict';
/* print conversion table
   fahrenheit to celsius */
const f2c = function () {
    let fahr;
    let celsius;

    let lower = 0;                       // define constants
    let upper = 100;
    let step = 5;

    let s = '<table>';
    s += '<tr><th>Celsius</th><th>Fahrenheit</th></tr>';
    celsius = lower;
    while (celsius <= upper) {
        fahr = (celsius * 9/5 + 32);   // the conversion formula
        s += `<tr><td>${celsius}</td><td>${fahr}</td></tr>`;
        fahr = fahr.toFixed(2);
        celsius = celsius + step;
    }
    s += '</table>';
    return s;
}
