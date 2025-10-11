function memoizedSum() {
    let cache = {};

    return function (num) {
        if (num in cache) {
            console.log("Fetching from cache:");
            return cache[num];
        } else {
            console.log("Calculating result...");
            cache[num] = num + 10;
            return cache[num];
        }
    };
}

const sum = memoizedSum();
console.log(sum(5)); // Calculating result... 15
console.log(sum(5)); // Fetching from cache: 15
