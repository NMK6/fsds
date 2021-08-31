import { contact } from './../models/Contact';
import * as contactView from './../views/contactView';
export function renderContact(container, container2) {
  function renderContent() {
    return new Promise(function (resolve, reject) {
      resolve();
      reject();
    });
  }
  renderContent()
    .then(function () {
      contactView.removePreviousScreen(container, container2);
    })
    .then(function () {
      setTimeout(() => {
        contactView.addMarkup(contact, container, container2);
      }, 1100);
    })
    .catch();
  renderContent();
  setTimeout(() => {
    document
      .querySelector('.contact__map')
      .addEventListener('mouseover', function (e) {
        contactView.showPrice(e, contact);
      }, {passive: true});
    document
      .querySelector('.contact__map')
      .addEventListener('mouseout', contactView.hidePrice, {passive: true});
  }, 5000);
}
