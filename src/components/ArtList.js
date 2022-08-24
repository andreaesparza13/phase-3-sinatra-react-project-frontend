import React from 'react'
import Art from './Art'

export const ArtList = ({arts}) => {
  if(!arts){
    return <div>Loading...</div>
  }
  return (
    <div>
      {arts.map(art => (
         <Art 
            title={art.title}
            medium={art.medium}
            description={art.description}
            image_url={art.image_url}
            key={art.id}
         />)
      )}
    </div>
  )
}

export default ArtList;
