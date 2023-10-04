export function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // You can perform some checks or conditions here if needed
    // For this example, we'll simply reject the promise with an error message
    reject(new Error(`${fileName} cannot be processed`));
  });
}
