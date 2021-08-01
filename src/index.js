import './sass/main.scss';
import { renderHome } from './js/controllers/homeController';
import { renderHomeContent } from './js/controllers/homeContentController';
import { renderHeader } from './js/controllers/headerController';
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
        const containers = renderHome();
        renderHomeContent(containers[0]);
      })
      .then(function () {
        renderHeader();
      })

      .catch();
    renderEl();
  });
}
render();
