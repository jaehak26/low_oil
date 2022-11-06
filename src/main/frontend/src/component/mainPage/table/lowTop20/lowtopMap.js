import React, { useEffect, useState } from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps';

import {YOUR_NCP_CLIENT_ID} from '../../../maps/clientId'

import {lowTop20MapData} from '../../../../recoil/mapData'
import { useRecoilState } from 'recoil'; 

import proj4 from 'proj4/dist/proj4';

export const fromTM128ToLatLng = (mapx = 0, mapy = 0) => {
  let KATEC =
    '+proj=tmerc +lat_0=38 +lon_0=127.5 +k=0.9996 +x_0=1000000 +y_0=2000000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43';

    KATEC = '+proj=tmerc +lat_0=38 +lon_0=128 +k=0.9999 +x_0=400000 +y_0=600000 +ellps=bessel +units=m +no_defs +towgs84=-115.80,474.99,674.11,1.16,-2.31,-1.63,6.43'
  let WGS84 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';
  var x = 932122.881508; //5179 좌표계 x
  var y = 1944549.626052; //5179 좌표계 y
  let [lng, lat] = proj4(KATEC, WGS84, [mapx, mapy]);
  return [lat, lng];
};

const TM128 = { x: 299091.022, y: 548321.9904 };

function NaverMapComponent() {
  //const id = this.props.itemData.id;
  const navermaps = window.naver.maps;
  const [latlng, setLatlng] = React.useState([]);
  const [lowtopMapData, setLowtopMapData] = useRecoilState(lowTop20MapData)

  const [center, setCenter] = useState({lat:lowtopMapData.x, lng:lowtopMapData.y})

  //const [pos, setPos] = useState(null)

  React.useEffect(() => {
    //setLatlng(fromTM128ToLatLng(lowtopMapData.x, lowtopMapData.y));

    //let ll = { lat: latlng[0], lng: latlng[1] }
    //setCenter(ll)
    //console.log(center)
    //setPos(new navermaps.LatLng(ll.lat, ll.lng))
  }, [lowtopMapData]);

  useEffect(()=>{
    //console.log(latlng)
    //let ll = { lat: latlng[0], lng: latlng[1] }
    //setCenter(ll)
    //setPos(new navermaps.LatLng(ll.lat, ll.lng))

  },[latlng])

  return (<>
  
	  
    <NaverMap
      mapDivId={'react-naver-map'}
      style={{
        width: '100%',
        height: '80vh',
      }}
      defaultCenter={center}
      defaultZoom={16}
    >
      <Marker
        key={1}
        position={new navermaps.LatLng(center.lat,center.lng)}
        animation={2}
        title={lowtopMapData.osNm}
      />   
    </NaverMap>
    
    </>
  );
}

function Map() {
  const mySubModules = ['panorama', 'geocoder'];
  return (
    <RenderAfterNavermapsLoaded
        ncpClientId={YOUR_NCP_CLIENT_ID}
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
        submodules={mySubModules}
    > 
      <NaverMapComponent />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map;