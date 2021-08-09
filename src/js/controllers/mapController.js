import { map } from './../models/Map';
import * as mapView from './../views/mapView';
export function renderMap(container) {
  const europe = mapView.addMarkup(map, container);

 europe.addEventListener('mouseover', function (e) {
    mapView.showPrice(e, map);
  });
  europe.addEventListener('mouseout', mapView.hidePrice);
}
