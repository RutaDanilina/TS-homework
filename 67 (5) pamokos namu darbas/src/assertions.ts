
console.group('Assertions - užduotys');
{

  const mainWrapper: HTMLDivElement= document.querySelector('.main-wrapper') as HTMLDivElement;
  const divsWrapper: HTMLDivElement= document.querySelector('.divs-wrapper') as HTMLDivElement;

  document.body.append(mainWrapper, divsWrapper);

  const btn: HTMLButtonElement = document.createElement('button') as HTMLButtonElement;
  btn.textContent= 'Submit';

  const h2Element:HTMLHeadingElement = document.createElement('h2') as HTMLHeadingElement;

  mainWrapper.append(btn);

  let count: number = 0;
  

    //1. Sukurkite HTML mygtuką ir uždėkite jam įvykio klausiklį, jog paspaudus, būt spausdinamas tekstas "paspausta!
    btn.addEventListener('click', () => {
      mainWrapper.append(h2Element);

      //'3. Sukurkite <p> elementą kuriame spausdinsite skaičių - kiek kvadratėlių yra [2.] konteineryje'
      count++;
      if (count === 1 || count === 21 || count === 31 || count === 41){
        h2Element.textContent= ` ❤ PASPAUSTA ${count} KARTĄ ! ❤`
      } else if( count <= 10 || count > 21 ){
        h2Element.textContent= ` ❤ PASPAUSTA ${count} KARTUS ! ❤`;
      } else {
        h2Element.textContent= ` ❤ PASPAUSTA ${count} KARTŲ ! ❤`;
      }

      //2. Sukurkite <div> elementą ir papildikyte jo turinį mažu kvadaratėliu kiekvieną kart, kuomet paspaudžiamas [1.] mygtukas
      const newDivElement: HTMLDivElement = document.createElement('div') as HTMLDivElement;
      newDivElement.classList.add('new-div-element');
      divsWrapper.appendChild(newDivElement);

    })

}
console.groupEnd();