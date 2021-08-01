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
