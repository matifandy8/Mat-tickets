import { useEffect, useState } from "react";
import Cardticket from "./Cardticket";
import { TicketItem } from "../../../types";

const Tickets = () => {
    const [tickets, setTickets] = useState<any>([]);
    useEffect(() => {
        fetch("https://my-json-server.typicode.com/matifandy8/Mat-tickets/tickets")
            .then(response => response.json())
            .then(data => setTickets(data));
    }, []);
    
    
  return (
    <div className="Tickets">
      <div className="Tickets__searchbar">
        <input type="text" placeholder="Search for a ticket" />
      </div>
      <div className="Tickets__list">
        {tickets?.map((ticket: TicketItem) => (
            <Cardticket key={ticket._id} ticket={ticket} />
        ))}
      </div>
    </div>
  );
};

export default Tickets;
