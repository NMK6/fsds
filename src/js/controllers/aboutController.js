import { about } from './../models/About';
import * as aboutView from './../views/aboutView';
export function renderAbout(container) {
  aboutView.addMarkup(about, container);
}
