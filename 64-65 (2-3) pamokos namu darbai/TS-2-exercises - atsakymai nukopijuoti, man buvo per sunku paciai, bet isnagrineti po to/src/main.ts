/* eslint-disable no-lone-blocks */
/* eslint-disable max-len */
/* eslint-disable no-console */
/* eslint-disable no-multiple-empty-lines */
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
// 1. You will be given an array of drinks, with each drink being an object with two properties: name and price. Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

type Drinks = { name: string, price: number };

const sortDrinks = (a: Drinks, b: Drinks): number => a.price - b.price;
const solution = (drinks: Drinks[]): Drinks[] => [...drinks].sort(sortDrinks);

const drinks: Drinks[] = [
  { name: 'lemonade', price: 0.50 },
  { name: 'tee', price: 1.30 },
  { name: 'lime', price: 0.10 },
];

const sortedDrinks: Drinks[] = solution(drinks);

console.log(sortedDrinks);
}
console.groupEnd();



console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
// 2. Given three arguments ⁠— an object obj of the stolen items, the pets name and a value ⁠— return an object with that name and value in it (as key-value pairs).
{
  type ItemObj = {
    [key: string]: number,
  };

  const solution = (itemObj: ItemObj, itemName: string, itemValue: number): ItemObj => ({
    ...itemObj,
    [itemName]: itemValue,
  });

  type SolutionArgs = [ItemObj, string, number];

  const solutionArgs1: SolutionArgs = [{}, 'Brutus', 300];
  const solutionArgs2: SolutionArgs = [{ piano: 500 }, 'Brutus', 400];
  const solutionArgs3: SolutionArgs = [{ piano: 500, stereo: 300 }, 'Caligula', 440];

  const result1: ItemObj = solution(...solutionArgs1);
  const result2: ItemObj = solution(...solutionArgs2);
  const result3: ItemObj = solution(...solutionArgs3);

  console.log(solutionArgs1, result1);
  console.log(solutionArgs2, result2);
  console.log(solutionArgs3, result3);
}
console.groupEnd();

