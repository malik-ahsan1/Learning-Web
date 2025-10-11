function getData() {
    return new Promise((resolve, reject) => {
        console.log("1️⃣ Promise started");

        setTimeout(() => {
            console.log("2️⃣ Calling resolve...");
            resolve("📦 Data received");
        }, 2000);
    });
}

console.log("0️⃣ Before calling getData()");
getData()
    .then((data) => {
        console.log("3️⃣ Inside .then() →", data);
    });

console.log("4️⃣ After calling getData()");
