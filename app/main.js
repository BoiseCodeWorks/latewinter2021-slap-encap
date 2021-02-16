import ValuesController from "./Controllers/ValuesController.js";
import GameController from "./Controllers/GameController.js";

class App {
  valuesController = new ValuesController();
  gameController = new GameController()
}

window["app"] = new App();
