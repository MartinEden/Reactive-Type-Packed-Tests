import * as React from "react";
import { Counter } from "../main/Counter";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("Counter", () => {
    it("renders 0 when 0 is passed in", () => {
        const rendered = shallow(<Counter count={0} />);
        expect(rendered.find("em").text()).to.equal("0");
    });

    it("renders 1000 when 1000 is passed in", () => {
        const rendered = shallow(<Counter count={1000} />);
        expect(rendered.find("em").text()).to.equal("1000");
    });
});