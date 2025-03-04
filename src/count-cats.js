/*jshint esversion: 8 */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
   countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
export default function (countCats) {
  new NotImplementedError('Not implemented');
  
  let n = 0;
  for (let i = 0; i < countCats.length; i++){
    for(var j=0; j < countCats[i].length; j++) {
      if (countCats[i][j] === `^^`) 
      {n++;}
    }
  }
  return n;
}
