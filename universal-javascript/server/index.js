import BMIService from './shared/bmi.service'

const bodyMassIndex = BMIService
  .getIndex(78, 1.71)
  .toFixed(2)

console.log(bodyMassIndex)