import BMIService from '../../shared/bmi.service.js'

export default class BMIController {
  static init() {
    BMIController.setForm()
  }

  static setForm() {
    const form = document.querySelector('form')
    form.addEventListener('submit', event => {
      event.preventDefault()
      BMIController.calculateBMI(form)
    });
  }

  static calculateBMI(form) {
    let weight = parseFloat(form.weight.value)
    let height = parseFloat(form.height.value)
    let result = BMIService.getIndex(weight, height)
    BMIController.showResult(result)
  }

  static showResult(result) {
    const spanResult = document.querySelector('.result')
    spanResult.textContent = result.toFixed(2)
  }
}
