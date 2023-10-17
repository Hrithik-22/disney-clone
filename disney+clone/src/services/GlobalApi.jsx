import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3/";
const api_key = "97f852b963f5e4bdbd788ccd3dd18697";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key" + api_key
);

export default { getTrendingVideos };
