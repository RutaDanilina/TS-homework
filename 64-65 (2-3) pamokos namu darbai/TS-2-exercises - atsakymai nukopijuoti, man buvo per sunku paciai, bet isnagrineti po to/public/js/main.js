"use strict";
console.groupCollapsed('1 - https://edabit.com/challenge/nuXdWHAoHv9y38sn7');
{
    const sortDrinks = (a, b) => a.price - b.price;
    const solution = (drinks) => [...drinks].sort(sortDrinks);
    const drinks = [
        { name: 'lemonade', price: 0.50 },
        { name: 'tee', price: 1.30 },
        { name: 'lime', price: 0.10 },
    ];
    const sortedDrinks = solution(drinks);
    console.log(sortedDrinks);
}
console.groupEnd();
console.groupCollapsed('2 - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau');
{
    const solution = (itemObj, itemName, itemValue) => (Object.assign(Object.assign({}, itemObj), { [itemName]: itemValue }));
    const solutionArgs1 = [{}, 'Brutus', 300];
    const solutionArgs2 = [{ piano: 500 }, 'Brutus', 400];
    const solutionArgs3 = [{ piano: 500, stereo: 300 }, 'Caligula', 440];
    const result1 = solution(...solutionArgs1);
    const result2 = solution(...solutionArgs2);
    const result3 = solution(...solutionArgs3);
    console.log(solutionArgs1, result1);
    console.log(solutionArgs2, result2);
    console.log(solutionArgs3, result3);
}
console.groupEnd();
//# sourceMappingURL=main.js.map