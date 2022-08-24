const BASE_ENDPOINT_URL = "localhost:4567";

const getArtists = (id) => {
  fetch("http://localhost:9292/artists").then((res) => res.json());
};
function getExhibits()  {
  fetch("http://localhost:9292/exhibits")
};

const getArt = (id) => {
  fetch("http://localhost:9292/art").then((res) => res.json());
};
const getArtsByExhibitId = (id) => {
  fetch(`http://localhost:9292/exhibits/${id}/arts`).then((res) => res.json());
};

const postArt = (art) => {};
const postArtist = (artist) => {};

export { getArtists, getExhibits, getArt, getArtsByExhibitId, postArt, postArtist };
