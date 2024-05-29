export const generateRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

export const generateRandomIndex = (coll) => {
  const randomIndex = generateRandomNumber(0, coll.length - 1);
  return randomIndex;
};
