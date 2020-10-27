import React, { Component } from 'react'

export default class DigitalClicker extends Component {

    constructor() {
        super()
        this.state = {
            timesClicked: 0
        }
    }

    incrementTimesClicked = () => {
        this.setState({
            timesClicked: this.state.timesClicked + 1
        })
    }

    render() {
        return(
            <button onClick={this.incrementTimesClicked}>
                {this.state.timesClicked}
            </button>
        )
    }

}
