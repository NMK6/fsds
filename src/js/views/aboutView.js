import * as utils from './utils';

export function removePreviousScreen(container) {
  utils.removeScreen(container, 'change-link', 'about-container');
}
export function addMarkup(arr, container) {
  const about = utils.createNewElement('div', 'about__container', container);
  setTimeout(() => {
    utils.addNewClass(about, 'about__background');
  }, 300);
  const titleContainer = utils.createNewElement(
    'div',
    'about__title-container',
    about
  );
  const title = utils.createNewElement('h2', 'about__title', titleContainer);
  utils.loopByLetter(arr.title, title, 'span', 'appear');
  const img = ` <div class='about__img-container'><svg class='about__img' width="42" viewBox="0 0 1046 1115" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 26">
  <path id="line3" d="M1045 317H197L289 478H1045V317Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line4" d="M1043 478.073H289L385 641.509H1043V478.073Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line5" d="M1043 640.708H385L485 804.144H1043V640.708Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line6" d="M1043 804.144H485L579 967.58H1043V804.144Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line7" d="M1041.24 960H575L663.755 1114H1045L1041.24 960Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  </g>
  </svg></div>
  
  `;
  titleContainer.insertAdjacentHTML('beforeend', img);
  const paragraphs = utils.createNewElement('div', 'about__p-container', about);

  utils.createParagraphs(
    paragraphs,
    arr,
    'about__p',
    'about__subheading',
    'about__p-containers'
  );
  const allParagraphs = document.querySelectorAll('.about__p-containers');
  allParagraphs.forEach((el, key) => {
    setTimeout(() => {
      utils.addNewClass(el, 'appear-from-bottom');
    }, 400 * key);
  });
}
