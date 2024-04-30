// to-do

/**
 * Formats a number to a string with desired delimiters and currency
 * @param {number} number
 * @param {string} delimiter
 * @param {string} decimals
 * @param {string} currency
 * @returns {string}
 */
export const numberFormatter = (
  number,
  delimiter,
  currency = "",
  decimals = false
) => {
  return (
    (currency ? `${currency} ` : "") +
    (decimals ? number.toFixed(2) : String(Math.floor(number))).replace(
      /\B(?=(\d{3})+(?!\d))/g,
      delimiter
    )
  );
};

/**
 *
 * @param {string} numberString
 * @returns {number}
 */
export const extractDigits = (numberString) => {
  return Number(numberString.replace(/\D/g, ""));
};