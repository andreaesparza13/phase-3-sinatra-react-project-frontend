const BASE_ENDPOINT_URL = 'localhost:4567'

export const getArtists = (id) => {
   fetch("http://localhost:9292/artists")
   .then(res => res.json())
}
export const getExhibits = (id) => {
   fetch("http://localhost:9292/exhibits")
   .then(res => res.json())
}
export const getArt = (id) => {
   fetch("http://localhost:9292/art")
   .then(res => res.json())
}
export const getArtsByExhibitId = (id) => {
    fetch(`http://localhost:9292/exhibits/${id}/arts`)
    .then(res => res.json())
}

export const postArt = (art) => {}
export const postArtist = (artist) => {}


