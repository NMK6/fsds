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
export function createLink(parent, newLinkClass, newHref) {
  const newLink = document.createElement('a');
  newLink.href = newHref;
  newLink.className = newLinkClass;
  parent.appendChild(newLink);
  return newLink;
}
export function createSvg(
  newClass,
  parent,
  newAlt,
  newLink,
  iWidth,
  newLinkClass,
  newHref
) {
  const link = createLink(parent, newLinkClass, newHref);
  const svgI = document.createElement('img');
  svgI.alt = newAlt;
  svgI.src = newLink;
  svgI.className = newClass;
  svgI.width = iWidth;
  link.appendChild(svgI);
}
export function createList(parent, newClass, arr, liClass, ...arg) {
  const ul = document.createElement('ul');
  ul.className = newClass;
  parent.appendChild(ul);
  arr.forEach((el, key) => {
    const li = document.createElement('li');
    li.className = liClass;
    if (arg.length > 0) {
      const aLink = document.createElement('a');
      aLink.textContent = el;
      aLink.href = arg[(0)[key]];
      aLink.className = arg[1];
      li.appendChild(aLink);
    } else {
      li.textContent = el;
    }
    ul.appendChild(li);
  });
  if (arg.length > 2) {
    arg[2].forEach((el, key) => {
      createSvg(arg[3], parent, arg[4][key], el, arg[5], arg[6], arg[7][key]);
    });
  }
}
//removing
export function removeChildren(parent) {
  if (parent && parent.firstChild) {
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
    }
  }
}
//looping
export function loopTextByLetter(arr, element, crEl, newClass) {
  const l = arr.length;

  arr.forEach((el, key) => {
    const newWordAppearAfter = l * 100 * key;
    const word = el.split('');
    const wL = word.length;
    setTimeout(() => {
      word.forEach((elem, k) => {
        // const newLetterAppearAfter = 200 * k;
        // setTimeout(() => {
        const span = createNewElement(crEl, el, element);
        span.classList.add(newClass);
        span.textContent += elem;
        // }, newLetterAppearAfter);
      });
      // const addFadeClassAfter = wL * 250;

      // setTimeout(() => {
      //   const spans = document.querySelectorAll(`.${el}`);

      //   spans.forEach((span, k) => {
      //     const newLetterDisappearAfter = 110 * k;
      //     const removingLettersFromDom = 25 * k * k * wL * l * wL;
      //     setTimeout(() => {
      //       span.classList.contains(el) == true && k != 0
      //         ? span.classList.add(anotherClass)
      //         : span.classList.add('v');
      //       setTimeout(() => {
      //         const disappearSpans = document.querySelectorAll(
      //           `.${anotherClass}`
      //         );
      //         disappearSpans.forEach((el) => el.remove());
      //       }, removingLettersFromDom);
      //     }, newLetterDisappearAfter);
      //   });
      // }, addFadeClassAfter);
    }, newWordAppearAfter);
  });
}

export function loopIds(arr, countryColor, countryStroke) {
  arr.forEach((el, key) => {
    setTimeout(() => {
      const countryId = document.querySelector(`#${el}`);
      countryId.classList.add('animated__map');
      countryId.style.fill = countryColor[key];
      countryId.style.stroke = countryStroke;
    }, key * 400);
  });
}
export function loopPaths(pathsArr, pathsColor, pathsStroke) {
  pathsArr.forEach((el, key) => {
    setTimeout(() => {
      const pathsItem = document.querySelector(`#${el}`);
      pathsItem.style.fill = pathsColor;
      pathsItem.style.stroke = pathsStroke;
      pathsItem.style.opacity = 1;
    }, 200 * key);
  });
  setTimeout(() => {
    pathsArr.forEach((el, key) => {
      setTimeout(() => {
        const pathsItem = document.querySelector(`#${el}`);
        pathsItem.style.fill = '';
        pathsItem.style.stroke = '';

        pathsItem.style.opacity = 0;
      }, 200 * key);
    });
  }, 3000);
}

export const managePathsLooping = (paths, pathsColor, pathsStroke) => {
  setInterval(() => {
    loopPaths(paths, pathsColor, pathsStroke);

    setTimeout(() => {
      const reversePaths = paths.reverse();
      loopPaths(reversePaths, pathsColor, pathsStroke);
    }, 9000);
  }, 12000);
};
