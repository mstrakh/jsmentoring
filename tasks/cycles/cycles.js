/**
 * Write the function that will calculate the amount of discount
 * considering the redemption amount
 * Rules are the following:
 * - 0    - 350:  0%
 * - 351  - 1350: 15%
 * - 1351 - 2700: 30%
 * - 2701 - 6500: 45%
 * - 6501 - 9999: 60% // added additional range to cover 0 - 9999 values range
 * @param {number} redemption amount (0 - 9999)
 * @returns {number} discount in percent
 */

function calculateDiscount(redemption) {
  let discount;
  if (typeof redemption === "number") {
    redemption = (Math.floor(redemption)); // in order for number type to become integer to match rules
  } else if (typeof redemption === "string") {
    return (discount = 0);
  }

  if (redemption >= 6501 & redemption <= 9999) {
    discount = 60;
  } else if (redemption >= 2701 & redemption <= 6500) {
    discount = 45;
  } else if (redemption >= 1351 & redemption <= 2700) {
    discount = 30;
  } else if (redemption >= 351 & redemption <= 1350) {
    discount = 15;
  } else if (redemption >= 0 & redemption <= 350) {
    discount = 0;
  }
  return discount;
}

/** TODO
 * implement factorial algorithm using for, while, do..while operators
 */
{
  const i = 10; //10! = 3628800
  let factorial = 1; // 0! = 1

  // for task
  {
    factorial = 1;
    for (let k = 1; k <= i; k++) {
      factorial *= k;
    }
  }

  // while task
  {
    factorial = 1;
    let k = 1;
    while (k <= i) {
      factorial *= k;
      k++;
    }
  }

  // do..while task
  {
    factorial = 1;
    let k = 1;
    do {
      factorial *= k;
      k++;
    } while (k <= i);
  }
}

/**
 * return concatenated string from an array of substring
 */
{
  const substr = ["I", " love", " JS"];
  let result = "";

  for (let i = 0; i < substr.length; i++) {
    result += substr[i];
  }
}

/**
 * calculate a total of income of certain person
 */
{
  const personIncomes = {
    salary: 1985,
    rent: -600,
    interestOnDeposit: 250,
    otherExpences: -300
  };

  let totalIncome = 0;

  for (const key in personIncomes) {
    totalIncome += personIncomes[key];
  }
}

module.exports = calculateDiscount;
let value = 2700.1;
console.log(calculateDiscount(value));