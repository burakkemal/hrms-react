import axios from "axios"
const headers = { "Content-Type": "application/json", "Accept": 'application/json' }
export default class JobAdService {

    getJobAd() {
        return axios.get("http://localhost:8080/api/jobadvertisement/getAll")
    }
    add(values) {
        return axios.post("http://localhost:8080/api/jobadvertisement/add", values, { headers: headers });
    }
}