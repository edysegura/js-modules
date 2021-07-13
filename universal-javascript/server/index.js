import BMIService from '../shared/bmi.service.js'

const height = 1.71
const weight = 71

const bodyMassIndex = BMIService
  .getIndex(weight, height)
  .toFixed(2)


console.log(`Height: ${height}`)
console.log(`Weight: ${weight}`)
console.log(`BMI: ${bodyMassIndex}`)
