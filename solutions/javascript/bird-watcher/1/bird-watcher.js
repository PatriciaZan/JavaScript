// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
const birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];

export function totalBirdCount(birdsPerDay) {
let sum = 0;
  for(let i = 0; i < birdsPerDay.length; i++){
    sum += birdsPerDay[i]
  }
  return sum
}
totalBirdCount(birdsPerDay);

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */


export function birdsInWeek(birdsPerDay, week) {
  let sum = 0;
  const start = (week - 1) * 7;
  const end = start + 7;

  for(let i = start; i < end; i++){
    sum += birdsPerDay[i]
  }

  return sum
}
birdsInWeek(birdsPerDay, 2);
/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
const birdsPerDay2 = [2, 5, 0, 7, 4, 1];

export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i < birdsPerDay.length ; i += 2){
     birdsPerDay[i] += 1
  }

  return birdsPerDay
}

fixBirdCountLog(birdsPerDay2)
