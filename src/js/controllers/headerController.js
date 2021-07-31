import { header } from './../models/Header';
import * as headerView from './../views/headerView';
export function renderHeader() {
  headerView.addMarkup(header);
}
