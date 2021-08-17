import { home } from './../models/Home';
import * as homeContentView from './../views/homeContentView';
export function renderHomeContent(container) {
  function renderContent() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  renderContent()
    .then(function () {
      homeContentView.removePreviousScreen(container);
    })
    .then(function () {
      setTimeout(() => {
        homeContentView.addMarkup(home, container);
      }, 1100);
    })
    .catch();
  renderContent();
}
