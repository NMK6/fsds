import { home } from './../models/Home';
import * as homeView from './../views/homeView';
export function renderHome(home) {
  const containers = homeView.addMarkup();
  console.log(containers);
  return containers;
}
