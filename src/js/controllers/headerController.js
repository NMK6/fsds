import { header } from './../models/Header';
import * as headerView from './../views/headerView';
export function renderHeader(fun) {
  const headerContainer = headerView.addMarkup(header);
  const headerNav = headerContainer.firstChild.firstChild;
  const headerMob = headerContainer.firstChild;
  headerNav.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('header__a')) {
      fun(e);
    } else {
      return;
    }
  });

  window.addEventListener('resize', headerView.changeWidth);
  if (headerView.width <= 800) {
    headerNav.classList.add('visually-hidden');
    headerMob.addEventListener('click', function (e) {
      headerNav.classList.toggle('visually-hidden');
      console.log(headerNav);
    });
  }
}
