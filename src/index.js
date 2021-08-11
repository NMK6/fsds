import './sass/main.scss';
import { renderHome } from './js/controllers/homeController';
import { renderHomeContent } from './js/controllers/homeContentController';
import { renderHeader } from './js/controllers/headerController';
import { renderMap } from './js/controllers/mapController';
import { renderFooter } from './js/controllers/footerController';
function render() {
  window.addEventListener('DOMContentLoaded', (e) => {
    function renderEl() {
      return new Promise(function (resolve, reject) {
        resolve();
        reject();
      });
    }

    renderEl()
      .then(renderHeader)
      .then(function () {
        const containers = renderHome();
        renderHomeContent(containers[0]);
        renderMap(containers[1]);
      })
      .then(renderFooter)
      .catch();
    renderEl();
  });
}
render();
