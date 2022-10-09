const plusOne = (digits) => {
  const num = "" + (BigInt(digits.join("")) + 1n);
  return num.split("");
};
