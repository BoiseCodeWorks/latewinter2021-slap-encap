import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import Character from "./Models/Character.js";

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []
  character = new Character()
  health = 100
  // prolly do dis right hurr (no model)
  money = 0
  snacks = []
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
