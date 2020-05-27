import axios from "axios";

var os = require("os");

export default axios.create({
  baseURL: "http://" + os.hostname() + ":5566/youtubeKeywords",
  responseType: "json"
});