import axios from 'axios'

const TICKET_BASE_URL = "http://localhost:8083/reserve/add"

class Bookservice{

    bookTicket(ticket){
        return axios.post(TICKET_BASE_URL, ticket);
    }
}


export default new Bookservice()