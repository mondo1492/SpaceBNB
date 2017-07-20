export const addRoom = room => (
  $.ajax({
    method: 'POST',
    url: 'api/rooms',
    data: room
  })
);

export const deleteRoom = room => (
  $.ajax({
    method: 'DELETE',
    url: `api/rooms/${room.id}`
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
