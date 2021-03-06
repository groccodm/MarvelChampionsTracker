import Heroes from "../data/heroes.json";
import Villains from "../data/villains.json";

export default class CardService {
    get(type)
    {
        switch (type) {
            case "hero":
                return Heroes;
            case "villain":
                return Villains;
            default:
                return null;
        }
    }
}