import React, { Component } from 'react'
import BookService from '../service/BookService';

export class BookingPage extends Component {

    constructor(props){
        super(props)

        this.state = {
            date: '',
            trainId: '',
            name: '',
            age:'',
            gender:''
        }

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTrainIdChange = this.handleTrainIdChange.bind(this);

        this.handleAgeIdChange = this.handleAgeIdChange.bind(this);
        this.handleGenderChange = this.handleGenderChange.bind(this);
        this.handleNameIdChange = this.handleNameIdChange.bind(this);
        this.handleEmailIdChange = this.handleEmailIdChange.bind(this);
    }

    handleSubmitEvent = (e) =>{
        e.preventDefault();
    
        let ticket = {tripId: this.state.tripId, date: this.state.date, trainId: this.state.trainId, name: this.state.name,
                    age: this.state.age, gender: this.state.gender}

        BookService.bookTicket(ticket).then(res => {
            alert("ticket booked");
        })
    }

    handleEmailIdChange = (event) => {
        this.setState({emailId: event.target.value})
    }

    handleDateChange = (event) => {
        this.setState({date: event.target.value})
    }

    handleTrainIdChange = (event) =>{
        this.setState({trainId : event.target.value})
    }

   

    handleNameIdChange = (event) => {
        this.setState({name: event.target.value})
    }

    handleAgeIdChange = (event) => {
        this.setState({age: event.target.value})
    }

    handleGenderChange = (event) => {
        this.setState({gender: event.target.value})
    }

   

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.handleSubmitEvent}>
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
                            <label>Email Id</label>
                            <input placeholder = "Email id" name="emailId"
                            value = {this.state.emailId} onChange = {this.handleEmailIdChange}></input>
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
                        
                        <button className="btn btn-primary" type="submit">Submit</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default BookingPage
