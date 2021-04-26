import axios from 'axios'

const TRAIN_API_BASE_URL = "http://localhost:8082/train/add"
const TRAIN_GET_URL = "http://localhost:8082/train/get"

class TrainService{
    
    addTrain(train){
        return axios.post(TRAIN_API_BASE_URL, train);
    }

    getTrain(number){
        return axios.get(TRAIN_GET_URL + '/' + number);
    }
    
}

export default new TrainService()