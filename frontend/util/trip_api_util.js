export const addTrip = trip => (
  $.ajax({
    method: 'POST',
    url: 'api/trips',
    data: trip
  })
);

export const showAllTrips = () => (
  $.ajax({
    method: 'GET',
    url: 'api/trips',
  })
);

export const showRoom = id => (
  $.ajax({
    method: 'GET',
    url: `api/trips/${id}`
  })
);
