const Art = ({ title, medium, description, image_url, artist }) => {

    return (
        <div className="flex justify-center">
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <img className="rounded-t-lg" src={image_url} alt={title}/>
                <div className="p-6">
                <h3 className="text-gray-900 text-2xl font- mb-2">{title}</h3>
                <h5 className="text-gray-800 text-lg font-medium mb-2">{artist}</h5>
                <h5 className="text-gray-800 text-lg font-medium mb-2">{medium}</h5>
                <p className="text-gray-700 text-base mb-4">
                    {description}
                </p>
                <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Explore Artist</button>
                </div>
            </div>
        </div>
    )
}

export default Art;

