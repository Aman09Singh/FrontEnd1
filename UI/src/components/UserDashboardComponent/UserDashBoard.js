import React, { Component } from 'react'
import Button from 'react-bootstrap/esm/Button'
import {Navbar, Form, FormControl, Nav, NavDropdown} from 'react-bootstrap'

class UserDashBoard extends Component {

    constructor(props){
        super(props)

        this.state = {

        }
        this.searchTrain = this.searchTrain.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.findTrain = this.findTrain.bind(this);
        this.findPNR = this.findPNR.bind(this);
    }

    searchTrain(){
        this.props.history.push('/train/search');
    }

    updateUser(){
        this.props.history.push('/ticket/book');
    }

    findTrain(){
        this.props.history.push('/train/s')
    }

    findPNR(){
        this.props.history.push('/user/search/pnr')
    }

    render() {
        return (
            <div>
                <div id="container">
                    <nav>
                    <Button variant="primary" onClick={this.searchTrain}>Search Train</Button>
                    </nav>
                    <nav>
                    <Button variant = "primary" onClick={this.findTrain}>Find Train</Button>
                    </nav>
                    <nav>
                    <Button variant = "primary" onCLick ={this.findPNR}>Check PNR</Button>
                    </nav>
                    <nav>
                    <Button variant = "primary" onClick={this.updateUser}>Update Details</Button>
                    </nav>
                </div>
            </div>
        )
    }
}

export default UserDashBoard
