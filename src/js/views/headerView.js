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
  setTimeout(() => {
    const logo = utils.createSvg(
      'header__logo',
      header,
      'logo',
      arr.myLogo,
      60,
      'header__logo-a',
      '/',
      53.05
    );
  }, 100);

  return header;
}
export let wWidth = elements.width;
export function addMobMenu(nav) {
  utils.addNewClass(nav, 'visually-hidden');
}

export function removeMobMenu(nav, ul) {
  utils.removeNewClass(nav, 'visually-hidden');
  utils.removeNewClass(nav.parentNode, 'header__click');
  utils.removeNewClass(ul.firstChild, 'change-scale-y');
  const lis = ul.firstChild.childNodes;
  lis.forEach((el) => {
    utils.removeNewClass(el, 'apear-from-bottom-opacity-not-one');
  });
}
export function dealWithMobMenuClicks(nav, ul) {
  nav.classList.toggle('visually-hidden');
  ul.firstChild.classList.toggle('change-scale-y');
  const lis = ul.firstChild.childNodes;
  setTimeout(() => {
    lis.forEach((el, key) => {
      setTimeout(() => {
        el.classList.toggle('apear-from-bottom-opacity-not-one');
      }, 200 * key);
    });
  }, 500);

  nav.parentNode.classList.toggle('header__click');
}
