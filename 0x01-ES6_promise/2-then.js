function handleResponseFromAPI(promise) {
  return promise
    .then(response => {
      console.log('Got a response from the API');
      return {
        status: 200,
        body: 'success'
      };
    })
    .catch(error => {
      console.error('Got an error from the API');
      return new Error();
    });
}

// Example usage:
const successPromise = Promise.resolve('Some data');
const errorPromise = Promise.reject('An error occurred');

handleResponseFromAPI(successPromise)
  .then(response => {
    console.log('Success:', response);
  });

handleResponseFromAPI(errorPromise)
  .then(response => {
    console.log('Success:', response);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
