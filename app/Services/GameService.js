import { ProxyState } from "../AppState.js";
import Character from "../Models/Character.js";


class GameService {
    constructor() {
        console.log("Hello from the game service");
    }

    slap() {
        console.log("Slapped from the game service");
        let tempCharacter = ProxyState.character
        tempCharacter.health--
        ProxyState.character = tempCharacter
    }

    punch() {
        console.log("Punched from the game service");
        let tempCharacter = ProxyState.character
        tempCharacter.health-=5
        ProxyState.character = tempCharacter
    }

    reset() {
        ProxyState.character = new Character()
    }

}

export const gameService = new GameService()