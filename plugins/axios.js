import axios from "axios";

export default () => {
  axios.defaults.baseURL = "http://localhost:8000/"
}