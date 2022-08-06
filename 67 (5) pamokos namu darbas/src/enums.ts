
// Alikite užduotis, ir atspausdinkite savo sprendimo pavyzdžius užduoties blokuose
console.group('Enums types - užduotys');
{


  console.group("1. Sukurkite 5 didžiausių Lietuvos miestų išvardinimą.");
  {
    enum biggestCitiesLt {
      Vilnius = 1,
      Kaunas,
      Klaipeda,
      Siauliai,
      Panevezys,
      Alytus,
      Marijampole,
    };
    console.log(biggestCitiesLt);
  }
  console.groupEnd();



  console.group('2. Sukurkite 5 šalių su didžiausiu gyventojų skaičiumi skaitinį išvardinimą.');
  {
    enum mostPopulousCities {
      Tokyo = '37.340.000',
      Delhi = '31.181.000',
      Shanghai = '27.796.000',
      SãoPaulo = '22.043.028',
      MexicoCity = '21.919.000',
      Cairo = '21.23.000',
      Mumbai = '20.668.000',
    };
    console.log(mostPopulousCities);  
  }
  console.groupEnd();




  console.group('3. Sukurkite 5 šalių su didžiausiu BVP skaitinį išvardinimą pradedant "1".');
  {
    enum gdpByCountry {
      USA = 1,
      China,
      Japan,
      Germany,
      India,
      UK,
      France,
    };
    console.log(gdpByCountry);    
  }
  console.groupEnd();

}
console.groupEnd();




// PAVYZDZIAI 
/*
  Enum(išvardinimas) - tai konstantų rinkinys.
  Enum(išvardinimai) yra naudojami įvardinti tipams ar nustatymams. 
  Jų reikšmės dažniau naudojamos tipo patikrinimams, nei atvazdavimui.
*/

// Skaitiniai išvardinimai (numeric enums)
// Nurodžius pirmajai konstantai reikšmę, sekančios susinumeruoja pradedant nurodyta reikšme
enum WeekDays {
  Monday = 1,
  Tuesday, // 2
  Wednesday, // 3
  Thursday, // 4
  Friday, // 5
  Saturday, // 6
  Sunday, // 7
};

// Jei nenurodote pirmosios reikšmės, numeruojama nuo 0
enum Answer {
  No, // 0
  Yes, // 1
};

// Jei išvardinamų konstantų tipas yra ne skaičius, privalote įvardinti kiekvieną narį
enum WeekDayNamesLT {
  Monday = 'pirmadienis',
  Tuesday = 'antradienis',
  Wednesday = 'trečiadienis',
  Thursday = 'ketvirtadienis',
  Friday = 'penktadienis',
  Saturday = 'šeštadienis',
  Sunday = 'sekmadienis',
};

