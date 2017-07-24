export const addRoom = room => (
  $.ajax({
    method: 'POST',
    url: 'api/rooms',
    data: room
  })
);

export const showAllRooms = () => (
  $.ajax({
    method: 'GET',
    url: 'api/rooms'
  })
);

export const deleteRoom = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/rooms/${id}`
  })
);

export const editRoom = room => (
  $.ajax({
    method: 'PATCH',
    url: `api/rooms/${room.id}`
  })
);

export const showRoom = room => (
  $.ajax({
    method: 'GET',
    url: `api/rooms/${room.id}`
  })
);
