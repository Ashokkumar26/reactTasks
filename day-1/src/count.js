import React from 'react'

class Count extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    countHandler = () => {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (<div>
            <h1>Counter - {this.state.count}</h1>
            <button onClick={this.countHandler}>Count</button>
        </div>)
    }
}
export default Count