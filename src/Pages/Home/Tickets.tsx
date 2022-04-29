import {  useState } from "react";
import Cardticket from "./Cardticket";
import { TicketItem } from "../../../types";
import { useFetch } from "../../Hooks/useFetch";

const Tickets = () => {
  const [endpoint, setEndpoint] = useState("tickets");
  const [text, setText] = useState("");

  const { data, loading, error } = useFetch(endpoint);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEndpoint(`tickets?q=${text}`);
  };


  return (
    <div className="Tickets">
      <div>
        <form className="Tickets__searchbar" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for a ticket"
            value={text}
            onChange={handleChange}
          />
          <button>Search</button>
        </form>
      </div>
      <div className="Tickets__list">
        {loading ? (
          <div>Loading...</div>
        ) : (
          data?.map((ticket: TicketItem) => (
            <Cardticket key={ticket.id} ticket={ticket} />
          ))
        )}
      </div>
    </div>
  );
};

export default Tickets;
