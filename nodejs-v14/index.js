import BMIService from './bmi.service.js' // For ES6 module it must have the extension

const bodyMassIndex = BMIService
  .getIndex(76, 1.71)
  .toFixed(2)

console.log(`BMI: ${ bodyMassIndex }`)