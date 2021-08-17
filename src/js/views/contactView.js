import * as utils from './utils';
export function removePreviousScreen(container) {
  utils.removeScreen(container, 'change-link', 'contact-container');
}
export function addMarkup(arr, container) {
  const contact = utils.createNewElement(
    'div',
    'contact__container',
    container
  );
  setTimeout(() => {
    utils.addNewClass(contact, 'contact__background');
  }, 300);
  const titleContainer = utils.createNewElement(
    'div',
    'contact__title-container',
    contact
  );
  const title = utils.createNewElement('h2', 'contact__title', titleContainer);
  utils.loopByLetter(arr.title, title, 'span', 'appear');
  const img = ` <div class='contact__img-container'><svg class='contact__img' width="42" viewBox="0 0 1046 1115" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 26">
  <path id="line3" d="M1045 317H197L289 478H1045V317Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line4" d="M1043 478.073H289L385 641.509H1043V478.073Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  <path id="line5" d="M1043 640.708H385L485 804.144H1043V640.708Z" fill="#C4C4C4" stroke="black" stroke-width="0.1"/>
  </g>
  </svg></div>
  
  `;
  titleContainer.insertAdjacentHTML('beforeend', img);
}
