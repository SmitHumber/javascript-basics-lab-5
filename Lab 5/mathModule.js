// Math Module

import { toUpperCase } from "./stringModule.js";

export function addAndLogUpper(a,b) {

    let upperCase = "hello";

    let lowerCase = "HELLO";
    
    console.log(upperCase.toUpperCase(upperCase.toString()));

    console.log(lowerCase.toLowerCase(lowerCase.toString()));
}

export function add(a, b) {
    return a + b;
}
export function subtract(a, b){
    return a - b;
}

export default function multiply(a, b){
    return a * b;
}

