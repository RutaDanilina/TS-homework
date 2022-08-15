/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable spaced-comment */
/* eslint-disable no-lone-blocks */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */


type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },
  {
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },
  {
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },
  {
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
    hasCar: true,
  },
  {
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    income: 1200,
    married: true,
    hasCar: true,
  },
  {
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72,
    income: 364,
    married: false,
    hasCar: false,
  },
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus
  
  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)
    
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    // Tipai:
    type Identity = {
      name: Person['name'],
      surname: Person['surname'],
    };

    // Funkcijos:
    const personToIdentity = ({ name, surname }: Person): Identity => ({ name, surname });

    // Sprendimas:
    const identities: Identity[] = people.map(personToIdentity);

    // Spausdinimas:
    console.table(people);
    console.table(identities);
}
console.groupEnd();




////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
    married: Boolean(married),
    hasCar: Boolean(hasCar),
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.table(people);
  console.table(result);
}
console.groupEnd();




////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('3. Atspausdinkite objektus su visų žmonių vardais, pavardėm bei santuokos statusais');
{
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
    married: Person['married'],
  };

  const selectTaskProps = ({ name, surname, married }: Person): TaskProps => ({
    name, surname, married,
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.log(result);
}
console.groupEnd();





////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('4. Sukurtite masyvą su lytimis ir uždirbamu pinigų kiekiu, pagal pradinį žmonių masyvą');
{
  type TaskProps = {
    sex: Person['sex'],
    income: Person['income'],
  };

  const selectTaskProps = ({ sex, income }: Person): TaskProps => ({
    sex, income,
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.log(result);
}
console.groupEnd();





////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('5. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type TaskProps = {
    name: Person['name'],
    surname: Person['surname'],
    sex: Person['sex'],
  };

  const selectTaskProps = ({ name, surname, sex }: Person): TaskProps => ({
    name, surname, sex,
  });

  const result: TaskProps[] = people.map(selectTaskProps);

  console.log(result); 
}
console.groupEnd();




//Siek tiek teko uzmesti aki i atsakymus
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('6. Atspausdinkite visus vyrus');
{
  type Male = Omit<Person, 'sex'> & {
    sex: 'male',
  };

  const isMale = ({ sex }: Person): boolean => sex === 'male';

  const males: Male[] = people.filter(isMale) as Male[];

  console.log(males);
}
console.groupEnd();





////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('7. Atspausdinkite visas moteris');
{
  type Female = Omit<Person, 'sex'> & {
    sex: 'female',
  };

  const isFemale = ({ sex }: Person): boolean => sex === 'female';

  const females: Female[] = people.filter(isFemale) as Female[];

  console.log(females);
}
console.groupEnd();




////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('8. Atspausdinkite žmonių vardus ir pavardes, kurie turi mašinas');
{
  type Car = Omit<Person, 'hasCar'> & {
    hasCar: true,
  };

  const hasCar = ({ hasCar }: Person): boolean => hasCar === true;

  const cars: Car[] = people.filter(hasCar) as Car[];

  console.log(cars);
}
console.groupEnd();




////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('9. Atspausdinkite žmones kurie yra susituokę');
{
  type Married = Omit<Person, 'married'> & {
    married: true,
  };

  const isMarried = ({ married }: Person): boolean => married === true;
  const married: Married[] = people.filter(isMarried) as Married[];

  console.log(married);
}
console.groupEnd();



// NUSIRASIAU (pasiaiskinus,kai nukopijavau- vistiek nelabai supratau..) 
//jau supratau :D paaiskinai per pamoka labai gerai :) 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('10. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
{
  type CarOwnerCountBySex = {
    [Key in Person['sex']]?: number
  };

  const groupCarOwnersBySexReducer = (result: CarOwnerCountBySex, person: Person): CarOwnerCountBySex => {
    if (!person.hasCar) return result;
    if (!result[person.sex]) result[person.sex] = 0;

    result[person.sex] = result[person.sex] as number + 1;

    return result;
  };

  const groupedPeopleBySex: CarOwnerCountBySex = people.reduce(groupCarOwnersBySexReducer, {});
  console.log(groupedPeopleBySex);
}
console.groupEnd();



// TEKO IRGI PASIZIURET I ATSAKYMUS, nors visai neblogai galvojau tik pievu prirasiau labai :D 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('11. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type IncomeToSalary = Omit<Person, 'income'> & {
    salary?: Person['income'],
  };

  const changeToSalary = ({ income, ...person }: Person): IncomeToSalary => {
    const result: IncomeToSalary = { ...person };

    if (income) result.salary = income;

    return result;
  };

  const changed: IncomeToSalary[] = people.map(changeToSalary);
  console.log(changed); 
}
console.groupEnd();



// PAZIUREJAU I ATSAKYMUS.. 
////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('12. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{
  type NewPeopleArr = Omit<Person, 'sex' | 'name' | 'surname'>;

  const createNewArr = ({
    sex, name, surname, ...res 
  }: Person): NewPeopleArr => res;

  const newArr: NewPeopleArr[] = people.map(createNewArr);

  console.log(newArr);
}
console.groupEnd();





////////////////////////////////////////////////////////////////////////////////////////////////////////////
console.groupCollapsed('13. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{
  type FullName = Omit<Person, 'name' | 'surname'> & {
    fullName: string,
  };

  const changeToFullName = ({ name, surname, ...res }: Person): FullName => ({
    ...res,
    fullName: `${name} ${surname}`,
  });

  const changed: FullName[] = people.map(changeToFullName);
  console.log(changed); 
}
console.groupEnd();
