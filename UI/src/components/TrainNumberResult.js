import React, { Component } from 'react'
import TrainService from '../service/TrainService'

class TrainNumberResult extends Component {

    constructor(props){
        super(props)

        this.state = {
            trainNumber: this.props.location.state.number,
           train: {}
        }
    }

    componentDidMount(){
            TrainService.getTrain(this.state.trainNumber).then(res =>{
                this.setState({train: res.data}) 
                console.log(res.data)
            })
            
    }

    render() {
        return (
            <div>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center">Train Details</h3>
                   <div className = "card-body"> 
                        <div className = "row">
                            <thead>
                                <tr>
                                    <th>Train Name</th>
                                    <th>Train Number</th>
                                    <th>Source</th>
                                    <th>Destination</th>
                                    <th>1 AC</th>
                                    <th>2 AC</th>
                                    <th>3 AC</th>
                                    <th>FC</th>
                                    <th>CC</th>
                                    <th>SL</th>
                                    <th>Duration Hrs</th>
                                    <th>Duration Mns</th>
                                    <th>Departure</th>
                                    <th>Arrival</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{this.state.train.name}</td>
                                    <td>{this.state.train.number}</td>
                                    <td>{this.state.train.fromStationCode}</td>
                                    <td>{this.state.train.toStationCode}</td>
                                    <td>{this.state.train.firstAcSeats}</td>
                                    <td>{this.state.train.secondAcSeats}</td>
                                    <td>{this.state.train.thirdAcSeats}</td>
                                    <td>{this.state.train.firstClassSeats}</td>
                                    <td>{this.state.train.chairCarSeats}</td>   
                                    <td>{this.state.train.sleeperSeats}</td> 
                                    <td>{this.state.train.durationHrs}</td>  
                                    <td>{this.state.train.durationMns}</td>
                                    <td>{this.state.train.departure}</td>
                                    <td>{this.state.train.arrival}</td>
                                </tr>
                            </tbody>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TrainNumberResult
