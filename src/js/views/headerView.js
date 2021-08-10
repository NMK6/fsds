import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const favicon = `<link rel="icon" href=${arr.favicon} width="16" />`;
  const head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', favicon);
  const header = utils.createNewElement(
    'header',
    'header__container',
    elements.root
  );
  const menu = utils.createNewElement('nav', 'header__nav', header);
  const menuContent = utils.createList(
    menu,
    'header__ul',
    arr.menu,
    'header__li',
    arr.links,
    'header__a',
    arr.contacts,
    'header__contacts',
    arr.alts,
    15,
    'header__img-a',
    arr.imgLinks
  );
  const logo = utils.createSvg(
    'header__logo',
    header,
    'logo',
    arr.myLogo,
    90,
    'header__logo-a',
    '/'
  );
}
