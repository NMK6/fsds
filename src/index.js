import './sass/main.scss';
import { renderHome } from './js/controllers/homeController';
import { renderHomeContent } from './js/controllers/homeContentController';
import { renderHeader } from './js/controllers/headerController';
import { renderMap } from './js/controllers/mapController';
function render() {
  window.addEventListener('DOMContentLoaded', (e) => {
    function renderEl() {
      return new Promise(function (resolve, reject) {
        resolve();
        reject();
      });
    }

    renderEl()
      .then(function () {
        renderHeader();
      })
      .then(function () {
        const containers = renderHome();
        renderHomeContent(containers[0]);
        renderMap(containers[1]);
      })

      .catch();
    renderEl();
  });
}
render();
