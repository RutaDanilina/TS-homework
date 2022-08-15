/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
/* eslint-disable lines-between-class-members */
/* eslint-disable no-underscore-dangle */
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

// PASIKOPIJUOKITE VISĄ PIRMĄ UŽDUOTĮ IR PAKEISTIKTE KODĄ NAUDOJANT NAUJĄ ES6 "get" ir "set" SINTAKSĘ
// 55min
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
  class Person {
    private static readonly ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;

    private _name!: string;
    private _surname!: string;
    private _age!: number;
    private _items!: Array<{ title: string; price: number; }>;

    constructor(
      name: string,
      surname: string,
      age: number,
      items: Array<{ title: string, price: number }>,
    ) {
      this.name = name;
      this.surname = surname;
      this.age = age;
      this.items = items;
    }

    set name(val: string) {
      if (val === '') throw new Error('Vardas negali būti tuščias');
      if (val.length < 2) throw new Error('Vardas negali trumpesnis nei 2 raidės');
      if (!Person.ONLY_LETTERS_REGEX.test(val)) throw new Error('Vardas turi būti sudarytas TIK iš raidžių ir tarpų');

      this._name = val;
    }
    get Name() {
      return this._name;
    }

    set surname(val: string) {
      if (val === '') throw new Error('Pavardė negali būti tuščia');
      if (val.length < 2) throw new Error('Pavardė negali trumpesnė nei 2 raidės');
      if (!Person.ONLY_LETTERS_REGEX.test(val)) throw new Error('Pavardė turi būti sudaryta TIK iš raidžių ir tarpų');

      this._surname = val;
    }
    get surname() {
      return this._surname;
    }

    set age(val: number) {
      if (val < 0) throw new Error('Amžius negali būti neigiamas');
      if (Math.round(val) !== val) throw new Error('Amžius turi būti sveikas skaičius');

      this._age = val;
    }
    get age() {
      return this._age;
    }

    set items(val: Array<{ title: string, price: number }>) {
      val.forEach(({ title, price }, i) => {
        if (title === '') throw new Error(`Daiktų masyvo indeksu '${i}' pavadinimas negali būti tuščias`);
        if (title.length < 2) throw new Error(`Daiktų masyvo indeksu '${i}' pavadinimas negali būt trumpesnis nei 2 simboliai`);
        if (price < 0) throw new Error(`Daiktų masyvo indeksu '${i}' kaina negali būti neigiama`);
      });

      this._items = JSON.parse(JSON.stringify(val));
    }
    get items() {
      return JSON.parse(JSON.stringify(this._items));
    }



    get fullname() {
      return `${this.name} ${this.surname}`;
    }

    get totalItemValue() {
      return this.items.reduce((sum, item) => sum + item.price, 0);
    }
  }

  const person = new Person('Lazdonė', 'Silkienė', 34, [
    { title: 'rėtis', price: 2.99 },
    { title: 'taburetė', price: 17.99 },
    { title: 'Mersas', price: 16000.12 },
  ]);


  // 2.1. Sukurkite klasę Person, kuri turėtų privačias savybes: name: string, surname: string,  items: Array<{title: string, price: number}>,  age: number,
  //  Aprašykite konstruktorių kuris priimtų šiom savybėms skirtus parametrus ir nustatytų reikšmes naudojant "setter" funkcijas.
  console.log(person);

  // 2.2. Aprašykite kiekvienai savybei ES6 "get" funkcijas
  console.log(person.name);
  console.log(person.surname);
  console.log(person.items);
  console.log(person.age);

  // 2.3. Sukurkite papildomą getterį "fullname", kuris grąžintų pilną žmogaus vardą.
  console.log(person.fullname);

  // 2.4. Sukurkite papildomą getterį "totalItemValue", kuris grąžintų visų asmens daiktų kainų sumą
  console.log(person.totalItemValue);



  // 5min
  console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
    try { person.name = ''; } catch (error) { console.error((error as Error).message); }

    try { person.name = 'Š'; } catch (error) { console.error((error as Error).message); }

    try { person.name = 'Š54641'; } catch (error) { console.error((error as Error).message); }
  }
  console.groupEnd();

  // 5min
  console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
  {
    try { person.surname = ''; } catch (error) { console.error((error as Error).message); }

    try { person.surname = 'a'; } catch (error) { console.error((error as Error).message); }

    try { person.surname = '+++++'; } catch (error) { console.error((error as Error).message); }
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
  {
    try { person.age = 17.555; } catch (error) { console.error((error as Error).message); }

    try { person.age = -19; } catch (error) { console.error((error as Error).message); }
  }
  console.groupEnd();

  // 10min
  console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
  {
    try { person.items = [{ title: '', price: 15 }]; } catch (error) { console.error((error as Error).message); }

    try { person.items = [{ title: 'a', price: 15 }]; } catch (error) { console.error((error as Error).message); }

    try { person.items = [{ title: 'Daiktas', price: -15 }]; } catch (error) { console.error((error as Error).message); }
  }
  console.groupEnd();
}
console.groupEnd();
