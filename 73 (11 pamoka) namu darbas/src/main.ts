/* eslint-disable no-console */
/* eslint-disable max-classes-per-file */
/* eslint-disable @typescript-eslint/lines-between-class-members */
/* eslint-disable eol-last */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable max-len */
// TypeScript - OOP abstrakcija ir polimorfizmas
// Šios praktikos tikslas įsisavinti abstrakcijos ir polimorfizmo žinias, naudojat abstrakčias klases.

// Turime 3 darbuotojų tipus:

// self-employed-person - darbuotojas dirbantis pagal individualią veiklą, kuris gauna pinigus už išdirbtas valandas ir valandinį užmokestį;
// work-person - žmogus kuri gauna atlygį vieną kart per mėnesį už kiekvieną darbo dieną
// business-license-person - žmogus kuris gauna atlygį už atliktus darbus
// Klasių hierarchijos schema:


// Klasių schemos

// abstract Person
// savybės:
// protected id: string;
// protected name: string;
// protected surname: string;

// metodai:
// public getPersonInfo = (): string
// public abstract toString(): string;
// abstract Employee extends Person

// metodai:
// public abstract calcPay(): number;


// Job
// savybės:
// private id: string;
// private finished: boolean = false;
// private payed: boolean = false;
// private dateFinished?: Date;

// metodai:
// public completeJob = (): void
// public setJobPayed = (): void
// public getPay = (): number
// public isFinished = (): boolean
// public isPayed = (): boolean
// public toString = (): string
// BuisnessLicencePerson extends Employee

// savybės:
// private jobs: Job[];

// metodai:
// public calcPay = (): number
// public override toString(): string
// SelfEmployedPerson extends Employee

// savybės:
// private hourPay: number;
// private hoursWorked: number;

// metodai:
// public calcPay = (): number
// public override toString(): string
// WorkPerson extends Employee

// savybės:
// private hourPay: number;
// private fullTimeEquivalent: number;

// metodai:
// public calcPay = (): number
// public override toString(): string



// Užduotis
// Jūsų praktikos darbo esmė, sukurti abstrakčias klases, kurios įpareigotų vaikes klases implementuoti abstrakčius metodus. Kiekviena konkreti klasė (SelfEmployedPerson, WorkPerson ir BuisnessLicencePerson) turi savaip apskaičiuoti užmokestį:
// Atspausdinkite visų darbuotojų atlyginimus anudodami implementuotą metodą calcPay()

abstract class Employee {
  calcPay():number;
}

// WorkPerson - pagal darbo dienas mėnesyje
class WorkPerson extends Employee {
  oneDaySalary!:number;
  WorkedDaysInMonth!: number;

  constructor(WorkedDaysInMonth: number, oneDaySalary:number) {
    super();
    this.WorkedDaysInMonth = WorkedDaysInMonth;
    this.oneDaySalary = oneDaySalary;
  }

  override calcPay = (): number => this.WorkedDaysInMonth * this.oneDaySalary;
}

// SelfEmployedPerson - pagal išdirbtas valandas
class SelfEmployedPerson extends Employee {
  hourSalary!: number;
  hoursWorked!: number;

  constructor(hourSalary: number, hoursWorked: number) {
    super();
    this.hourSalary = hourSalary;
    this.hoursWorked = hoursWorked;
  }

  override calcPay = (): number => this.hourSalary * this.hoursWorked;
}

// BuisnessLicencePerson - pagal atliktus darbus (Job)
class BuisnessLicencePerson extends Employee {
  doneJobs!: number;
  oneJobSalary!: number;

  constructor(doneJobs: number, oneJobSalary:number) {
    super();
    this.doneJobs = doneJobs;
    this.oneJobSalary = oneJobSalary;
  }

  override calcPay = (): number => this.doneJobs * this.oneJobSalary;
}

// Pavaizduokite teisingą klasių sudarymo ir algoritmų aprašymo veikimą:

const workPersons: WorkPerson[] = [
  new WorkPerson(20, 100),
  new WorkPerson(27, 140),
];

const selfEmployedPersons: SelfEmployedPerson[] = [
  new SelfEmployedPerson(25, 260),
  new SelfEmployedPerson(28, 210),
];

const buisnessLicencePersons: BuisnessLicencePerson[] = [
  new BuisnessLicencePerson(4, 300),
  new BuisnessLicencePerson(6, 230),
];

// Atspausdinkite visus darbuotojus naudodami implementuota metodą toString()

workPersons.forEach((p) => console.log(`Working persons earns ${p.oneDaySalary} Euro per day. So if u worked ${p.WorkedDaysInMonth} days - you erarned ${p.calcPay()} Euro`));

selfEmployedPersons.forEach((p) => console.log(`Self employed persons earns ${p.hourSalary} Euro per hour. So if u worked ${p.hoursWorked} hours - you erarned ${p.calcPay()} Euro`));

buisnessLicencePersons.forEach((p) => console.log(`Buisness Licence persons earns ${p.oneJobSalary} Euro per project. So if u finished ${p.doneJobs} projects - you erarned ${p.calcPay()} Euro`));




