import Cardticket from "./Cardticket";

const Tickets = () => {

    //llamada a la api que tenga los datos de los tickets
    
  return (
    <div className="Tickets">
      <div className="Tickets__searchbar">
        <input type="text" placeholder="Search for a ticket" />
      </div>
      <div className="Tickets__list">
       <Cardticket />  
       <Cardticket/>     
       <Cardticket/>     
       <Cardticket/>     
       <Cardticket/>     
       <Cardticket/>        
      </div>
    </div>
  );
};

export default Tickets;
