import { add } from "../main/Calculator";
import { expect } from "chai";

describe("Calculator", () => {
    it("can add zero and zero", () => {
	    expect(add(0, 0)).to.equal(0);
    });

    it("can add zero and positive integer", () => {
	    expect(add(0, 10)).to.equal(10);
	    expect(add(5,  0)).to.equal(5);
    });

    it("can add positive integers", () => {
	    expect(add(7, 12)).to.equal(19);
    });

    it("can add negative integers", () => {
	    expect(add(-7, 12)).to.equal(5);
	    expect(add(-2, -2)).to.equal(-4);
    });
});