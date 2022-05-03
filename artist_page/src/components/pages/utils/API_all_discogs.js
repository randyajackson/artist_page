import axios from "axios";

var os = require("os");

export default axios.create({
  baseURL: "http://intrinse.net:5566/discogs",
  responseType: "json"
});
