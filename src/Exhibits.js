const Exhibits = ({ onClick, exhibits }) => {
   return (
      <div>
         {exhibits.map(exhibit => (
            <div key={exhibit.id} >
                  <span>{exhibit.name}</span>
                  <span>{exhibit.location}</span>
                  <span>{exhibit.theme}</span>
                  <button onClick={onClick} id={exhibit.id}>[Open exhibit arts]</button>
            </div>
         ))}
      </div>
   )
};

export default Exhibits;