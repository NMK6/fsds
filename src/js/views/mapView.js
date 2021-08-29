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
  const popUpTitle = `FSDS' delivery area`;
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

        const popUpParagraph = `Country: ${arr.title[key]}`;
        function findZone() {
          if (
            key == 1 ||
            key == 4 ||
            key == 6 ||
            key == 8 ||
            key == 13 ||
            key == 15 ||
            key == 19 ||
            key == 21 ||
            key == 26 ||
            key == 27
          ) {
            return arr.zone[0];
          } else {
            return arr.zone[1];
          }
        }
        const zone = findZone();
        const popUpSecondParagraph = `${zone} goods to ${arr.capitalCity[key]}`;
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
