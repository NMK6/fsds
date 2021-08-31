import { map } from './../models/Map';
import * as mapView from './../views/mapView';
export function renderMap(container) {
  const europe = mapView.addMarkup(map, container);

  europe.addEventListener(
    'mouseover',
    function (e) {
      mapView.showPrice(e, map);
    },
    { passive: true }
  );
  europe.addEventListener('mouseout', mapView.hidePrice);
  europe.addEventListener(
    'touchstart',
    function (e) {
      mapView.showPrice(e, map);
    },
    { passive: true }
  );
  europe.addEventListener('touchend', mapView.hidePrice, { passive: true });
}
