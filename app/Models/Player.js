export default class Player {
  constructor(data) {
    this.name = data.name || "Player 1"
    this.icon = data.icon || `<i class="fas fa-times"></i>`
    this.number = 1
    this.spaces = []
    this.score = 0
    this.turn = true
  }

  get Template() {
    return this.name
  }
}