"use strict";
class Employee {
}
class WorkPerson extends Employee {
    constructor(WorkedDaysInMonth, oneDaySalary) {
        super();
        this.calcPay = () => this.WorkedDaysInMonth * this.oneDaySalary;
        this.WorkedDaysInMonth = WorkedDaysInMonth;
        this.oneDaySalary = oneDaySalary;
    }
}
class SelfEmployedPerson extends Employee {
    constructor(hourSalary, hoursWorked) {
        super();
        this.calcPay = () => this.hourSalary * this.hoursWorked;
        this.hourSalary = hourSalary;
        this.hoursWorked = hoursWorked;
    }
}
class BuisnessLicencePerson extends Employee {
    constructor(doneJobs, oneJobSalary) {
        super();
        this.calcPay = () => this.doneJobs * this.oneJobSalary;
        this.doneJobs = doneJobs;
        this.oneJobSalary = oneJobSalary;
    }
}
const workPersons = [
    new WorkPerson(20, 100),
    new WorkPerson(27, 140),
];
const selfEmployedPersons = [
    new SelfEmployedPerson(25, 260),
    new SelfEmployedPerson(28, 210),
];
const buisnessLicencePersons = [
    new BuisnessLicencePerson(4, 300),
    new BuisnessLicencePerson(6, 230),
];
workPersons.forEach((p) => console.log(`Working persons earns ${p.oneDaySalary} Euro per day. So if u worked ${p.WorkedDaysInMonth} days - you erarned ${p.calcPay()} Euro`));
selfEmployedPersons.forEach((p) => console.log(`Self employed persons earns ${p.hourSalary} Euro per hour. So if u worked ${p.hoursWorked} hours - you erarned ${p.calcPay()} Euro`));
buisnessLicencePersons.forEach((p) => console.log(`Buisness Licence persons earns ${p.oneJobSalary} Euro per project. So if u finished ${p.doneJobs} projects - you erarned ${p.calcPay()} Euro`));
//# sourceMappingURL=main.js.map