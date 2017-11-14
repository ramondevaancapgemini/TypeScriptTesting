import {Bartender} from "./Bartender";
import {Beer} from "./Beer";

export class Bar {
    constructor(private bartender : Bartender) {

    }

    getBeer() : Beer {
        return this.bartender.getBeer();
    }
}