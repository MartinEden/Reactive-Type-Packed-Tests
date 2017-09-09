import * as React from "react";
import { App } from "../main/App";
import { Counter } from "../main/Counter";
import { expect } from "chai";
import { shallow } from "enzyme";

describe("App", () => {
    it("renders expected message", () => {
        const rendered = shallow(<App />);
        expect(rendered.text())
            .to.contain("Hello world from React, Webpack and TypeScript!");
    });

    it("renders 0 counter when newly constructed", () => {
        const rendered = shallow(<App />);
        expect(rendered.find(Counter).props()).to.eql({
            count: 0
        });
    });

    it("clicking button increments counter", () => {
        const rendered = shallow(<App />);
        const button = rendered.find("button");

        button.simulate("click");
        expect(rendered.find(Counter).props()).to.eql({
            count: 1
        });

        button.simulate("click");
        expect(rendered.find(Counter).props()).to.eql({
            count: 2
        });
    });
});
