import * as React from "react";
import * as ReactDOM from "react-dom";
import { Counter } from "./Counter";

require('file-loader?name=[name].[ext]!./index.html');

interface AppState {
    count: number;
}

class App extends React.Component<undefined, AppState> {
    constructor() {
        super();
        this.state = { count: 0 };
        this.onClickButton = this.onClickButton.bind(this);
    }

    onClickButton() {
        this.setState((prevState: AppState) => ({ 
            count: prevState.count + 1 
        }));
    }

    render() {
        return <div>
	        <div>Hello world from React, Webpack and TypeScript!</div>
            <Counter count={this.state.count} />
            <button onClick={this.onClickButton}>Click me</button>
        </div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react")
);