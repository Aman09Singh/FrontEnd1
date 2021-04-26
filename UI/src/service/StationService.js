import axios from 'axios'

const STATION_API_BASE_URL = "http://localhost:8084/train/station/add"

class StationService{

    addStation(station){

        return axios.post(STATION_API_BASE_URL, station);
    }
}

export default new StationService() 