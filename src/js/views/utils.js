//creating new elements
export function createNewElement(el, newClass, parent, ...arg) {
  const newElement = document.createElement(el);
  newElement.className = newClass;
  parent.appendChild(newElement);
  if (arg.length > 0) {
    newElement.textContent = arg[0];
    if (arg.length > 1) {
      newElement.type = arg[1];
    }
  }
  return newElement;
}

//looping
export function loopForEach(arr, element, crEl, newClass) {
  const l = arr.length;

  arr.forEach((el, key) => {
    const count3 = l * 3200 * (key * 0.2);
    const word = el.split('');
    const wL = word.length;
    setTimeout(() => {
      word.forEach((elem, k) => {
        const count1 = 200 * k;
        setTimeout(() => {
          const span = createNewElement(crEl, el, element);
          span.classList.add(newClass);
          span.textContent += elem;
        }, count1);
      });
      const count2 = wL * 250;

      setTimeout(() => {
        const spans = document.querySelectorAll(`.${el}`);

        spans.forEach((span, k) => {
          const count4 = 11000 * k * wL * l * wL;
          setTimeout(() => {
            span.classList.contains(el) == true && k != 0
              ? span.classList.add('disappear')
              : span.classList.add('v');
            setTimeout(() => {
              const disappearSpans = document.querySelectorAll('.disappear');
              disappearSpans.forEach((el) => el.remove());
            }, count4);
          }, 110 * k);
        });
      }, count2);
    }, count3);
  });
}
