import * as utils from './utils';
import { elements } from './base';
export function removePreviousScreen(container) {
  utils.removeScreen(container, 'change-link', 'main__content-container');
}
export function addMarkup(arr, container) {
  utils.removeChildren(container);

  const contentContainer = utils.createNewElement(
    'div',
    'main__content-container',
    container
  );
  setTimeout(() => {
    utils.addNewClass(contentContainer, 'main__background');
  }, 300);

  const titleContainer = utils.createNewElement(
    'div',
    'main__title-container',
    contentContainer
  );
  const mainTitle = utils.createNewElement(
    'h1',
    'visually-hidden',
    titleContainer,
    arr.mainTitle
  );
  const title = utils.createNewElement('div', 'main__title', titleContainer);
  const img = ` <div class='main__img-container'><svg class='main__img' width="42" viewBox="0 0 1046 1115" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 26">
  <path id="line3" d="M1045 317H197L289 478H1045V317Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line2" d="M1045 162H97L198.571 319H1045V162Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line1" d="M1043 1H1L97 161.528H1043V1Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line4" d="M1043 478.073H289L385 641.509H1043V478.073Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line5" d="M1043 640.708H385L485 804.144H1043V640.708Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line6" d="M1043 804.144H485L579 967.58H1043V804.144Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line7" d="M1041.24 960H575L663.755 1114H1045L1041.24 960Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  </g>
  </svg></div>
  
  `;
  titleContainer.insertAdjacentHTML('beforeend', img);
  const p = utils.createNewElement(
    'p',
    'main__p appear-bottom',
    contentContainer,
    arr.p
  );
  const button = utils.createNewElement(
    'button',
    'main__button',
    contentContainer,
    '',
    'button'
  );
  let buttonLink;
  if (elements.width <= 700) {
    buttonLink = arr.buttonMobileLink;
  } else {
    buttonLink = arr.buttonLink;
  }
  utils.createLink(button, 'main__button-a', buttonLink, arr.button);
  utils.loopTextByLetter(arr.title, title, 'span', 'appear');
}
