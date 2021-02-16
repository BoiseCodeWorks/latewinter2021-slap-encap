import { gameService } from '../Services/GameService.js'
import { ProxyState } from '../AppState.js';

// PRIVATE
function _draw() {
    let healthElem = document.getElementById("character-health")
    healthElem.innerText = ProxyState.character.health.toString()
}
function _doStuffWhenCharChanges() {
     console.log("Character changed");
 }


//  PUBLIC within the export
export default class GameController{
    constructor() {
        console.log("hello from the game controller")
        ProxyState.on("character",_draw)
        ProxyState.on("character",_doStuffWhenCharChanges)
    }

    slap() {
        console.log("called slap in the game controller");
        gameService.slap()
    }

    punch() {
        console.log("called punch in the game controller");
        gameService.punch()
    }

    reset() {
        gameService.reset()
    }

}