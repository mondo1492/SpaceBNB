import { Link } from 'react-router-dom';

export default class MarkerManager {
  constructor(map) {
    this.map = map;
    this.markers = {};
    this.removeMarker = this.removeMarker.bind(this);
  }

  updateMarkers(rooms) {
    const roomsObj = {};


    rooms.forEach((room) => {
      roomsObj[room.id] = room;
    });

    rooms
      .filter(room => !this.markers[room.id])
      .forEach((newRoom) => {
      this.createMarkerFromRoom(newRoom);
    });
    Object.keys(this.markers)
      .filter(roomId => !roomsObj[roomId])
      .forEach((roomId) => this.removeMarker(this.markers[roomId]));
  }

  removeMarker(marker) {
    this.markers[marker.roomId].setMap(null);
    delete this.markers[marker.roomId];
  }

  createMarkerFromRoom(room) {
    const pos = new google.maps.LatLng(room.lat, room.lng);
    const marker = new google.maps.Marker({
      position: pos,
      map: this.map,
      // icon: 'http://ruralshores.com/assets/marker-icon.png',
      animation: google.maps.Animation.DROP,
      roomId: room.id
    });
    this.markers[marker.roomId] = marker;
  }
}



// import React from 'react';
//
// class MarkerManager {
//   constructor(map){
//     this.map = map;
//     this.markers = [];
//   }
//
//   updateMarkers(rooms){
//     rooms = rooms.length === 0 ? [] : rooms ;
//     rooms.forEach( room => (this.markers[room.id] = room));
//     const newMarkers = this.markers.filter((obj) =>  obj !== undefined );
//     // const newMarkers = this.markers.keys.forEach( room => (this.markers[room.id] = room));
//     console.log("ROOOMS", rooms);
//     console.log("MARKERS", newMarkers);
//     // console.log("ROOOMS", newMarkers);
//
//     newMarkers
//       .forEach((roomId) => this.removeMarker(newMarkers[newMarkers.roomId]));
//     rooms
//       .forEach( room => this.createMarkerFromRoom(room));
//     // console.log("MARKERS", this.markers);
//
//     // Object.keys(this.markers)
//     //   .filter(roomId => !this.markers[this.markers.id])
//     //   .forEach((roomId) => this.removeMarker(this.markers[roomId]))
//   }
//
//   createMarkerFromRoom(room) {
//     const position = new google.maps.LatLng(room.lat, room.lng);
//       const marker = new google.maps.Marker({
//         position,
//         map: this.map,
//         roomId: room.id
//       });
//   }
//
//   removeMarker(marker) {
//     this.markers[marker.roomId].setMap(null);
//     delete this.markers[marker.roomId];
//   }
// }
//
// export default MarkerManager;
