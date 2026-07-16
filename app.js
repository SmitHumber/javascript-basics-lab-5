// Importing and Using the Modules

import multiply, { add, subtract } from  './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';

import { addAndLogUpper } from './mathModule.js';




console.log('Add: ', add(5, 3));

console.log('Multiply: ', multiply(4, 5));

addAndLogUpper('LowerCase:', 10, 20);

console.log('Max: ', findMax([1, 2, 3, 4, 5]));

console.log('Reversed: ', reverseArray([1,2,3]));


