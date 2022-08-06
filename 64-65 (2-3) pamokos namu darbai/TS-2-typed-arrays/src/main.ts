/* eslint-disable no-inner-declarations */
/* eslint-disable spaced-comment */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable max-len */
/*
  Aprašant masyvų tipus reikia nurodyti kokie elementai sudarys masyvai, galimos 2 sintaksės:
    * tipas[] -> number[], string[], Person[] ir t.t.
    * Array<tipas> -> Array<number>, Array<string>, Array<Person> ir t.t.
*/
type Person = {
  id: string,
  name: string,
  surname: string,
  age: number,
  height?: number, // Neprivaloma savybė
  weight?: number, // Neprivaloma savybė
};

const numbers: number[] = [1, 2, 3, 4, 5, 6];
const names: Array<string> = ['Jagnita', 'Kimparas', 'Pitonkas', 'Fasalija'];
const people: Person[] = [{
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

// Kaip ir kiti tipai, masyvai gali būti naudojami funkcijų parametrams arba funkcijų grąžinimo tipams aprašyti
type CreatePeopleArrayFunction = (p1: Person, p2: Person) => Person[];

const printStrings = (strings: string[]): void => {
  const printString = (str: string): void => console.log(str);

  strings.forEach(printString);
};

const sumNumbers = (nums: Array<number>): number => {
  const numberSumReducer = (sum: number, num: number): number => sum + num;

  return nums.reduce(numberSumReducer, 0);
};

const createPeopleArray: CreatePeopleArrayFunction = (p1, p2) => [p1, p2];

console.group('Panaudojimo pavyzdžiai:');
{
  console.group('printStrings');
  {
    printStrings(names);
  }
  console.groupEnd();

  console.group('sumNumbers');
  {
    const result: number = sumNumbers(numbers);
    console.log({
      numbers,
      result,
    });
  }
  console.groupEnd();

  console.group('createPeopleArray');
  {
    const couple: Array<Person> = createPeopleArray(people[0], people[1]);
    console.log(couple);
  }
  console.groupEnd();
}
console.groupEnd();


/////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('Užduotys');
{
////////////////////////////////////////////////////////////////////////
  console.groupCollapsed('1. Aprašykite funkcijoms ir kintamiesiems tipus');
  {  
    const numbers2: number[] = [1, -8, -6, 7, 5, 1];

    const positiveNumberReducer = (sum: number, num: number): number => (num > 0 ? sum + num : sum);

    function addPositiveNumbers(arr: number[]): number { 
      return arr.reduce(positiveNumberReducer, 0);
    }
  

    console.log({
      numbers2,
      sumOfPositiveNumbers: addPositiveNumbers(numbers),
    });
  }  
  console.groupEnd();

  //////////////////////////////////////////////////////////////////////// ??????????????????????????????????
  console.groupCollapsed('2. Sukurkite ir tipais aprašykite funkciją, kuri sudarytų string\'ą iš string\'ų masyvo elementų pirmųjų raidžių');
  {
    const firstLetters = (words: string[]): string => words.reduce((prev, word) => prev + word[0], '');

    // isardyti masyva masyve [][]:
    const strArrOfArr: string[][] = [
      ['Lietuviškas', 'Nepriklausomas', 'Kanalas'],
      ['Lietuvos', 'Respublikos', 'Televizija'],
      ['Loughing', 'Out', 'Loud'],
    ];

    strArrOfArr.forEach((words) => {
      console.log(firstLetters(words));
    });
  }  
  console.groupEnd();


  /////////////////////////////////////////////////////////////////////////////////////////
  console.groupCollapsed('3. Sukurkite ir tipais aprašykite funkciją, kuri saudaugintų visus number masyvo skaičius');
  {
    const multiplyNumbers = (nums:number[]): number => nums.reduce((prev, num) => prev * num, 1);

    const numbers2: number[][] = [
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
