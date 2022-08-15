/* eslint-disable max-len */
/* eslint-disable space-in-parens */
/* eslint-disable no-plusplus */
/* eslint-disable no-empty */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:
  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.
  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?
  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.
    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.
  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/

console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
  class Person {
    private static count: number = 0;
    private namePrivate!: string;
    private surnamePrivate!: string;

    public readonly id: string;

    constructor(name: string, surname:string ) {
      Person.count++;
      this.id = `ID_${Person.count}`;
      this.name = name;
      this.surname = surname;
    }

    set name(value: string) {
      this.namePrivate = value;
    }
    set surname(value: string) {
      this.surnamePrivate = value;
    }

    get fullname():string {
      return `${this.namePrivate} ${this.surnamePrivate}`;
    }
  }

  class Student extends Person {
    private marks: number[];

    constructor(name: string, surname: string) {
      super(name, surname);
      this.marks = [];
    }

    public addMark(mark: number) {
      if (mark < 1 ) {
        throw new Error('Pazymys yra per mazas');
      }
      if (mark > 10 ) {
        throw new Error('Pazymys yra per didelis');
      }
      if (mark % 1 !== 0) {
        throw new Error('Pazymys turi buti sveikas skaicius');
      }
      this.marks.push(mark);
    }

    get marksAvg() {
      return this.marks.length > 0
        ? this.marks.reduce((prev, curr) => prev + curr) / this.marks.length
        : 0;
    }
  }

  class Lecturer extends Person {
    private static MIN_SALARY = 1800;
    private static MAX_SALARY = 4400;
    private static GPM_PERC = 0.20;
    private static PSD_PERC = 0.0698;
    private static VSD_PERC = 0.1252;

    private salaryPrivate!: number;

    constructor(name:string, surname:string, salary: number) {
      super(name, surname);
      this.salary = salary;
    }

    set salary(value: number) {
      if (value < Lecturer.MIN_SALARY || value > Lecturer.MAX_SALARY) {
        throw new Error(`Mokytoju atlyginimas turetu buti ${Lecturer.MIN_SALARY} - ${Lecturer.MAX_SALARY} remuose!`);
      }

      this.salaryPrivate = value.toFixed(2);
    }

    get salary() {
      return this.salaryPrivate;
    }

    // apskaiciuoti kiek pinigu lieka nuskaiciavus mokescius
    get salaryNetto() {
      const gmp = this.salaryPrivate * Lecturer.GPM_PERC;
      const psd = this.salaryPrivate * Lecturer.PSD_PERC;
      const vsd = this.salaryPrivate * Lecturer.VSD_PERC;

      return Math.round(this.salaryPrivate - gmp - psd - vsd);
    }
  }

  const people: Person[] = [
    new Person('Ruta', 'Danilina'),
    new Person('Andrius', 'Danilinas'),
  ];

  const students: Student[] = [
    new Student('Ausra', 'Astromskiene'),
    new Student('Vytautas', 'Astromskas'),
  ];

  const lecturers: Lecturer[] = [
    new Lecturer('Balys', 'Nisterenko', 3600.5685),
    new Lecturer('Orinta', 'Nisterenko', 3800.47596),
  ];

  const allPeople: Person[] = [];
  allPeople.push(...people, ...students, ...lecturers);

  // 20min
  console.groupCollapsed('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
  {
    console.log(people);
    people.forEach((p) => console.log(p.fullname));
  }
  console.groupEnd();

  // 40min
  console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
  {
    // paziureti studentus
    students.forEach((s) => console.log(s));

    // patikrinti vidurkius dar nepridejus pazymiu
    students.forEach(({ fullname, marksAvg }) => console.log({ fullname, marksAvg }));

    // prideti pazymius
    const marks1 = [5, 9, 8, 6];
    marks1.join(', ');
    marks1.forEach((mark) => console.log(students[0].addMark(mark)));

    const marks2 = [3, 7, 10, 5];
    marks2.join(', ');
    marks2.forEach((mark) => console.log(students[1].addMark(mark)));

    // patikrinti vidurkius jau pride3jus pazymius
    students.forEach(({ fullname, marksAvg }) => console.log({ fullname, marksAvg }));
  }
  console.groupEnd();

  // 50min
  console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
  {
    // Visi destytojai
    lecturers.forEach((l) => console.log(l));

    // Dėstytojų atlyginimai
    lecturers.forEach(({ fullname, salary, salaryNetto }) => console.log(fullname, salary, salaryNetto));
  }
  console.groupEnd();

  // 10min
  console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
  {
    allPeople.forEach(({ fullname }) => console.log(fullname));
  }
}
console.groupEnd();
