import * as React from "react";

interface CounterProps {
    count: number;
}

export class Counter extends React.Component<CounterProps, undefined> {
    render() {
        return <div>
            You have clicked the button <em>{this.props.count}</em> times.
        </div>;
    }
}