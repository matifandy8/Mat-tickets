import { useEffect, useState } from "react";
import Cardticket from "./Cardticket";
import { TicketItem } from "../../../types";

const Tickets = () => {
  const [tickets, setTickets] = useState<TicketItem[]>([]);
  const [FilteredTickets, setFilteredTickets] = useState<TicketItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState("");

  const onSubmit = (evt: any) => {
    evt.preventDefault();
    setLoading(true);
    if (text === "") {
      setText("");
      setLoading(false);
      setFilteredTickets(tickets);
    } else {
      const Search = fetch(
        `https://my-json-server.typicode.com/matifandy8/Mat-tickets/tickets/?q=${text}`
      );
      setLoading(false);
      Search.then((res) => res.json()).then((data) => {
        setFilteredTickets(data);
      });

      setText("");
    }
  };

  const onChange = (evt: any) => setText(evt.target.value);

  const getTickets = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/matifandy8/Mat-tickets/tickets"
    );
    const data = await response.json();
    setLoading(false);
    setFilteredTickets(data);
    setTickets(data);
  };

  useEffect(() => {
    getTickets();
  }, []);

  console.log(tickets);

  return (
    <div className="Tickets">
      <div>
        <form className="Tickets__searchbar" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Search for a ticket"
            value={text}
            onChange={onChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="Tickets__list">
        {loading ? (
          <div>Loading...</div>
        ) : (
          FilteredTickets.map((ticket: TicketItem) => (
            <Cardticket key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tickets;
