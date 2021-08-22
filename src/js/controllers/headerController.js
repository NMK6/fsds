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
  // function doNothing() {
  //   return;
  // }
  function dealWithMobMenuClicks() {
    headerView.wWidth <= 800
      ? headerView.dealWithMobMenuClicks(headerNav, headerMob)
      : false;
  }

  function checkWidth(currentWidth) {
    if (currentWidth <= 800) {
      headerView.addMobMenu(headerNav);
      headerMob.addEventListener('click', dealWithMobMenuClicks);

      return true;
    } else {
      headerView.removeMobMenu(headerNav, headerMob);
      return false;
    }
  }

  checkWidth(headerView.wWidth);

  function addMobMenuOnResize() {
    setTimeout(() => {
      headerView.wWidth = window.innerWidth;

      checkWidth(headerView.wWidth);
    }, 900);
  }
  window.addEventListener('resize', addMobMenuOnResize);
}
