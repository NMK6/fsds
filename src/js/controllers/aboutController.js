import { about } from './../models/About';
import * as aboutView from './../views/aboutView';
export function renderAbout(container) {
  function renderAbout() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  renderAbout()
    .then(function () {
      aboutView.removePreviousScreen(container);
    })
    .then(function () {
      setTimeout(() => {
        aboutView.addMarkup(about, container);
      }, 1100);
    })
    .catch();
  renderAbout();
}
