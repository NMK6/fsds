import * as utils from './utils';
import { elements } from './base';

export function addMarkup(arr, container) {
  const mapContainer = utils.createNewElement(
    'div',
    'map__container',
    container
  );
  mapContainer.insertAdjacentHTML('beforeend', arr.image);

  function renderMap() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }

  renderMap()
    .then(function () {
      utils.loopIds(arr.id, arr.countryColor, arr.stroke);
    })
    .then(function () {
      setTimeout(() => {
        utils.managePathsLooping(arr.pathId, arr.pathColor, arr.pathStroke);
      }, 8000);
    })

    .catch();
  renderMap();
  const europe = document.querySelector('#europe');

  return europe;
}
export function showPrice(e, arr) {
  arr.id.forEach((el, key) => {
    if (e.target.id == el) {
      if (arr.title[key]) {
        document.querySelector('.map__country-container')
          ? utils.removeChildren(
              document.querySelector('.map__country-container')
            )
          : utils.createNewElement(
              'div',
              'map__country-container',
              document.querySelector('.map')
            );
        const popUpTitle = `FSDS' delivery area`;

        const popUpParagraph = `Country: ${arr.title[key]}`;
        const popUpSecondParagraph = `${arr.zone[key]} goods to ${arr.capitalCity[key]}`;
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
