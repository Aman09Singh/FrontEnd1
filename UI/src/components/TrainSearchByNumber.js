import React, { Component } from 'react'

class TrainSearchByNumber extends Component {

    constructor(props){
        super(props)

        this.state = {
                trainNumber: ''
        }
    }
    
    searchTrain = (event) =>{
        event.preventDefault();
        this.props.history.push({pathname:"/train/number",state: {"number":this.state.trainNumber}})

    }

    changeNumberHandler = (event) =>{
        this.setState({trainNumber: event.target.value})
    }

    render() {
        return (
            <div>
                <div className="container">
                    <form onSubmit={this.searchTrain}>
                        <div className="form-group">
                            <label>Enter Train Number</label>
                            <input placeholder="Train Number" name="train_number" type="number"
                            value={this.state.trainNumber} onChange={this.changeNumberHandler}></input>
                        </div>
                        <button className = "btn btn-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default TrainSearchByNumber

