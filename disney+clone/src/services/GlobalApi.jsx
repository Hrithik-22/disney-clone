import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4a7594b6b03ae31286537d059b41b24b";
const movieByGenreBaseURL =
  "https://api.themoviedb.org/3/discover/movie?api_key=4a7594b6b03ae31286537d059b41b24b";

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + api_key
);
const getMovieByGenreId = (id) =>
  axios.get(movieByGenreBaseURL + "&with_genres=" + id);
export default {
  getTrendingVideos,
  getMovieByGenreId,
};
