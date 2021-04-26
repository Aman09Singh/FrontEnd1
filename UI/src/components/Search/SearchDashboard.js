import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'
import SearchService from '../../service/SearchService';
import TrainService from '../../service/TrainService';

class SearchDashboard extends Component {

    constructor(props){

        super(props)

        this.state = {

            fromStationCode: '',
            toStationCode: '',
            date: '',
            berth : '',

            trains : []
        }

        

        this.changeFromStationCodeHandler = this.changeFromStationCodeHandler.bind(this);
        this.changeToStationCodeHandler = this.changeToStationCodeHandler.bind(this);
        this.searchTrain = this.searchTrain.bind(this);
    }

    componentDidUpdate(prevProps, prevState){
        const {history} = this.props;
        if(prevState.trains !== this.state.trains){
            history.push('/train/result');
        }
    }
    //data bind 
    searchTrain = (e) => {

        e.preventDefault();

        SearchService.searchTrain(this.state.fromStationCode, this.state.toStationCode).then(res=>{
            console.log(res.data);

            localStorage.setItem("train", JSON.stringify(res.data));
            console.log(JSON.parse(localStorage.getItem("train")));

            this.setState({trains: res.data});
        })
    }

    changeFromStationCodeHandler = (event) => {
        this.setState({fromStationCode: event.target.value});
    }

    changeToStationCodeHandler = (event) => {
        this.setState({toStationCode: event.target.value});
    }

    changeDateHandler = (event) => {
        this.setState({date: event.target.value});
    }

    changeBerth = (event) => {
        this.setState({berth : event.target.value});
    }

    cancel(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <div>
                    <h1>Search DashBoard</h1>
                </div>
                <div className="container">
                    <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center" >Enter the Stations</h3>
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                    <label>Departure</label>
                                    <input placeholder="departure" name="fromStationCode" className="form-control"
                                        value={this.state.fromStationCode} onChange={this.changeFromStationCodeHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label>Destination</label>
                                    <input placeholder="destination" name="toStationCode" className="form-control"
                                        value={this.state.toStationCode} onChange={this.changeToStationCodeHandler} />
                                    </div>
                                    <div className = "form-group">
                                    <label>Date</label>
                                    <input placeholder="Date" name="date" type="date" className="form-control"
                                        value={this.state.date} onChange={this.changeDateHandler} />
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
                                    <button className="btn btn-success" onClick={this.searchTrain}>Search</button>
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


export default SearchDashboard
