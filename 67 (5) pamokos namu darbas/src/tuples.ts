// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  //1.
  type PersonNameAndAgeTuple = [string, number];

  //2.
  type DogOwnerTuple = [string, string, number];
  type DogTuple = [string, number, string];
  type OwnerAndDogTuple= [DogOwnerTuple, DogTuple];

  //3.
  // NEATLIKAU

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    const newPerson1:PersonNameAndAgeTuple= ['Ruta', 32];
    console.log(newPerson1);
  }
  console.groupEnd();





  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {

    const ownerAndDog: OwnerAndDogTuple= [
      ['Ruta', 'Danilina', 32],
      ['Kaya', 7, 'Schweizer Schäferhundin']
    ]
    console.log(ownerAndDog);

  }
  console.groupEnd();




  // SITO NIEKAIP NESUGALVOJAU.... ir nemokejau isgooglinti irgi... 
  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
  }
  console.groupEnd();

}
console.groupEnd();



// TEORIJA 
/*
  Tuple(rinkinys) - tai masyvas su greižtai nurodytais masyvo elemento tipais ir jų seka.
  Šis tipas neleidžia turėti kitokį kiekį, ar kitokio tipo elementų
*/
type FullnameTuple = [string, string];
type UseNumericStateTuple = [number, (num?: number) => void];

const person1: FullnameTuple = ["Koridas", "Atmazas"];
const person2: FullnameTuple = ["Paklodijus", "Pagalvė"];
const person3: FullnameTuple = ["Višta", "Maumedienė"];

let currentAge: number = 18;
let currentHeight: number = 180;
const age: UseNumericStateTuple = [currentAge, () => currentAge += 1];
const height: UseNumericStateTuple = [currentAge, (h) => {
  if (h) currentHeight = h;
}];

