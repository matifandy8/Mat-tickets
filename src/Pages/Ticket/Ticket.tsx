import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/useFetch";


const Ticket = () => {
  const { id } = useParams();
  const endpoint = `tickets/${id}`;

  const { data, loading, error } = useFetch(endpoint);
  return (
    <div className="Ticket">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={data?.image} alt={data?.show} />
          <h1>{data?.show}</h1>
          <p> {data?.date} </p>
          <p>{data?.price}</p>
        </div>
      )}
    </div>
  );
};

export default Ticket;
