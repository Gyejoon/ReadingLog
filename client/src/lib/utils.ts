export const starCountCalculate = (star: number) => {
  const result: number[] = [];
  let resultSum = 0;

  for (let i = 0; i < 5; i++) {
    if (resultSum < star) {
      if (star - resultSum >= 1) {
        result.push(1);
        resultSum++;
      } else {
        result.push(0.5);
        resultSum += 0.5;
      }
    } else {
      result.push(0);
    }
  }

  return result;
};
