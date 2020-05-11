import axios from 'axios';

export default () => {
    return axios.create({
        baseURL: "http://localhost:5000/",
        headers: {
            authorization: localStorage.getItem("token")
        }
    });
}