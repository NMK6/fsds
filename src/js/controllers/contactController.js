import { contact } from './../models/Contact';
import * as contactView from './../views/contactView';
export function renderContact(container) {
  function renderContent() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  renderContent()
    .then(function () {
      contactView.removePreviousScreen(container);
    })
    .then(function () {
      setTimeout(() => {
        contactView.addMarkup(contact, container);
      }, 1100);
    })
    .catch();
  renderContent();
}
