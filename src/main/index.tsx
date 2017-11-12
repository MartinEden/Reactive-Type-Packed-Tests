import * as React from "react";
import * as ReactDOM from "react-dom";

require('file-loader?name=[name].[ext]!./index.html');

class App extends React.Component<undefined, undefined> {
    render() {
	    return <div>Hello world from React, Webpack and TypeScript!</div>;
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("react")
);