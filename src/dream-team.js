/*jshint esversion: 8 */

import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */

 //let members = ['Olivia', 1111, 'Lily', 'Oscar', true, null];
export default function (createDreamTeam) {
  new NotImplementedError('Not implemented');
  let arr = [];
  if (createDreamTeam === null || createDreamTeam === undefined) {return false;}
  for (let i = 0; i < createDreamTeam.length; i++) {
    if (typeof createDreamTeam[i] === "string") {
      arr.push(createDreamTeam[i].trimStart()[0]);
    } 
  }
  if (arr === []) {return false;}
  let result =  arr.sort().join('').toUpperCase();
  return result.split('').sort().join('');
  
}
//createDreamTeam(members);