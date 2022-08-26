import { Link } from 'react-router-dom'

const Art = ({ key, title, medium, description, image_url, artist, handleClick }) => {

    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm p-6 m-6">
            <img className="rounded-t-lg" src={image_url} alt={title}/>
            <div className="p-6">
            <h3 className="text-gray-900 text-2xl font-medium mb-2">{title}</h3>
            <h5 className="text-gray-800 text-lg font-medium mb-2">{artist}</h5>
            <h5 className="text-gray-800 text-lg font-medium mb-2">{medium}</h5>
            <p className="text-gray-700 text-base mb-4">{description}</p>
            <Link to="/artists/arts">
            <button id={key} onClick={handleClick} type="button" className="inline-block px-6 py-2.5 bg-white-600 text-gray-900 font-medium text-sm leading-tight uppercase">Explore Artist</button>
            </Link>
            </div>
        </div>
    )
}

export default Art;