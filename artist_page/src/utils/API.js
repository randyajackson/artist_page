import axios from "axios";

export default axios.create({
  baseURL: "http://10.0.0.84:5566/artists",
  responseType: "json"
});