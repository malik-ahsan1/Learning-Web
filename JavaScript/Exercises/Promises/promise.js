const myPromise = new Promise((resolve, reject) => {
  let success = true;

  setTimeout(() => {
    if (success) {
      resolve("🎉 Operation Successful!");
    } else {
      reject("❌ Operation Failed!");
    }
  }, 2000);
});

myPromise
    .then((message) => {
        console.log("Success:", message); // Runs if resolve() is called
    })
    .catch((error) => {
        console.log("Error:", error); // Runs if reject() is called
    });


