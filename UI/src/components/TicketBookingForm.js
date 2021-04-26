import React, { Component } from 'react'

class TicketBookingForm extends Component {

    constructor(props){
        super(props);

        this.state = {

            fromStationCode: '',
            toStationCode: '',
            trainId: '',
            date: '',
            name: '',
            age: '',
            berth: '',
            gender: ''
        }

        this.bookTicket = this.bookTicket.bind(this);
    }

    bookTicket(){
        //make this event handler
    }

    changeFromStationHandler = (event) => {
        this.setState({fromStationCode: event.target.value});
    }

    changeToStationHandler = (event) => {
        this.setState({toStationCode: event.target.value});
    }

    changeTrainIdHandler = (event) => {
        this.setState({trainId: event.target.value});
    }

    changeDateHandler = (event) => {
        this.setState({date: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeAgeHandler = (event) => {
        this.setState({age: event.target.value});
    }

    changeBerth = (event) => {
        this.setState({berth: event.target.value});
    }

    changeGender = (event) => {
        this.setState({gender: event.target.value});
    }

    cancel(){
        this.props.history.push('/user')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Ticket Form</h3>
                            <div className = "card-body">
                                <form>
                                <div className="form-group">
                                <label>Departure</label>
                                <input placeholder = "Departure Station" name="fromStationCode" className="form-control"
                                value={this.state.fromStationCode} onChange={this.changeFromStationHandler} />
                                </div>
                                <div className="form-group">
                                <label>Destination</label>
                                <input placeholder = "Destination Station" name="toStationCode" className="form-control"
                                value={this.state.toStationCode} onChange={this.changeToStationHandler} />
                                </div>
                                <div className="form-group">
                                <label>Train Number</label>
                                <input placeholder = "Train Number" name="trainId"  className="form-control"
                                value={this.state.trainId} onChange={this.changeTrainIdHandler} />
                                </div>
                                <div className="form-group">
                                <label>Date</label>
                                <input placeholder = "Date" name="fromStationCode" type = "date" className="form-control"
                                value={this.state.date} onChange={this.changeDateHandler} />
                                </div>
                                <div className="form-group">
                                <label>Passenger Name 1</label>
                                <input placeholder = "Name" name="name" className="form-control"
                                value={this.state.name} onChange={this.changeNameHandler} />
                                </div>
                                <div className="form-group">
                                <label>Age</label>
                                <input placeholder = "Age" name="age" className="form-control"
                                value={this.state.age} onChange={this.changeAgeHandler} />
                                </div>
                                <div className="form-group">
                                <label for = "berth"> Select Berth</label>
                                    <select name="berth" id="berth" value={this.state.berth} onChange={this.changeBerth}>
                                        <option value = "FirstAc">First AC</option>
                                        <option value = "SecondAC">Second AC</option>
                                        <option value = "ThirdAC">Third AC</option>
                                        <option value = "FirstClass">First Class</option>
                                        <option value = "ChairCar">Chair Car</option>
                                        <option value = "Sleeper">Sleeper</option>
                                    </select>
                                </div>
                                <div>
                                <label for="Gender">Choose a gender:</label>
                                    <select name="gender" id="gender" value={this.state.gender} onChange={this.changeGender}>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                </form>

                                <button className = "btn btn-success" onClick={this.bookTicket}>Book</button>
                                <button className="btn btn-danger" onClick = {this.cancel.bind(this)} 
                                    style = {{marginLeft: "10px"}}>Go Back</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TicketBookingForm
