export default class Computer {
  constructor(data) {
    this.computer = true,
      this.name = data.name || "Computer"
    this.icon = data.icon || `<i class="far fa-circle"></i>`
  }

  get Template() {
    return this.name
  }
}