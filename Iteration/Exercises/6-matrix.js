'use strict';

// Use nested for loop to find max value in 2d matrix
// For example max([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
// should return 9

// for (const row of matrix) {
//   for (const value of matrix) {
//     const max = Math.max(...value);
//     maxVal.push(max);
//   }
// }

// return Math.max(...maxVal);

const max = matrix => {
  let maxVal = matrix[0][0];

  for (let i = 0; i < matrix.length; i++) {
    const row = matrix[i];

    for (let j = 0; j < row.length; j++) {
      const cell = row[j];

      if (maxVal < cell) {
        maxVal = cell;
      }
    }
  }

  return maxVal;
};

module.exports = { max };
