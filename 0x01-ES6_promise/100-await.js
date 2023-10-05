import { uploadPhoto, createUser } from './utils.js';

async function asyncUploadUser(user, photo) {
  try {
    // Upload the photo asynchronously
    const photoResult = await uploadPhoto(photo);

    // Create the user asynchronously
    const userResult = await createUser(user);

    // Return an object with the specified format
    return {
      photo: photoResult,
      user: userResult,
    };
  } catch (error) {
    // Handle any errors that occur during the process
    console.error('Error in asyncUploadUser:', error);
    throw error; // Optionally, re-throw the error to propagate it further
  }
}

// Example usage:
const user = { /* User data */ };
const photo = { /* Photo data */ };

asyncUploadUser(user, photo)
  .then(result => {
    console.log('Upload result:', result);
  })
  .catch(error => {
    console.error('Error:', error);
  });
