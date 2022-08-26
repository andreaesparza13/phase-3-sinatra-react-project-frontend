import { Link } from 'react-router-dom'

const Art = ({id, title, medium, description, image_url, artist, handleClick }) => {
    return (
        <div className="rounded-lg shadow-lg bg-white max-w-sm p-6 m-6 ml-auto mr-auto">
            <img className="rounded-t-lg" src={image_url} alt={title}/>
            <div className="p-6">
                <h3 className="text-gray-900 text-2xl font-medium mb-2">{title}</h3>
                <h5 className="text-gray-800 text-lg font-medium mb-2">{artist}</h5>
                <h5 className="text-gray-800 text-lg font-medium mb-2">{medium}</h5>
                <p className="text-gray-700 text-base mb-4">{description}</p>
                <br />
                <Link to="/artists/arts">
                    <span role="button" className="ml-0 text-blue-600 hover:underline text-left" id={id} onClick={handleClick}>Explore Artist</span>
                </Link>
            </div>
        </div>
    )
}

export default Art;