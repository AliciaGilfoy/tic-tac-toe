export default class Computer {
  constructor(data) {
    this.computer = true
    this.name = data.name || "Computer"
    this.icon = data.icon || `<i class="far fa-circle"></i>`
    this.number = 2
    this.spaces = []
    this.score = 0
    this.turn = false
  }

  get Template() {
    return this.name
  }
}