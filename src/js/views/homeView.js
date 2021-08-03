import { elements } from './base';
import * as utils from './utils';
export function addMarkup() {
  const container = utils.createNewElement('div', 'home', elements.root);
  const firstHalf = utils.createNewElement(
    'section',
    'home__half main',
    container
  );
  const secondHalf = utils.createNewElement(
    'section',
    'home__half map',
    container
  );
  const containers = [firstHalf, secondHalf];
  return containers;
}
