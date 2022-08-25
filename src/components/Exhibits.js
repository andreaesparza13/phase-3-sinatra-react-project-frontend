import Exhibit from './Exhibit'
const Exhibits = ({ onClick, exhibits }) => {
   if (!exhibits) {
      return <div>Loading...</div>
   }

   return (
      <div className="flex flex-wrap justify-start">
         {exhibits.map(exhibit => (<Exhibit exhibit={exhibit} onClick={onClick} key={exhibit.id}/>))}
      </div>
   )
};

export default Exhibits;