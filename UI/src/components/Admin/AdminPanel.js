import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import './AdminPanel.css'

export class AdminPanel extends Component {

    constructor(props){
        super(props)


        this.state ={

        }
        this.addStation = this.addStation.bind(this);
        this.addTrain = this.addTrain.bind(this);
        this.addTripSchedule = this.addTripSchedule.bind(this);
        this.addTrips = this.addTrips.bind(this);
    }

    addTrips(){
        this.props.history.push('/')
    }

    addTripSchedule(){
        this.props.history.push("/")
    }

    addStation(){
        this.props.history.push('/train/station/add');
    }

    addTrain(){
        this.props.history.push('train/add');
    }

    render() {
        return (
            <div>
                <h1 className="text-center">ADMIN PANEL</h1>
                <div id = "Btns">
                    <div id="NW">
                        <Button variant="primary" onClick={this.addStation}>Add Station</Button>
                    </div>
                    <div id="NE">
                        <Button variant="primary" onClick={this.addTrain}>Add Train</Button>
                    </div>
                    <div>
                        <Button variant = "primary" onCLick={this.addTrips}>Add Trips</Button>
                    </div>
                    <div>
                        <Button variant = "primary" onCLick={this.addTripSchedule}>Add Schedule</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel
