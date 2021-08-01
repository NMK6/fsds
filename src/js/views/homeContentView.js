import * as utilsCreating from './utilsCreating';
export function addMarkup(arr, container) {
  const contentContainer = utilsCreating.createNewElement(
    'div',
    'main__content-container',
    container
  );
  const titleContainer = utilsCreating.createNewElement(
    'div',
    'main__title-container',
    contentContainer
  );
  const title = utilsCreating.createNewElement(
    'h1',
    'main__title',
    titleContainer,
    arr.title
  );
  const p = utilsCreating.createNewElement(
    'p',
    'main__p',
    contentContainer,
    arr.p
  );
  const button = utilsCreating.createNewElement(
    'button',
    'main__button',
    contentContainer,
    arr.button,
    'button'
  );
}
