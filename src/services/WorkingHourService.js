import axios from "axios"

export default class WorkingHourService {
    getWorkingHour() {
        return axios.get("http://localhost:8080/api/workingtimes/getAll")
    }
}