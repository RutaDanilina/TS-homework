"use strict";
console.group('2. Naudojant "get" ir "set" ES6 funkcijas:');
{
    class Person {
        static ONLY_LETTERS_REGEX = /^[a-zA-ZąčęėįšųūžĄČĘĖĮŠŲŪŽ ]+$/;
        _name;
        _surname;
        _age;
        _items;
        constructor(name, surname, age, items) {
            this.name = name;
            this.surname = surname;
            this.age = age;
            this.items = items;
        }
        set name(val) {
            if (val === '')
                throw new Error('Vardas negali būti tuščias');
            if (val.length < 2)
                throw new Error('Vardas negali trumpesnis nei 2 raidės');
            if (!Person.ONLY_LETTERS_REGEX.test(val))
                throw new Error('Vardas turi būti sudarytas TIK iš raidžių ir tarpų');
            this._name = val;
        }
        get Name() {
            return this._name;
        }
        set surname(val) {
            if (val === '')
                throw new Error('Pavardė negali būti tuščia');
            if (val.length < 2)
                throw new Error('Pavardė negali trumpesnė nei 2 raidės');
            if (!Person.ONLY_LETTERS_REGEX.test(val))
                throw new Error('Pavardė turi būti sudaryta TIK iš raidžių ir tarpų');
            this._surname = val;
        }
        get surname() {
            return this._surname;
        }
        set age(val) {
            if (val < 0)
                throw new Error('Amžius negali būti neigiamas');
            if (Math.round(val) !== val)
                throw new Error('Amžius turi būti sveikas skaičius');
            this._age = val;
        }
        get age() {
            return this._age;
        }
        set items(val) {
            val.forEach(({ title, price }, i) => {
                if (title === '')
                    throw new Error(`Daiktų masyvo indeksu '${i}' pavadinimas negali būti tuščias`);
                if (title.length < 2)
                    throw new Error(`Daiktų masyvo indeksu '${i}' pavadinimas negali būt trumpesnis nei 2 simboliai`);
                if (price < 0)
                    throw new Error(`Daiktų masyvo indeksu '${i}' kaina negali būti neigiama`);
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
    console.log(person);
    console.log(person.name);
    console.log(person.surname);
    console.log(person.items);
    console.log(person.age);
    console.log(person.fullname);
    console.log(person.totalItemValue);
    console.groupCollapsed('2.5. name "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            person.name = '';
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.name = 'Š';
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.name = 'Š54641';
        }
        catch (error) {
            console.error(error.message);
        }
    }
    console.groupEnd();
    console.groupCollapsed('2.6. surname "setter"yje aprašykite 3 savo sugalvotas validacijas');
    {
        try {
            person.surname = '';
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.surname = 'a';
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.surname = '+++++';
        }
        catch (error) {
            console.error(error.message);
        }
    }
    console.groupEnd();
    console.groupCollapsed('2.7. age "setter"yje aprašykite 2 savo sugalvotas validacijas');
    {
        try {
            person.age = 17.555;
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.age = -19;
        }
        catch (error) {
            console.error(error.message);
        }
    }
    console.groupEnd();
    console.groupCollapsed('2.8. items "setter"yje aprašykite 3 savo sugalvotas validacijas KIEKVIENO priskiriamo masyvo "daiktams"');
    {
        try {
            person.items = [{ title: '', price: 15 }];
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.items = [{ title: 'a', price: 15 }];
        }
        catch (error) {
            console.error(error.message);
        }
        try {
            person.items = [{ title: 'Daiktas', price: -15 }];
        }
        catch (error) {
            console.error(error.message);
        }
    }
    console.groupEnd();
}
console.groupEnd();
//# sourceMappingURL=main1.js.map