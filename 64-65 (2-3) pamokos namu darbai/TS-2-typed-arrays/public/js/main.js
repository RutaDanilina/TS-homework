"use strict";
const numbers = [1, 2, 3, 4, 5, 6];
const names = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people = [{
        id: '39304075689',
        name: 'Verundijus',
        surname: 'Bauda',
        age: 51,
    }, {
        id: '39304075689',
        name: 'Ryja',
        surname: 'Žaneirytė',
        age: 41,
        height: 1.65,
        weight: 55,
    }, {
        id: '39304075689',
        name: 'Brudas',
        surname: 'Veilokas',
        age: 11,
        height: 1.45,
        weight: 45,
    }];
const printStrings = (strings) => {
    const printString = (str) => console.log(str);
    strings.forEach(printString);
};
const sumNumbers = (nums) => {
    const numberSumReducer = (sum, num) => sum + num;
    return nums.reduce(numberSumReducer, 0);
};
const createPeopleArray = (p1, p2) => [p1, p2];
console.group('Panaudojimo pavyzdžiai:');
{
    console.group('printStrings');
    {
        printStrings(names);
    }
    console.groupEnd();
    console.group('sumNumbers');
    {
        const result = sumNumbers(numbers);
        console.log({
            numbers,
            result,
        });
    }
    console.groupEnd();
    console.group('createPeopleArray');
    {
        const couple = createPeopleArray(people[0], people[1]);
        console.log(couple);
    }
    console.groupEnd();
}
console.groupEnd();
console.groupCollapsed('Užduotys');
{
    console.groupCollapsed('1. Aprašykite funkcijoms ir kintamiesiems tipus');
    {
        const numbers2 = [1, -8, -6, 7, 5, 1];
        const positiveNumberReducer = (sum, num) => (num > 0 ? sum + num : sum);
        function addPositiveNumbers(arr) {
            return arr.reduce(positiveNumberReducer, 0);
        }
        console.log({
            numbers2,
            sumOfPositiveNumbers: addPositiveNumbers(numbers),
        });
    }
    console.groupEnd();
    console.groupCollapsed('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
    {
        const firstLetters = (words) => words.reduce((prev, word) => prev + word[0], '');
        const strArrOfArr = [
            ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
            ['Lietuvos', 'Respublikos', 'Televizija'],
            ['Loughing', 'Out', 'Loud'],
        ];
        strArrOfArr.forEach((words) => {
            console.log(firstLetters(words));
        });
    }
    console.groupEnd();
    console.groupCollapsed('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
    {
        const multiplyNumbers = (nums) => nums.reduce((prev, num) => prev * num, 1);
        const numbers2 = [
            [1, 7, 8],
            [98, 74, 5, 0],
            [17, 10, 5],
        ];
        numbers2.forEach((nums) => {
            console.log(multiplyNumbers(nums));
        });
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main.js.map