import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap } from 'react-naver-maps';

const YOUR_NCP_CLIENT_ID = 'z83axj5nl8'

function NaverMapComponent() {
  //const id = this.props.itemData.id;
  return (
    <NaverMap
      mapDivId={"react-naver-map"}
      style={{
        width: '100%',
        height: '100vh'
      }}
      defaultCenter={{ lat: 37.554722, lng: 126.970833 }}
      defaultZoom={10}
    />
  );
}

function Map() {
  return (
    <RenderAfterNavermapsLoaded
      ncpClientId={YOUR_NCP_CLIENT_ID}
      error={<p>Maps Load Error</p>}
      loading={<p>Maps Loading...</p>}
    >
      <NaverMapComponent />
    </RenderAfterNavermapsLoaded>
  );
}

export default Map