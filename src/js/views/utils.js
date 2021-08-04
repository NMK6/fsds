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
export function createSvg(newClass, parent, newAlt, newLink) {
  const svgI = document.createElement('img');
  svgI.alt = newAlt;
  svgI.href = newLink;
  svgI.className = newClass;
  parent.appendChild(svgI);
}
//looping
export function loopForEach(arr, element, crEl, newClass) {
  const l = arr.length;

  arr.forEach((el, key) => {
    const newWordAppearAfter = l * 1000 * key;
    const word = el.split('');
    const wL = word.length;
    setTimeout(() => {
      word.forEach((elem, k) => {
        const newLetterAppearAfter = 200 * k;
        setTimeout(() => {
          const span = createNewElement(crEl, el, element);
          span.classList.add(newClass);
          span.textContent += elem;
        }, newLetterAppearAfter);
      });
      const addFadeClassAfter = wL * 250;

      setTimeout(() => {
        const spans = document.querySelectorAll(`.${el}`);

        spans.forEach((span, k) => {
          const newLetterDisappearAfter = 110 * k;
          const removingLettersFromDom = 25 * k * k * wL * l * wL;
          setTimeout(() => {
            span.classList.contains(el) == true && k != 0
              ? span.classList.add('disappear')
              : span.classList.add('v');
            setTimeout(() => {
              const disappearSpans = document.querySelectorAll('.disappear');
              disappearSpans.forEach((el) => el.remove());
            }, removingLettersFromDom);
          }, newLetterDisappearAfter);
        });
      }, addFadeClassAfter);
    }, newWordAppearAfter);
  });
}
