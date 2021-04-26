import React, { Component } from 'react'

class PNRSearch extends Component {

    constructor(props){
        super(props)

        this.state = {
            pnr :''
        }
    }

    submitevent = (event) => {
        event.preventDefault();
        this.props.history.push({pathname: '/pnr/result', state: {"number":this.state.pnr}})
    }

    changeHandler = (event) => {
        this.setState({pnr: event.target.value})
    }

    render() {
        return (
            <div>
                <div className = "container">
                    <form onSubmit = {this.submitevent}>
                        <div className="form-group">
                            <label>Enter the PNR Number</label>
                            <input placeholder="PNR number" name="pnr" 
                            value = {this.state.pnr} onChange={this.changeHandler}></input>
                        </div>
                        <button className = "btn btn-success" type="submit">Search</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default PNRSearch
