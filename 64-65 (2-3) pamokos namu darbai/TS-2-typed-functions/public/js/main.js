"use strict";
const addNumbers = (num1, num2) => num1 + num2;
const joinStrings = (str1, str2) => `${str1} ${str2}`;
const createInitials = (str1, str2) => str1[0].toLocaleUpperCase() + str2[0].toLocaleUpperCase();
const sum = addNumbers(5, 7);
const joinedString = joinStrings('Penediktas', 'Tušinis');
const initials = createInitials('Penediktas', 'Tušinis');
console.log({
    sum,
    joinedString,
    initials,
});
function printRedText(text) {
    console.log(`%c ${text}`, 'color: #ee0000');
}
printRedText('printRed funkcijos argumentas');
console.group('1. Aprašykite funkcijoms tipus jas deklaruojant');
const multiply = (a, b) => a * b;
const power = function (base, pow) { return base ** pow; };
const squareRoot = (number) => number ** (1 / 2);
const root = function (base, nthRoot) { return base ** (1 / nthRoot); };
const printBlueText = (text) => console.log(`%c${text}`, 'color: #0000ee');
const num1 = 16;
const num2 = 4;
console.log({
    [`multiply(${num1}, ${num2})`]: multiply(num1, num2),
    [`power(${num1}, ${num2})`]: power(num1, num2),
    [`squareRoot(${num1})`]: squareRoot(num1),
    [`root(${num1}, ${num2})`]: root(num1, num2),
});
printBlueText('printBlueText funkcijos argumentas');
console.groupEnd();
console.group('2. Aprašykite funkcijų tipus prieš deklaruojant funkcijas');
const multiply2 = (a, b) => a * b;
const power2 = function (base, pow) { return base ** pow; };
const squareRoot2 = (number) => number ** (1 / 2);
const root2 = function (base, nthRoot) { return base ** (1 / nthRoot); };
const printBlueText2 = (text) => console.log(`%c${text}`, 'color: #0000ee');
const num3 = 16;
const num4 = 4;
console.log({
    [`multiply2(${num3}, ${num4})`]: multiply2(num3, num4),
    [`power2(${num3}, ${num4})`]: power2(num3, num4),
    [`squareRoot2(${num3})`]: squareRoot2(num3),
    [`root2(${num3}, ${num4})`]: root2(num3, num4),
});
printBlueText2('printBlueText funkcijos arguments');
console.groupEnd();
//# sourceMappingURL=main.js.map