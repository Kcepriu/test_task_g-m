const ArrayColor = ["#179D2E", "#0177B8", "#F5AF23", "#F02E2C"];

export const getColor = (numColor) => {
  return ArrayColor[numColor % 4];
};
