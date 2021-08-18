import { header } from './../models/Header';
import * as headerView from './../views/headerView';
export function renderHeader(fun) {
  const headerContainer = headerView.addMarkup(header);
  const headerNav = headerContainer.firstChild.firstChild;
  headerNav.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains('header__a')) {
      fun(e);
    } else {
      return;
    }
  });
}
