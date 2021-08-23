import * as utils from './utils';
import { elements } from './base';
export function removePreviousScreen(container) {
  utils.removeScreen(container, 'change-link', 'contact-container');
}
export function addMarkup(arr, container, container2) {
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
  function addUKMap() {
    utils.addNewClass(container2.firstChild, 'visually-hidden');
    if (!document.querySelector('.contact__map-container')) {
      const ukMapContainer = utils.createNewElement(
        'div',
        'contact__map-container',
        container2
      );
      ukMapContainer.insertAdjacentHTML('beforeend', arr.map);
    } else {
      utils.removeNewClass(
        document.querySelector('.contact__map-container'),
        'visually-hidden'
      );
    }
    utils.addNewClass(
      document.querySelector('.contact__map-container'),
      'animated__map'
    );
  }
  addUKMap();
  utils.createForm(arr, contact);
}
export function showPrice(e, arr) {
  arr.id.forEach((el, key) => {
    if (e.target.id == el) {
      if (arr.id[key]) {
        document.querySelector('.map__country-container')
          ? utils.removeChildren(
              document.querySelector('.map__country-container')
            )
          : utils.createNewElement(
              'div',
              'map__country-container',
              document.querySelector('.map')
            );
        const popUpTitle = `FSDS prices`;

        const popUpParagraph = `City: ${arr.city[key]}`;
        const popUpSecondParagraph = `Price from Southend-on-sea to ${arr.city[key]}`;
        const popUpContent = utils.createNewElement(
          'div',
          'map__country-content',
          document.querySelector('.map__country-container')
        );
        utils.createNewElement(
          'h3',
          'map__country-title',
          popUpContent,
          popUpTitle
        );
        utils.createNewElement(
          'p',
          'map__country-p',
          popUpContent,
          popUpParagraph
        );
        utils.createNewElement(
          'p',
          'map__country-p',
          popUpContent,
          popUpSecondParagraph
        );
      }
    }
  });
}
export function hidePrice() {
  utils.removeChildren(document.querySelector('.map__country-container'));
}
