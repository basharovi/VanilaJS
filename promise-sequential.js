const delayedColorChange = (color, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      document.body.style.backgroundColor = color;
      resolve();
    }, delay);
  });
};

const executePromise = () => {
  delayedColorChange("red", 1000)
    .then(() => delayedColorChange("green", 1000))
    .then(() => delayedColorChange("yellow", 1000));
};

const executePromiseParallel = () => {
  let tasks = [
    delayedColorChange("red", 1000),
    delayedColorChange("green", 1500),
    delayedColorChange("yellow", 3000),
  ];

  console.log(new Date().toTimeString());

  Promise.all(tasks).then(function () {
    console.log(new Date().toTimeString());
  });
};

const executePromiseAsync = async () => {
  await delayedColorChange("red", 1000);
  await delayedColorChange("green", 1000);
  await delayedColorChange("yellow", 1000);
};

// executePromise();
// executePromiseAsync();
executePromiseParallel();
