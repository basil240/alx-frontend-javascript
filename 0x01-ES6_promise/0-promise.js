function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    // Simulate an API call or asynchronous operation
    setTimeout(() => {
      const success = true; // Simulate success or failure
      if (success) {
        const responseData = { message: "API response data" };
        resolve(responseData); // Resolve the promise with the data
      } else {
        reject(new Error("API request failed")); // Reject the promise with an error
      }
    }, 2000); // Simulate a 2-second delay
  });
}

// Usage example
getResponseFromAPI()
  .then((data) => {
    console.log("API response:", data);
  })
  .catch((error) => {
    console.error("API request failed:", error);
  });

