import React, { Component } from 'react'

export class BookingPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            tripId: '',
            date: '',
            trainId: '',
            name: '',
            age:'',
            gender:'',
            seats:''
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTrainIdChange = this.handleTrainIdChange.bind(this);
        this.handleTripChange = this.handleTripChange.bind(this);
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value})
    }

    handleTrainIdChange = (event) =>{
        this.setState({trainId : event.target.value})
    }

    handleTripChange = (event) => {
        this.setState({tripId: event.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmitEvent}>
                        <div>
                        <label>Trip Id</label>
                        <input placeholder = "Trip Id" name="tripId"
                        value = {this.state.tripId} onChange = {this.handleTripChange}></input>
                        </div>
                        <div>
                            <label>Trip Date</label>
                            <input placeholder = "Date"name = "date"
                            value = {this.state.date} onChange = {this.handleDateChange}></input>
                        </div>
                        <div>
                            <label>Train Id</label>
                            <input placeholder = "Train id" name="trainId"
                            value = {this.state.trainId} onChange = {this.handleTrainIdChange}></input>
                        </div>
                        <div>
                            <label>Name</label>
                            <input placeholder = "Name" name="name"
                            value = {this.state.name} onChange = {this.handleNameIdChange}></input>
                        </div>
                        <div>
                            <label>Age</label>
                            <input placeholder = "Age" name="age"
                            value = {this.state.age} onChange = {this.handleAgeIdChange}></input>
                        </div>
                        <div>
                            <label>Gender</label>
                            <input placeholder = "Gender" name="gender"
                            value = {this.state.gender} onChange = {this.handleGenderChange}></input>
                        </div>
                        <div>
                            <label>Seats</label>
                            <input placeholder = "Seats" name="seats"
                            value = {this.state.seats} onChange = {this.handleSeatsChange}></input>
                        </div>
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BookingPage
