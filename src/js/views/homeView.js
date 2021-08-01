import { elements } from './base';
import * as utilsCreating from './utilsCreating';
export function addMarkup(arr) {
  const container = utilsCreating.createNewElement(
    'div',
    'home',
    elements.root
  );
  const firstHalf = utilsCreating.createNewElement(
    'section',
    'home__half main',
    container
  );
  const secondHalf = utilsCreating.createNewElement(
    'section',
    'home__half map',
    container
  );
  const containers = [firstHalf, secondHalf];
  return containers;
}
