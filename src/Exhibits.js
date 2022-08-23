const Exhibits = ({ onClick, exhibits }) => {
   console.log(exhibits)
   return (
      <div>
         {exhibits.map(exhibit => (
            <div onClick={onClick} id={exhibit.id}>
                  <span>{exhibit.name}</span>
                  <span>{exhibit.location}</span>
                  <span>{exhibit.theme}</span>
            </div>
         ))}
      </div>
   )
};

export default Exhibits;