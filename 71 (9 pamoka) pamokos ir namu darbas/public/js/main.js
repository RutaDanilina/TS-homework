"use strict";
const capitalize = (word) => {
    const words = word.trim().split(' ');
    const capitalizedWords = words.map((w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
    return capitalizedWords.join(' ');
};
var DistanceUnits;
(function (DistanceUnits) {
    DistanceUnits["cm"] = "cm";
    DistanceUnits["m"] = "m";
    DistanceUnits["in"] = "in";
})(DistanceUnits || (DistanceUnits = {}));
var WeightUnits;
(function (WeightUnits) {
    WeightUnits["kg"] = "kg";
    WeightUnits["lbs"] = "lbs";
})(WeightUnits || (WeightUnits = {}));
class PersonClass {
    constructor(name, surname, age, height, unitsHeight, weight, unitsWeight) {
        this.setName(name);
        this.setSurname(surname);
        this.setAge(age);
        this.setHeight(height, unitsHeight);
        this.setWeight(weight, unitsWeight);
    }
    setName(name) {
        if (name === '') {
            throw new Error('Prasome uzpildyti name laukeli');
        }
        if (name.length < 2) {
            throw new Error('Jusu vardas yra per trumpas');
        }
        this.name = capitalize(name);
    }
    setSurname(surname) {
        if (surname === '') {
            throw new Error('Prasome uzpildyti pavardes laukeli');
        }
        if (surname.length < 3) {
            throw new Error('Jusu pavarde yra per trumpa');
        }
        this.surname = capitalize(surname);
    }
    setAge(age) {
        if (age < 1) {
            throw new Error('Amzius yra per mazas');
        }
        if (age > 150) {
            throw new Error('Amzius yra per didelis');
        }
        if (age % 1 !== 0) {
            throw new Error('Amzius turi buti sveikas skaicius');
        }
        this.age = age;
    }
    setHeight(height, unitsHeight = DistanceUnits.cm) {
        switch (unitsHeight) {
            case DistanceUnits.cm:
                this.height = height;
                break;
            case DistanceUnits.m:
                this.height = height * 100;
                break;
            case DistanceUnits.in:
                this.height = height * 2.54;
                break;
            default: break;
        }
    }
    setWeight(weight, unitsWeight = WeightUnits.kg) {
        switch (unitsWeight) {
            case WeightUnits.kg:
                this.weight = weight;
                break;
            case WeightUnits.lbs:
                this.weight = weight * 2.20;
                break;
            default: break;
        }
    }
    getFullname() {
        return `${this.name} ${this.surname}`;
    }
    getAge() {
        return this.age;
    }
    getHeight() {
        switch (PersonClass.heightUnits) {
            case DistanceUnits.cm: return Math.round(this.height);
            case DistanceUnits.m: return Math.round(this.height / 100);
            case DistanceUnits.in: return Math.round(this.height / 2.54);
            default: return this.height;
        }
    }
    getWeight() {
        switch (PersonClass.weightUnits) {
            case WeightUnits.kg: return Math.round(this.weight);
            case WeightUnits.lbs: return Math.round(this.weight / 2.20);
            default: return Math.round(this.weight);
        }
    }
}
PersonClass.heightUnits = DistanceUnits.cm;
PersonClass.weightUnits = WeightUnits.kg;
const persons = [
    new PersonClass('RUta', 'Danilina', 32, 181, DistanceUnits.cm, 67, WeightUnits.kg),
    new PersonClass('AndRius', 'Danilinas', 34, 180, DistanceUnits.cm, 75, WeightUnits.kg),
    new PersonClass('Ausra', 'AstromsKiene', 30, 1.95, DistanceUnits.m, 70, WeightUnits.kg),
    new PersonClass('VyTautas', 'Astromskas', 30, 80, DistanceUnits.in, 50, WeightUnits.lbs),
];
console.groupCollapsed('1. Sukurkite Person klasei savybes "name" ir "surname". Kiekvienai i?? j?? sukurkite setterius, ir bendr?? getter?? fullname');
{
    const fullNames = persons.map((p) => p.getFullname());
    console.log(fullNames);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite Person klasei savyb?? "age". Inkapsuliuokite ??i?? savyb?? taip, jog reik??m?? gal??t?? b??ti tik sveiki skai??iai nuo 1 iki 150');
{
    const ages = persons.map((p) => p.getAge());
    console.log(ages);
}
console.groupEnd();
console.groupCollapsed('3. Sukurkite Person klasei savyb?? "height" kurios vert?? b??t?? saugoma centimetrais. Sukurkite ??iai savybei setter??, kuris pirmu parametru priimt?? reik??m??, o antru parametru priimt?? matavimo vienetus: "cm" | "m" | "in". Jeigu antras parametras n??ra perduotas, numatytas(default) matavimo vienetas turi b??ti cm. Getteris turi gr????inti reik??m?? centimetrais.');
{
    const heights = persons.map((p) => p.getHeight());
    console.log(heights);
}
console.groupEnd();
console.groupCollapsed('4. Sukurkite Person klasei statin?? savyb?? "heightUnits". Jos tipas turi b??ti i??vardinimas(enum), kurio pasirinkimai yra: "CM", "M", "IN". Numatytoji(default) "heightUnits" reik??m?? turi b??ti centimetrai');
{
    console.log(PersonClass.heightUnits);
}
console.groupEnd();
console.groupCollapsed('5. "height" setterio antram parametrui pakeiskite s??jungos tip?? ?? [4.] u??duotyje sukurt?? i??vardinim??(enum). Priderinkite pavyzd??ius ir metod??.');
{
    console.log(DistanceUnits);
}
console.groupEnd();
console.groupCollapsed('6. "height" geteriui sukurkite logik??, jog jis gr????int?? matavimo vienetus, pagal statin??s savyb??s "heightUnits" reik??m??.');
{
    PersonClass.heightUnits = DistanceUnits.cm;
    persons.map((p) => console.log(p.getHeight()));
    PersonClass.heightUnits = DistanceUnits.in;
    persons.map((p) => console.log(p.getHeight()));
    PersonClass.heightUnits = DistanceUnits.m;
    persons.map((p) => console.log(p.getHeight()));
}
console.groupEnd();
console.groupCollapsed('7. Analogi??kai pagal [4.]-[6.] punktus sukurkite savyb?? weight su statiniu i??vardinimu "weightUnits", kurio pasirinkimai turi b??ti: "KG", "LBS"');
{
    PersonClass.weightUnits = WeightUnits.kg;
    persons.map((p) => console.log(p.getWeight()));
    PersonClass.weightUnits = WeightUnits.lbs;
    persons.map((p) => console.log(p.getWeight()));
}
console.groupEnd();
console.groupCollapsed('8. Sukurkite klasei Person metod?? "toString". Kuris paverst?? ??mogaus savybes gra??iu formatu: vardas ir pavard?? pirmoje eilut??je, o "height" ir "weight" savyb??s atskirose eilut??se, atitrauktos nuo kairio kra??to per "tab" simbol??, ir su matavimo vienetais(kurie i??saugoti) statin??se Person klas??s savyb??se');
{
    PersonClass.heightUnits = DistanceUnits.cm;
    PersonClass.weightUnits = WeightUnits.kg;
    persons.map((p) => console.log(`${p.getFullname()}:
    ${p.getHeight()}cm. height and ${p.getWeight()}kg. weight
    `));
}
console.groupEnd();
//# sourceMappingURL=main.js.map