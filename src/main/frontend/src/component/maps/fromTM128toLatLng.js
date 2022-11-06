export const fromTM128ToLatLng = ({ mapx, mapy }) => {
    const point = new window.naver.maps.Point(mapx, mapy);
    const latLng = window.naver.maps.TransCoord.fromTM128ToLatLng(point);
    return latLng;
};