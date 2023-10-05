// Import the required functions
import { signUpUser } from './4-user-promise.js';
import { uploadPhoto } from './5-photo-reject.js';

// Define the handleProfileSignup function
export function handleProfileSignup(firstName, lastName, fileName) {
  // Create promises for signUpUser and uploadPhoto
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPhotoPromise = uploadPhoto(fileName);

  // Use Promise.all to wait for both promises to settle
  return Promise.all([signUpPromise, uploadPhotoPromise])
    .then(([userResult, photoResult]) => {
      // Handle the results here and return the desired structure
      const [userData, photoData] = userResult;
      return {
        user: {
          firstName: userData.firstName,
          lastName: userData.lastName,
        },
        photo: {
          fileName: photoData.fileName,
          resolution: photoData.resolution,
        },
      };
    })
    .catch((error) => {
      // Handle errors if necessary
      console.error('Error in handleProfileSignup:', error);
      throw error; // You can re-throw the error or handle it as needed
    });
}
