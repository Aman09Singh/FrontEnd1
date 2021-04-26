import React, { Component } from 'react'
import StationService from '../service/StationService';

class AddStation extends Component {

    constructor(props){
        super(props)

        this.state = {
            id: '',
            code: '',
            name: '',
            zone: '',
            state: ''
        }

        this.changeIdHandler = this.changeIdHandler.bind(this);
        this.changeCodeHandler = this.changeCodeHandler.bind(this);
        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeZoneHandler = this.changeZoneHandler.bind(this);
        this.changeStateHandler = this.changeStateHandler.bind(this);
        this.addStation = this.addStation.bind(this);
    }

    addStation = (e) => {
        e.preventDefault();
        let station = {id: this.state.id, code: this.state.code, name: this.state.name, zone: this.state.zone, state: this.state.state};

        StationService.addStation(station).then(res =>{
            this.props.history.push("/");
        })        
    }

    changeIdHandler = (event) =>{
        this.setState({id: event.target.value});
    }

    changeCodeHandler = (event) => {
        this.setState({code: event.target.value});
    }

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeZoneHandler = (event) => {
        this.setState({zone: event.target.value});
    }
    
    changeStateHandler =(event) => {
        this.setState({state: event.target.value});
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
                            <h3 className="text-center" >Add Station</h3>
                            <div className = "card-body">
                                <form>
                                    <div className="form-group">
                                        <label>Identity</label>
                                        <input placeholder = "id" name="id" className="form-control"
                                            value={this.state.id} onChange={this.changeIdHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Station Code</label>
                                        <input placeholder = "code" name="code" className="form-control"
                                            value={this.state.code} onChange={this.changeCodeHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Station Name</label>
                                        <input placeholder = "name" name="name" className="form-control"
                                            value={this.state.name} onChange={this.changeNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Station Zone</label>
                                        <input placeholder = "zone" name="zone" className="form-control"
                                            value={this.state.zone} onChange={this.changeZoneHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label>Station State</label>
                                        <input placeholder = "state" name="state" className="form-control"
                                            value={this.state.state} onChange={this.changeStateHandler} />
                                    </div>

                                    <button className = "btn btn-success" onClick={this.addStation}>Save</button>
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

export default AddStation
