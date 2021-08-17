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
export function createLink(parent, newLinkClass, newHref, ...arg) {
  const newLink = document.createElement('a');
  newLink.href = newHref;
  newLink.className = newLinkClass;
  if (arg.length > 0) {
    newLink.textContent = arg[0];
  }
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
export function createParagraphs(parent, arr, newClass) {
  arr.forEach((el) => {
    const p = document.createElement('p');

    p.className = newClass;
    p.textContent = el;
    parent.appendChild(p);
  });
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
      aLink.href = arg[0][key];
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
export function removeChildren(parent, ...arg) {
  if (parent && parent.firstChild) {
    const children = parent.childNodes;

    children.forEach((el) => {
      if (arg.length > 0 && el.className == arg[0]) {
        return;
      } else {
        parent.removeChild(el);
      }
    });
  }
}
export function removeScreen(parent, newClass, newSectionParentClass) {
  if (
    !parent.firstChild ||
    parent.firstChild == document.querySelector(newSectionParentClass)
  ) {
    return;
  } else {
    addNewClass(parent.firstChild, newClass);
    setTimeout(() => {
      removeChildren(parent, newSectionParentClass);
    }, 1100);
  }
}
//add remove classes
export function addNewClass(el, newClass) {
  el.classList.add(newClass);
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
        const span = createNewElement(crEl, el, element);
        span.classList.add(newClass);
        span.textContent += elem;
      });
    }, newWordAppearAfter);
  });
}
export function loopByLetter(arr, newElement, parent, newClass) {
  arr.forEach((el, key) => {
    const newLetterAppearAfter = 150 * key;
    setTimeout(() => {
      const span = createNewElement(parent, el, newElement);
      span.className = newClass;
      span.textContent = el;
    }, newLetterAppearAfter);
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
