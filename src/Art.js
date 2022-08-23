const Art = ({ title, medium, description, image_url }) => {
    return (
        <div className="p-2 m-auto w-64 h-xl bg-blue-500 border-2 border-black">
            <ul>
                <span>[Click to view Artist]</span>
                <li>{title}</li>
                <br/>
                <li>{medium}</li>
                <br/>
                <li>{description}</li>
                <br/>
            </ul>
            <img src={image_url} alt="art photo"/>
        </div>
    )
}

export default Art;