export default class Player {
  constructor(data) {
    this.name = data.name || "Player 1"
    this.icon = data.icon || `<i class="fas fa-times"></i>`
  }

  get Template() {
    return this.name
  }
}