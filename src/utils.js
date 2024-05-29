const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const generateRandomIndex = (coll) => {
  const randomIndex = generateRandomNumber(0, coll.length - 1);
  return randomIndex;
};

export { generateRandomNumber, generateRandomIndex };
