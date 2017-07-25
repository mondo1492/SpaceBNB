import React from 'react';

class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(rooms){
    const roomsObj = {};
    rooms = rooms || [];
    rooms.forEach( room => (roomsObj[room.id] = room));

    rooms
      .filter( room => !this.markers[room.id])
      .forEach( room => this.createMarkerFromRoom(room));


    Object.keys(this.markers)
      .filter(roomId => !roomsObj[roomId])
      .forEach((roomId) => this.removeMarker(this.markers[roomId]))
  }

  createMarkerFromRoom(room) {
    const position = new google.maps.LatLng(room.lat, room.lng);
      const marker = new google.maps.Marker({
        position,
        map: this.map,
        roomId: room.id
      });
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }
}

export default MarkerManager;
