import React, { Component } from 'react'

export class TripScheduleSearch extends Component {

    constructor(props){
        super(props)

        this.state = {
            fromStationCode: '',
            toStationCode: '',
            date: ''
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleFromChange = this.handleFromChange.bind(this);
        this.handleToChange = this.handleToChange.bind(this);
    }

    

    handleFromChange = (event) => {
        this.setState({fromStationCode: event.target.value})
    }

    handleToChange = (event) => {
        this.setState({toStationCode: event.target.value})
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value})
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <form onSubmit={this.submitEvent}>
                        <div>
                            <label>Source Station</label>
                            <input placeholder = "Source" name="fromStationCode" 
                            value = {this.state.fromStationCode} onChange = {this.handleFromChange}></input>
                        </div>
                        <div>
                            <label>Destination Station</label>
                            <input placeholder = "Destination" name = "toStationCode"
                            value = {this.state.toStationCode} onChange = {this.handleToChange}></input>
                        </div>
                        <div>
                            <label>Travel Date</label>
                            <input placeholder = "Date" name = "date" type="date"
                            value = {this.state.date} onChange = {this.handleDateChange}></input>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

export default TripScheduleSearch
