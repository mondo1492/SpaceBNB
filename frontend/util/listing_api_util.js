export const showUserListings = () => (
  $.ajax({
    method: 'GET',
    url: 'api/listings'
  })
);
