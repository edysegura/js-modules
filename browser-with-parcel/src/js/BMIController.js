import BMIService from './BMIService.js'

export default class BMIController {
  static init() {
    BMIController.setForm()
  }

  static setForm() {
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
      event.preventDefault()
      BMIController.calculateBMI(form)
    })
  }

  static calculateBMI(form) {
    const weight = parseFloat(form.weight.value)
    const height = parseFloat(form.height.value)

    const result = BMIService.getIndex(weight, height)

    BMIController.showResult(result)
  }

  static showResult(result) {
    const spanResult = document.querySelector('.result')
    spanResult.textContent = result.toFixed(2)
  }
}
