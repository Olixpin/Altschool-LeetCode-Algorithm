const plusOne = (digits) => {
  if (digits.length > 15) {
    const num = "" + (BigInt(digits.join("")) + 1n);
    return num.split("");
  }
  const num = "" + (+digits.join("") + 1);
  return num.split("");
};
