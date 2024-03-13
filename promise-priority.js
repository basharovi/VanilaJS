console.log("1");
setTimeout(() => console.log("2"), 100);
setTimeout(() => console.log("3"), 500);
console.log("4");
setTimeout(() => console.log("5"));

setTimeout(() => Promise.resolve(console.log("6")), 50);

Promise.resolve(setTimeout(() => console.log("7"), 50));

setTimeout(() => console.log("8"));

Promise.resolve().then(() => console.log("9"));
Promise.resolve(console.log("10"));

// 1 4 9 5
