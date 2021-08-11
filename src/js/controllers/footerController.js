import { footer } from './../models/Footer';
import * as footerView from './../views/footerView';
export function renderFooter() {
  footerView.addMarkup(footer);
}
