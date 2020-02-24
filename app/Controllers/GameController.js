import GameService from "../Services/GameService.js";
import store from "../store.js";

//Private
function _draw() {

  console.log();
}

//Public
export default class GameController {
  constructor() {
    store.subscribe("", _draw);
  }
}
