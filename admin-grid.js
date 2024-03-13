const adminGridType = {
  draft: 1,
  toPlanning: 2,
  toPublish: 3,
  toActive: 4,
  undeDecommision: 5,
};

const adminGridDataCounts = {
  draft: 0,
  toPlanning: 0,
  toPublish: 0,
  toActive: 0,
  undeDecommision: 0,
};

function getKeyByValue(object, value) {
  return Object.keys(object).find((key) => object[key] === value);
}

// Example usage:
const value = 3; // Value you want to find the key for
const key = getKeyByValue(adminGridType, value);
console.log(key); // Output will be "toPublish"
