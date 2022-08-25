import React from 'react'
import Art from './Art'

export const ArtList = ({arts, artists}) => {
  if(!arts || arts.length === 0) {
    return <div>Nothing to display...</div>
  }

  return (
    <div className="flex flex-row">
      {arts.map(art => 
        (
         <Art
            title={art.title}
            medium={art.medium}
            description={art.description}
            image_url={art.image_url}
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
