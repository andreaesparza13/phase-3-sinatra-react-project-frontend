import Exhibit from './Exhibit'
const Exhibits = ({ onClick, exhibits }) => {
   if (!exhibits) {
      return <div>Loading...</div>
   }

   return (
      <div className="flex flex-row flex-wrap gap-4 justify-start m-auto justify-items-start">
         {exhibits.map(exhibit => (<Exhibit exhibit={exhibit} onClick={onClick} key={exhibit.id}/>))}
      </div>
   )
};

export default Exhibits;