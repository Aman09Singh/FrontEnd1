import React, { Component } from 'react'
import SearchService from '../service/SearchService'

export class PNRSearchResult extends Component {

    constructor(props){
        super(props)

        this.state = {
            pnr : this.props.location.state.number,
            ticket: {}
        }
    }

    componentDidMount(){
        SearchService.searchTicketByPNR(this.state.pnr).then(res =>{
            this.setState({ticket: res.data})
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
                                    <th>PNR</th>
                                    <th>Date</th>
                                    <th>User ID</th>
                                    <th>Schedule</th>
                                    <th>Passengers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th>{this.state.ticket.pnr}</th>
                                    <th>{this.state.ticket.date}</th>
                                    <th>{this.state.ticket.userId}</th>
                                    <th>{this.state.ticket.tripScheduleId}</th>
                                    <th>{this.state.ticket.passenger}</th>
                                </tr>
                            </tbody>
                        </div>
                    </div>       
                </div>
            </div>
        )
    }
}

export default PNRSearchResult

