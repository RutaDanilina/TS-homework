"use strict";
console.group('1. Sukurkite klasę tėvinę Person vaikinėms klasėms ir išsaugokite joje bendrą funkcionalumą.');
{
    class Person {
        constructor(name, surname) {
            Person.count++;
            this.id = `ID_${Person.count}`;
            this.name = name;
            this.surname = surname;
        }
        set name(value) {
            this.namePrivate = value;
        }
        set surname(value) {
            this.surnamePrivate = value;
        }
        get fullname() {
            return `${this.namePrivate} ${this.surnamePrivate}`;
        }
    }
    Person.count = 0;
    class Student extends Person {
        constructor(name, surname) {
            super(name, surname);
            this.marks = [];
        }
        addMark(mark) {
            if (mark < 1) {
                throw new Error('Pazymys yra per mazas');
            }
            if (mark > 10) {
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
        constructor(name, surname, salary) {
            super(name, surname);
            this.salary = salary;
        }
        set salary(value) {
            if (value < Lecturer.MIN_SALARY || value > Lecturer.MAX_SALARY) {
                throw new Error(`Mokytoju atlyginimas turetu buti ${Lecturer.MIN_SALARY} - ${Lecturer.MAX_SALARY} remuose!`);
            }
            this.salaryPrivate = value.toFixed(2);
        }
        get salary() {
            return this.salaryPrivate;
        }
        get salaryNetto() {
            const gmp = this.salaryPrivate * Lecturer.GPM_PERC;
            const psd = this.salaryPrivate * Lecturer.PSD_PERC;
            const vsd = this.salaryPrivate * Lecturer.VSD_PERC;
            return Math.round(this.salaryPrivate - gmp - psd - vsd);
        }
    }
    Lecturer.MIN_SALARY = 1800;
    Lecturer.MAX_SALARY = 4400;
    Lecturer.GPM_PERC = 0.20;
    Lecturer.PSD_PERC = 0.0698;
    Lecturer.VSD_PERC = 0.1252;
    const people = [
        new Person('Ruta', 'Danilina'),
        new Person('Andrius', 'Danilinas'),
    ];
    const students = [
        new Student('Ausra', 'Astromskiene'),
        new Student('Vytautas', 'Astromskas'),
    ];
    const lecturers = [
        new Lecturer('Balys', 'Nisterenko', 3600.5685),
        new Lecturer('Orinta', 'Nisterenko', 3800.47596),
    ];
    const allPeople = [];
    allPeople.push(...people, ...students, ...lecturers);
    console.groupCollapsed('1.1. Sukurkite klasę Person, kurios objektams būtų galima priskirti vardą ir pavardę. Šios klasės objektams turi susigeneruoti id - unikalus raktas. Taip pat sukurkite get"erį fullname, kuris grąžina vardą ir pavardę atskirtus tarpu. Atspausdinkite kelis šios klasės objektus, ir pademonstruokite get"erio veikimą.');
    {
        console.log(people);
        people.forEach((p) => console.log(p.fullname));
    }
    console.groupEnd();
    console.group('1.2. Sukurkite klasę Student, kuri paveldėtų klasę Person. Be Person klasės paveldimų savybių, klasę Student turi turėti savybę "marks", kurioje bus saugomi studento pažymiai. Konstruktoriaus vykdymo metu, "marks" reikšmei turi būti sukuriamas tuščias masyvas. Student klasėje sukurkite metodą "addMark" kuris leistų įdėti naują pažymį - sveiką skaičių nuo 1 iki 10. Taip pat sukurkite get"erį "avg", kuris skaičiuotų studento vidurkį pagal esamus pažymius. Sukurkite bent 2 Student klasės objektus ir atspausdinkite visus get"erius ir pavaizduokite metodų funkcionalumą konsolėje.');
    {
        students.forEach((s) => console.log(s));
        students.forEach(({ fullname, marksAvg }) => console.log({ fullname, marksAvg }));
        const marks1 = [5, 9, 8, 6];
        marks1.join(', ');
        marks1.forEach((mark) => console.log(students[0].addMark(mark)));
        const marks2 = [3, 7, 10, 5];
        marks2.join(', ');
        marks2.forEach((mark) => console.log(students[1].addMark(mark)));
        students.forEach(({ fullname, marksAvg }) => console.log({ fullname, marksAvg }));
    }
    console.groupEnd();
    console.group('1.3. Sukurkite klasę Lecturer, kuri paveldėtų klasę Person. Papildomai klasei Lecturer sukurkite savybę "salary", kuri privalo būti priskirta objekto sukūrimo metu. Inkapsuliuokite savybę "salary" taip, kad ji galėtų būti skaičius nuo 1800 iki 4400 su ne daugiau nei 2 skaičiais po kablelio. Taip pat sukurkite get"erį "salaryNeto", kuris atspausdintų suapvalintą atlyginimą iki sveikų skaičių atskaičiavus mokesčius: GPM 20%, PSD 6.98%, VSD 12.52%. Sukurkite bent 2 Lecturer klasės objektus ir atspausdinkite visus get"erius konsolėje.');
    {
        lecturers.forEach((l) => console.log(l));
        lecturers.forEach(({ fullname, salary, salaryNetto }) => console.log(fullname, salary, salaryNetto));
    }
    console.groupEnd();
    console.group('1.4. Sukurkite viešai [1.] užduočiai pasiekiamą masyvą "allPeople". [1.1], [1.2] ir [1.3] užduotyse sukurtus objektus įdėkite į šį masyvą. Atspausdinkite visų žmonių elementų "fullname"');
    {
        allPeople.forEach(({ fullname }) => console.log(fullname));
    }
}
console.groupEnd();
//# sourceMappingURL=main.js.map