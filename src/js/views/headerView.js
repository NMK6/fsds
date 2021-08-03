import { elements } from './base';
import * as utils from './utils';
export function addMarkup(arr) {
  const favicon = `<link rel="icon" href=${arr.favicon} width="16" />`;
  const head = document.querySelector('head');
  head.insertAdjacentHTML('beforeend', favicon);
}
