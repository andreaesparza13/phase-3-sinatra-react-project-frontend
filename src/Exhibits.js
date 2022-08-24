const Exhibits = ({ onClick, exhibits }) => {
   if (!exhibits) {
      return <div>Loading...</div>
   }

   return (
      <div class="flex gap-12  ">
         {exhibits.map(exhibit => (
               <div className="relative w-64 h-64 bg-indigo-500 ml-2 mr-2 mt-6 mb-6 gap-12" key={exhibit.id} >
                  <ul className="m-6">
                     <li>{"Exhibit name: " + exhibit.name}</li>
                     <li>{"Location: " + exhibit.location}</li>
                     <li>{"Theme: " + exhibit.theme}</li>
                  </ul>
                  <div className="absolute left-4 bottom-2">
                     <button onClick={onClick} id={exhibit.id}>[Open exhibit arts]</button>
                  </div>
               </div>
         ))}
      </div>
   )
};

export default Exhibits;