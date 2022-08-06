"use strict";
console.group('Enums types - užduotys');
{
    console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
    {
        let biggestCitiesLt;
        (function (biggestCitiesLt) {
            biggestCitiesLt[biggestCitiesLt["Vilnius"] = 1] = "Vilnius";
            biggestCitiesLt[biggestCitiesLt["Kaunas"] = 2] = "Kaunas";
            biggestCitiesLt[biggestCitiesLt["Klaipeda"] = 3] = "Klaipeda";
            biggestCitiesLt[biggestCitiesLt["Siauliai"] = 4] = "Siauliai";
            biggestCitiesLt[biggestCitiesLt["Panevezys"] = 5] = "Panevezys";
            biggestCitiesLt[biggestCitiesLt["Alytus"] = 6] = "Alytus";
            biggestCitiesLt[biggestCitiesLt["Marijampole"] = 7] = "Marijampole";
        })(biggestCitiesLt || (biggestCitiesLt = {}));
        ;
        console.log(biggestCitiesLt);
    }
    console.groupEnd();
    console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
    {
        let mostPopulousCities;
        (function (mostPopulousCities) {
            mostPopulousCities["Tokyo"] = "37.340.000";
            mostPopulousCities["Delhi"] = "31.181.000";
            mostPopulousCities["Shanghai"] = "27.796.000";
            mostPopulousCities["S\u00E3oPaulo"] = "22.043.028";
            mostPopulousCities["MexicoCity"] = "21.919.000";
            mostPopulousCities["Cairo"] = "21.23.000";
            mostPopulousCities["Mumbai"] = "20.668.000";
        })(mostPopulousCities || (mostPopulousCities = {}));
        ;
        console.log(mostPopulousCities);
    }
    console.groupEnd();
    console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
    {
        let gdpByCountry;
        (function (gdpByCountry) {
            gdpByCountry[gdpByCountry["USA"] = 1] = "USA";
            gdpByCountry[gdpByCountry["China"] = 2] = "China";
            gdpByCountry[gdpByCountry["Japan"] = 3] = "Japan";
            gdpByCountry[gdpByCountry["Germany"] = 4] = "Germany";
            gdpByCountry[gdpByCountry["India"] = 5] = "India";
            gdpByCountry[gdpByCountry["UK"] = 6] = "UK";
            gdpByCountry[gdpByCountry["France"] = 7] = "France";
        })(gdpByCountry || (gdpByCountry = {}));
        ;
        console.log(gdpByCountry);
    }
    console.groupEnd();
}
console.groupEnd();
var WeekDays;
(function (WeekDays) {
    WeekDays[WeekDays["Monday"] = 1] = "Monday";
    WeekDays[WeekDays["Tuesday"] = 2] = "Tuesday";
    WeekDays[WeekDays["Wednesday"] = 3] = "Wednesday";
    WeekDays[WeekDays["Thursday"] = 4] = "Thursday";
    WeekDays[WeekDays["Friday"] = 5] = "Friday";
    WeekDays[WeekDays["Saturday"] = 6] = "Saturday";
    WeekDays[WeekDays["Sunday"] = 7] = "Sunday";
})(WeekDays || (WeekDays = {}));
;
var Answer;
(function (Answer) {
    Answer[Answer["No"] = 0] = "No";
    Answer[Answer["Yes"] = 1] = "Yes";
})(Answer || (Answer = {}));
;
var WeekDayNamesLT;
(function (WeekDayNamesLT) {
    WeekDayNamesLT["Monday"] = "pirmadienis";
    WeekDayNamesLT["Tuesday"] = "antradienis";
    WeekDayNamesLT["Wednesday"] = "tre\u010Diadienis";
    WeekDayNamesLT["Thursday"] = "ketvirtadienis";
    WeekDayNamesLT["Friday"] = "penktadienis";
    WeekDayNamesLT["Saturday"] = "\u0161e\u0161tadienis";
    WeekDayNamesLT["Sunday"] = "sekmadienis";
})(WeekDayNamesLT || (WeekDayNamesLT = {}));
;
//# sourceMappingURL=enums.js.map