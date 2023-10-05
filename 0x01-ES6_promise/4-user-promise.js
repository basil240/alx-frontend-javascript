function signUpUser(firstName, lastName) {
  // Create a promise that resolves with the provided data
  return Promise.resolve({
    firstName: firstName,
    lastName: lastName,
  });
}

async function processUser() {
  try {
    // Call the signUpUser function with the desired firstName and lastName values
    const userResult = await signUpUser('John', 'Doe');

    // Extract the firstName and lastName properties from the resolved object
    const { firstName, lastName } = userResult;

    // Log the properties to the console
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

// Call the function to start the process
processUser();
