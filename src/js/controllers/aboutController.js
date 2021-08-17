import { about } from './../models/About';
import * as aboutView from './../views/aboutView';
export function renderAbout(container) {
  function renderContent() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  renderContent()
    .then(function () {
      aboutView.removePreviousScreen(container);
    })
    .then(function () {
      setTimeout(() => {
        aboutView.addMarkup(about, container);
      }, 1100);
    })
    .catch();
  renderContent();
}
