import { uploadPhoto, createUser } from './utils.js';

async function processUser() {
  try {
    // Call the functions and collect the promises
    const photoPromise = uploadPhoto();
    const userPromise = createUser();

    // Use Promise.all to resolve all promises simultaneously
    const [photoResult, userResult] = await Promise.all([photoPromise, userPromise]);

    // Assuming the resolved objects have firstName and lastName properties
    const { firstName, lastName } = userResult;

    // Log the properties to the console
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);

    // You can also do something with photoResult if needed
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function to start the process
processUser();
