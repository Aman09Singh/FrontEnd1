import React, { Component } from 'react'
import TrainService from '../service/TrainService';

class AddTrain extends Component {

    constructor(props){
        super(props)

        this.state = {
            
            id: '',
            number: '',
            name: '',
            fromStationCode: '',
            toStationCode: '',
            firstAcSeats: '',
            secondAcSeats: '',
            thirdAcSeats: '',
            firstClassSeats: '',
            chairCarSeats: '',
            sleeperSeats: '',
            durationHrs: '',
            durationMns: '',
            departure: '',
            arrival: '',
            distance: ''

        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeNumberHandler = this.changeNumberHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDepartureHandler = this.changeDepartureHandler.bind(this);
        this.changeDestinationHandler = this.changeDestinationHandler.bind(this);
        this.changeFirstAcSeatsHandler = this.changeFirstAcSeatsHandler.bind(this);
        this.changeSecondAcSeatsHandler = this.changeSecondAcSeatsHandler.bind(this);
        this.changeThirdAcSeatsHandler = this.changeThirdAcSeatsHandler.bind(this);
        this.changeFirstClassSeatsHandler = this.changeFirstClassSeatsHandler.bind(this);
        this.changeChairCarSeatsHandler = this.changeChairCarSeatsHandler.bind(this);
        this.changeSleeperSeatsHandler = this.changeSleeperSeatsHandler.bind(this);
        this.changeDurationHrsHandler = this.changeDurationHrsHandler.bind(this);
        this.changeDurationMnsHandler = this.changeDurationMnsHandler.bind(this);
        this.changeDistanceHandler = this.changeDistanceHandler.bind(this);
        this.addTrain = this.addTrain.bind(this);
    }

    addTrain = (e) => {
        e.preventDefault();
        let Train = {id: this.state.id, number:this.state.number, name: this.state.name, fromStationCode: this.state.fromStationCode, 
                        toStationCode: this.state.toStationCode, firstAcSeats: this.state.firstAcSeats, secondAcSeats: this.state.secondAcSeats,
                        thirdAcSeats: this.state.thirdAcSeats, firstClassSeats: this.state.firstClassSeats, chairCarSeats: this.state.chairCarSeats,
                        sleeperSeats: this.state.sleeperSeats, durationHrs: this.state.durationHrs, durationMns: this.state.durationMns,
                        departure: this.state.departure, arrival:this.state.arrival, distance: this.state.distance }

        TrainService.addTrain(Train).then(res => {
            this.props.history.push("/");
        })
    }

    changeIdHandler = (event) => {
        this.setState({id: event.target.value})
    }

    changeNumberHandler = (event) => {
        this.setState({number: event.target.value})
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value})
    }

    changeDepartureHandler = (event) => {
        this.setState({fromStationCode: event.target.value})
    }

    changeDestinationHandler = (event) => {
        this.setState({toStationCode: event.target.value})
    }

    changeFirstAcSeatsHandler = (event) => {
        this.setState({firstAcSeats: event.target.value})
    }

    changeSecondAcSeatsHandler = (event) => {
        this.setState({secondAcSeats: event.target.value})
    }

    changeThirdAcSeatsHandler = (event) => {
        this.setState({thirdAcSeats: event.target.value})
    }

    changeFirstClassSeatsHandler = (event) => {
        this.setState({firstClassSeats: event.target.value})
    }

    changeChairCarSeatsHandler = (event) => {
        this.setState({chairCarSeats: event.target.value})
    }  

    changeSleeperSeatsHandler = (event) => {
        this.setState({sleeperSeats: event.target.value})
    }
    
    changeDurationHrsHandler = (event) => {
        this.setState({durationHrs: event.target.value})
    }

    changeDurationMnsHandler = (event) => {
        this.setState({durationMns: event.target.value})
    }
    
    changeDepartureTimeHandler = (event) => {
        this.setState({departure: event.target.value})
    }

    changeArrivalTimeHandler = (event) => {
        this.setState({arrival: event.target.value})
    }

    changeDistanceHandler = (event) => {
        this.setState({distance: event.target.value})
    }

    cancel(){
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Add Train</h3>
                            <div className = "card-body">
                            <form>
                            <div className="form-group">
                                <label>Id</label>
                                <input placeholder = "id" name="id" className="form-control"
                                value={this.state.id} onChange={this.changeIdHandler} />
                            </div>
                            <div className="form-group">
                                <label>Number</label>
                                <input placeholder = "number" name="number" className="form-control"
                                value={this.state.number} onChange={this.changeNumberHandler} />
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input placeholder = "Name" name="name" className="form-control"
                                value={this.state.name} onChange={this.changeNameHandler} />
                            </div>
                            <div className="form-group">
                                <label>Departure</label>
                                <input placeholder = "fromStationCode" name="fromStationCode" className="form-control"
                                value={this.state.fromStationCode} onChange={this.changeDepartureHandler} />
                            </div>
                            <div className="form-group">
                                <label>Destination</label>
                                <input placeholder = "toStationCode" name="toStationCode" className="form-control"
                                value={this.state.destination} onChange={this.changeDestinationHandler} />
                            </div>
                            <div className="form-group">
                                <label>First AC Seats</label>
                                <input placeholder = "firstAcSeats" name="firstAcSeats" className="form-control"
                                value={this.state.firstAcSeats} onChange={this.changeFirstAcSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Second AC Seats</label>
                                <input placeholder = "secondAcSeats" name="secondAcSeats" className="form-control"
                                value={this.state.secondAcSeats} onChange={this.changeSecondAcSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Third AC Seats</label>
                                <input placeholder = "thirdAcSeats" name="thirdAcSeats" className="form-control"
                                value={this.state.thirdAcSeats} onChange={this.changeThirdAcSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>First Class Seats</label>
                                <input placeholder = "firstClassSeats" name="firstClassSeats" className="form-control"
                                value={this.state.firstClassSeats} onChange={this.changeFirstClassSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Chair Car Seats</label>
                                <input placeholder = "chairCarSeats" name="chairCarSeats" className="form-control"
                                value={this.state.chairCarSeats} onChange={this.changeChairCarSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Sleeper Class Seats</label>
                                <input placeholder = "sleeperSeats" name="sleeperSeats" className="form-control"
                                value={this.state.sleeperSeats} onChange={this.changeSleeperSeatsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Duration Hours</label>
                                <input placeholder = "durationHrs" name="durationHrs" className="form-control"
                                value={this.state.durationHrs} onChange={this.changeDurationHrsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Duration Minutes</label>
                                <input placeholder = "durationMns" name="durationMns" className="form-control"
                                value={this.state.durationMns} onChange={this.changeDurationMnsHandler} />
                            </div>
                            <div className="form-group">
                                <label>Departure Time</label>
                                <input placeholder = "departure" name="departure" className="form-control"
                                value={this.state.departure} onChange={this.changeDepartureTimeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Arrival Time</label>
                                <input placeholder = "arrival" name="arrival" className="form-control"
                                value={this.state.arrival} onChange={this.changeArrivalTimeHandler} />
                            </div>
                            <div className="form-group">
                                <label>Distance</label>
                                <input placeholder = "distance" name="distance" className="form-control"
                                value={this.state.distance} onChange={this.changeDistanceHandler} />
                            </div>

                            <button className = "btn btn-success" onClick={this.addTrain}>Save</button>
                                    <button className = "btn btn-danger" onClick = {this.cancel.bind(this)} 
                                    style = {{marginLeft: "10px"}}>Cancel</button>
                            
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default AddTrain
