import { home } from './../models/Home';
import * as homeContentView from './../views/homeContentView';
export function renderHomeContent(container) {
  homeContentView.addMarkup(home, container);
}
