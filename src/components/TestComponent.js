import React, { Component } from 'react';

class Test extends Component {

    state = {
        count: 0
    }

    componentDidMount() {
        console.log(this.props);
    }

    countHander = () => {
        const count = this.state.count + 1;

        this.setState({
            count: count
        })
    }

    render() {
        return (
            <div>
                <h1>React Module 101</h1>
                <p>Author : {this.props.name}</p>
                <p onClick={(e) => this.countHander()}>Click to increment count : {this.state.count}</p>
            </div>
        );
    }
}


export default Test;