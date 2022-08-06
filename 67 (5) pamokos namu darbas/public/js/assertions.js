"use strict";
console.group('Assertions - užduotys');
{
    const mainWrapper = document.querySelector('.main-wrapper');
    const divsWrapper = document.querySelector('.divs-wrapper');
    document.body.append(mainWrapper, divsWrapper);
    const btn = document.createElement('button');
    btn.textContent = 'Submit';
    const h2Element = document.createElement('h2');
    mainWrapper.append(btn);
    let count = 0;
    btn.addEventListener('click', () => {
        mainWrapper.append(h2Element);
        count++;
        if (count === 1 || count === 21 || count === 31 || count === 41) {
            h2Element.textContent = ` ❤ PASPAUSTA ${count} KARTĄ ! ❤`;
        }
        else if (count <= 10 || count > 21) {
            h2Element.textContent = ` ❤ PASPAUSTA ${count} KARTUS ! ❤`;
        }
        else {
            h2Element.textContent = ` ❤ PASPAUSTA ${count} KARTŲ ! ❤`;
        }
        const newDivElement = document.createElement('div');
        newDivElement.classList.add('new-div-element');
        divsWrapper.appendChild(newDivElement);
    });
}
console.groupEnd();
//# sourceMappingURL=assertions.js.map