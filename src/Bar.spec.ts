import 'mocha';
import {expect} from 'chai';
import * as sinon from 'sinon';
import {Bar} from "./Bar";
import {Bartender} from "./Bartender";
import {Beer} from "./Beer";

describe('BarTest', () => {
    let bar : Bar;

    before(() => {
        let bartender : Bartender = {
            getBeer() : Beer {
                return { name: "Hertog-Jan" };
            }
        };
        bar = new Bar(bartender);
    });

    it('should return Hertog-Jan', function() {
        expect(bar.getBeer().name).to.equal("Hertog-Jan");
    });

    it('should return Jupiler', function () {
        let bartender = {
            getBeer() : Beer {
                return {name:"noBeer"};
            }
        };
        let getBeerFun = sinon.stub(bartender, "getBeer");
        getBeerFun.onCall(0).returns("Jupiler");
        let anotherBar : Bar = new Bar(bartender);

        expect(anotherBar.getBeer()).to.equal("Jupiler");
    })
});