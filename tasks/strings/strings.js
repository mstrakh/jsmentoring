/**
 * 1. Write a method to reverse a string; Function should return the string 'This is not a string'
 * if a number is passed
 * @param {string} str
 */
function reverseString(str) {
  if (typeof str !== "string") {
    return 'This is not a string!';
  }
  const stringArr = str.split("");
  stringArr.reverse();
  return stringArr.join("");
}

/**
 * 1. Calculate a century by given year
 * if a number is passed
 * @param {number} year
 */
function centuryFromYear(year) {
  const yearAsInt = parseInt(year);
  centuryPart = Math.floor(yearAsInt / 100);
  const actualCentury = (yearAsInt % 2 === 0) ? centuryPart : centuryPart + 1;
  return actualCentury;
}

/**
 * Calculate count of the provided char in the string
 * @param {string} str
 * @param {string} char
 */
function strCount(str, char) {
  const stringAsArray = str.split("");
  const reducer = function (accumulator, currentValue) {
    if (currentValue === char) {
      accumulator++;
    }
    return accumulator;
  };
  return stringAsArray.reduce(reducer, 0);
}

/**
 * We need to reduce the length of the string or truncate it if it is longer
 * than the given maximum length specified and add ... to the end. If it is not that long then we keep it as is.
 * @param {string} str - the initial string
 * @param {num} num - by wht amount of chars it should be truncated
 */
function truncateString(str, num) {
  const strLength = str.length;
  if (strLength <= num) {
    return str;
  }

  const truncatedStr = str.slice(0, num);
  return `${truncatedStr}...`;
}

/**
 * replace 10 with 'ten' word
 * @param {string} text - input text
 * @return {string} - updated text
 * @example
 * console.log(replace10("231054")) // 23ten54
 */
function replace10(text) {
  const regex = /10/g;
  return text.replace(regex, 'ten');
}

/**
 * replace value in square brackets with CONFIDENTIAL
 * @param text - input text
 * @return {string} - updated string
 * @example
 * console.log(replaceConfidential("lorem [ipsum] si dolor")) // lorem [CONFIDENTIAL] si dolor
 */
function replaceConfidential(text) {
    const regex = /\[[^\]]+\]/g;
    return text.replace(regex, "[CONFIDENTIAL]");

}

module.exports = {
  reverseString,
  centuryFromYear,
  strCount,
  truncateString,
  replace10,
  replaceConfidential
};