import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const footer = utils.createNewElement('footer', 'footer', elements.root);
  const contentContainer = utils.createNewElement(
    'div',
    'footer__container',
    footer
  );
  const paragraph = `${arr.copyright} ${arr.year} ${arr.paragraph}`;
  utils.createNewElement('p', 'footer__p', contentContainer, paragraph);
  const contacts = utils.createNewElement(
    'div',
    'footer__contacts',
    contentContainer
  );
}
