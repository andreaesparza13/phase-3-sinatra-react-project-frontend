import React, { useEffect } from 'react'
import Art from './Art'

export const ArtList = ({arts, artists}) => {
  if(!arts || arts.length === 0) {
    return <div>Nothing to display...</div>
  }
  return (
    <div className="flex flex-wrap justify-start">
      {arts.map(art => (
         <Art
            title={art.title}
            medium={art.medium}
            description={art.description}
            image_url={art.image_url || 'https://media3.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif'}
            artist={
              artists.find(artist => artist.id === art.artist_id).first_name
            }
            key={art.id}
         />)
      )}
    </div>
  )
}

export default ArtList;
