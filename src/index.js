import './sass/main.scss';
import { renderHome } from './js/controllers/homeController';
import { renderHomeContent } from './js/controllers/homeContentController';
import { renderHeader } from './js/controllers/headerController';
import { renderMap } from './js/controllers/mapController';
import { renderFooter } from './js/controllers/footerController';
import { renderAbout } from './js/controllers/aboutController';

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
        renderMap(containers[1]);
      })
      .then(renderFooter)
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

        default:
          break;
      }
    }
    renderHeader(renderSection);
    const containers = renderHome();
 
    renderHomeSection();
  });
}
render();
