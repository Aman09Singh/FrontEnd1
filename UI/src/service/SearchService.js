import axios from 'axios'

const SEARCH_API_BASE_URL = "http://localhost:8082/train/search"

const SEARCH_PNR_BASE_URL = "http://localhost:8083/booking/get"



class SearchService{

    searchTrain(fromCode, toCode){
        return axios.get(SEARCH_API_BASE_URL + '/' + fromCode + '/' + toCode);
    }

    searchTicketByPNR(pnr){
        return axios.get(SEARCH_PNR_BASE_URL + '/' + pnr);
    }
}

export default new SearchService();