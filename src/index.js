import './sass/main.scss';
import { renderHome } from './js/controllers/homeController';
import { renderHomeContent } from './js/controllers/homeContentController';
import { renderHeader } from './js/controllers/headerController';
import { renderMap } from './js/controllers/mapController';
import { renderFooter } from './js/controllers/footerController';
import { renderAbout } from './js/controllers/aboutController';
import { renderContact } from './js/controllers/contactController';

function render() {
  window.addEventListener('DOMContentLoaded', (e) => {
    function renderHomeSection() {
      return new Promise(function (resolve, reject) {
        resolve();
        reject();
      });
    }
    renderHomeSection()
      .then(function () {
        renderHomeContent(containers[0]);
        setTimeout(() => {
          renderMap(containers[1]);
        }, 1000);
      })
      .then(function () {
        setTimeout(() => {
          renderFooter();
        }, 4000);
      })
      .catch();

    function renderSection(e) {
      const section = e.target.textContent;
      switch (section) {
        case 'Home':
          renderHomeContent(containers[0]);

          break;
        case 'About':
          renderAbout(containers[0]);

          break;
        case 'Contact':
          renderContact(containers[0], containers[1]);

          break;

        default:
          renderHomeContent(containers[0]);
          break;
      }
    }
    renderHeader(renderSection);
    const containers = renderHome();

    renderHomeSection();
  });
}
render();
