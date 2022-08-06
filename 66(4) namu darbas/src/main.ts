console.groupCollapsed('1. Parašykite funkciją, kuri atspausdina paskutinio masyvo elemento indeksą');
{

  function lastArrIndex(arr: number[]):number {
    const arrLength: number= arr.length;
    return arrLength -1;
  }
  console.log(lastArrIndex([1,2,3,4,5,6,7,8,9]));
  console.log(lastArrIndex([1,2,3,4]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////


console.groupCollapsed('2. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus eilutėmis');
{
  function indexInDifferentLine(arr: number[]): void{
    for (let i: number = 0; i < arr.length; i++) console.log(i);
  }
  console.log(indexInDifferentLine([1, 2, 3, 4]))
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('3. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes eilutėmis');
{

  function elementsInDifferentLine(arr: string[]): string {
    const newArr: string=  arr.toString().split(',').join('\n');
    return newArr;
  }
  console.log(elementsInDifferentLine(['vienas', 'du', 'trys', 'keturi']));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////




console.groupCollapsed('4. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras eilutėmis, tokiu formatu:  ');
// [0] => reikšmė
// [1] => reikšmė
// [2] => reikšmė
{
  function elAndIndex(arr:string[]):void{
    for (let i = 0; i < arr.length; i++){
      console.log(`${i} => ${arr[i]}`);
    }
  }
  elAndIndex(['nulis', 'vienas', 'du', 'trys']);
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('5. Parašykite funkciją, kuri atspausdina masyvo elementus atbuline tvarka eilutėmis, iš galo.');
{
  function nznArGeraiSupratauUzduoti(arr: number[]): void {
    for (let i = arr.length -1; i >= 0; i--) {
    console.log(arr[i]);
  }
  }
  nznArGeraiSupratauUzduoti([1,2,3,4,5,6]);
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////


///////////////// ? ? ? ///////////////////////////////
console.groupCollapsed('6. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indeksus vienoje eilutėje: 0 1 2 3 ...');
{
//   function indexInOneLine(arr: string[]){
//     const newIndexArr = arr.map(index) => index.join(', ');
//     return newIndexArr;
//   }
//   console.log(indexInOneLine(['nulis', 'vienas', 'du','trys']));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('7. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento reikšmes vienoje eilutėje: -111 2 -9 48 ...');
{
  function inOneLine(arr: any[]) {
    const newArr = arr.join(' ');
    return newArr;
  }
  console.log(inOneLine([-111, 2, -9, 48]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('8. Parašykite funkciją, kuri atspausdina kiekvieno masyvo elemento indekso ir reikšmių poras vienoje eilutėje, tokiu formatu:');
//  [0]=>17, [1]=>8, [2]=>88 ..
{
    function elAndIndexInOneLine(arr: string[]){
    const newIndexArr = arr.map((el, index) => `${index} => ${el}`).join(', ');
    return newIndexArr;
  }
  console.log(elAndIndexInOneLine(['nulis', 'vienas', 'du','trys']));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('9. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų padaugintų iš 2');
{
  function arrDoubled(arr: number[]): number[] {
    return arr.map(item => item * 2);
  }
console.log(arrDoubled([2,5,8,13,20]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('10. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų pakeltų kvadratu');
{
  function arrSquare(arr: number[]): number[] {
    return arr.map(item => item ** 2);
  }
console.log(arrSquare([2,5,8,13,20]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('11. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo elementų ir jų indeksų sandaugos');
{
  function arrMultiplicationOfIndex(arr: number[]): number[] {
    return arr.map((item, index) => item * index);
  }
console.log(arrMultiplicationOfIndex([2,5,8,13,20]));

}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('12. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo teigiamų elementų');
{
  function onlyEvenNumsFromArr(arr: number[]): number[] {
    return arr.filter((num) => num >= 0);
  }
console.log(onlyEvenNumsFromArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('13. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo NE-teigiamų elementų');
{
  function onlyNegativeNumsFromArr(arr: number[]): number[] {
    return arr.filter((num) => num < 0);
  }
console.log(onlyNegativeNumsFromArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));

}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////



console.groupCollapsed('14. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo lyginių elementų');
{
  function onlyEvenNumsFromArr(arr: number[]): number[] {
    return arr.filter((num) => num % 2 === 0);
  }
console.log(onlyEvenNumsFromArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////




console.groupCollapsed('15. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo nelyginių elementų');
{
  function onlyOddNumsFromArr(arr: number[]): number[] {
    return arr.filter((num) => num % 2 !== 0);
  }
console.log(onlyOddNumsFromArr([-5, 10, -3, 12, -9, 5, 90, 0, 1]));
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////// ???? ////////////////////////////////////////
console.groupCollapsed('16. Sukurkite funkciją, kuri priima skaičių masyvą ir grąžina naują masyvą sudarytą iš pradinio masyvo, paverstų teigiamais, elementų');
{
  // Užduoties sprendimas ir užduoties sprendimo atspausdinimas su duomenimis
}
console.groupEnd();
//////////////////////////////////////////////////////////////////////////////////


