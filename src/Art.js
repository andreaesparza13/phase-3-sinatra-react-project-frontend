const Art = ({ title, medium, description, image_url }) => {
    return (
        <div className="w-16 h-32 bg-blue-500 border-2 border-black">
            <span>{title}</span>
            <span>{medium}</span>
            <span>{description}</span>
            <span>{image_url}</span>
        </div>
    )
}

export default Art;