import * as utils from './utils';
export function addMarkup(arr, container) {
  const contentContainer = utils.createNewElement(
    'div',
    'main__content-container',
    container
  );
  const titleContainer = utils.createNewElement(
    'div',
    'main__title-container',
    contentContainer
  );
  const title = utils.createNewElement('h1', 'main__title', titleContainer);
  const p = utils.createNewElement('p', 'main__p', contentContainer, arr.p);
  const button = utils.createNewElement(
    'button',
    'main__button',
    contentContainer,
    arr.button,
    'button'
  );

  utils.loopForEach(arr.title, title, 'span', 'appear');
}
