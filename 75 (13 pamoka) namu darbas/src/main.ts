/* eslint-disable padded-blocks */
/* eslint-disable max-len */
/* eslint-disable no-trailing-spaces */
/* eslint-disable no-empty */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable object-curly-newline */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */




/*
  Šių pratybų tikslas su išspręsti užduotis panaudojant bendrinius tipus. [1-6]
  Funkcijų parametrai turi būti bendrinio tipo/ų, pagal kurios būtų suformuojami atsakymai

  7 užduotis, skirta savarankiškai išmokti patikrinti tipus:
  https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
*/

type PrimitiveType = string | number | boolean;

const numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
const strings: string[] = ['abc', 'cde', 'efg', 'ghi'];

console.groupCollapsed('1. Parašykite funkciją, kuri grąžina pirmą masyvo elementą.');
// eslint-disable-next-line no-lone-blocks
{
  const firstElOfArr = <Type>(arr: Type[]): Type | undefined => arr[0];

  console.log(firstElOfArr(numbers));
  console.log(firstElOfArr(strings));
}
console.groupEnd();

console.groupCollapsed('2. Parašykite funkciją, kuri grąžina paskutinį masyvo elementą.');
{
  const lastElOfArr = <Type>(arr: Type[]): Type | undefined => arr[arr.length - 1];

  console.log(lastElOfArr(numbers));
  console.log(lastElOfArr(strings));
}
console.groupEnd();

console.groupCollapsed('3. Parašykite funkciją, kuri grąžina vienarūšių primityvių reikšmių masyvo kopiją');
{
  const primitiveTypeCopyFunction = <Type extends PrimitiveType>(arr: Type[]): Type[] => arr.map((a) => a);

  console.log(primitiveTypeCopyFunction(numbers));
  console.log(primitiveTypeCopyFunction(strings));
}
console.groupEnd();

// Sitas paciai nepavyko....
console.group('4. Parašykite funkciją,  kuri pirmu parametru priima string | number | boolen, grąžina to tipo masyvą su perduota reikšme tiek kartų, kiek nurodyta antru parametru');
{

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const solution = <Type extends PrimitiveType>(value: Type, count: number): Array<Type> => Array.from(new Array(count)).map((_) => value);
  
  const dataArr: [PrimitiveType, number][] = [
    ['a', 3],
    [77, 2],
    [true, 4],
  ];

  dataArr.forEach(
    (args) => console.log(
      `solution(${args.join(', ')}):`,
      solution(...args),
    ),
  );

}
console.groupEnd();

console.group('5. Parašykite funkciją, kuri sujungia tokių pat tipų masyvus į vieną masyvą');
{
  const mergeArrays = <Type>(arr1: Type[], arr2: Type[]): Type[] => [...arr1, ...arr2];

  console.log(mergeArrays(numbers, numbers));
  console.log(mergeArrays(strings, strings));

}
console.groupEnd();

// paciai nepavyko
console.group('6. Parašykite funkciją, kuri priimtų bet kokią reikšmę ir grąžintų objektą su savybėmis-funkcijomis "setValue" - reikšmei nustatyti ir "getValue" tai reikšmei nustatyti. Funkcijai perduota reikšmė neturi būti pasiekiama tiesiogiai.');
{
  type IncapsulatedValueObject<Type> = {
    setValue: (newValue: Type) => void,
    getValue: () => Type
  };


  const solution = <Type>(initialValue: Type): IncapsulatedValueObject<Type> => {
    const value: Type = initialValue;

    return {
      setValue: (newValue) => value === newValue,
      getValue: () => value,
    };
  };

  // Spausdinimas
  const value1: number = 7;
  const value2: Array<string> = ['Sidnius', 'Mauricijus', 'Penktasis'];
  const value3: { name: string, surname: string } = { name: 'Fanatijus', surname: 'Labdara' };

  const obj1 = solution(value1);
  const obj2 = solution(value2);
  const obj3 = solution(value3);

  console.log('initial values');
  console.log({
    value1: obj1.getValue(),
    value2: obj2.getValue(),
    value3: obj3.getValue(),
  });

  console.log('changing values...');
  obj1.setValue(9);
  obj2.setValue(['Pakeista']);
  obj3.setValue({ name: 'Pakaitalas', surname: 'Fuflo' });

}
console.groupEnd();

console.group('7. Turite 2 tipus: Student ir Worker kurie pasižymi bendrais bruožais Person. Parašykite 2 funkcijas <isStudent> ir <isWorker> skirtas atpažinti koks objektas buvo perduotas.Sukūrę tokias funkcijas iteruokite per žmonių masyvą, sugrupuodami elementus pagal tipą');
// Oficialus būdas patikrinti tipą
// https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards
{
  type Person = {
    name: string,
    surname: string,
  };

  type Student = Person & {
    university: string,
    course: number,
  };

  type Worker = Person & {
    avgMonthlyPay: number,
  };

  type GroupedPeople = {
    people: Person[],
    students: Student[],
    workers: Worker[],
  };

  // predikatoriai: 
  const isWorker = (person: Person): person is Worker => (person as Worker).avgMonthlyPay !== undefined;

  const isStudent = (person: Person): person is Student => {
    const student = person as Student;

    return student.university !== undefined && student.course !== undefined;
  };

  const groupPersonsFunction = (people: Person[]): GroupedPeople => {
    const groupedPeople = people.reduce<GroupedPeople>((prevGroupedPeople, person) => {
      const newGroupedPeople = { ...prevGroupedPeople };

      if (isWorker(person)) newGroupedPeople.workers.push(person);
      if (isStudent(person)) newGroupedPeople.students.push(person);
      else newGroupedPeople.people.push(person);

      return newGroupedPeople;
    }, {
      people: [],
      students: [],
      workers: [],
    });

    return groupedPeople;
  };

  const people: (Person | Student | Worker)[] = [
    { name: 'Atstovė', surname: 'Galtokaitė', university: 'VU', course: 2 },
    { name: 'Kurpius', surname: 'Medainis' },
    { name: 'Varnas', surname: 'Akilaitis', avgMonthlyPay: 2000 },
    { name: 'Ferodijus', surname: 'Cilcius' },
    { name: 'Sobora', surname: 'Kupolaityė', avgMonthlyPay: 1000 },
    { name: 'Zubrius', surname: 'Sulindauskas', university: 'VU', course: 2 },
    { name: 'Šidelė', surname: 'Gyslovienė', avgMonthlyPay: 1500 },
    { name: 'Užuodauskas', surname: 'Perrašimauskas', university: 'VGTU', course: 1 },
  ];

  // (Person | Student | Worker)[] === Person[] ????
  // https://www.javatpoint.com/typescript-duck-typing
  const groupedPeople = groupPersonsFunction(people);

  console.log(groupedPeople);
}
