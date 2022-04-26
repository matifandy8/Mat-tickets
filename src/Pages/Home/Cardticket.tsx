function Cardticket({ ticket }: any) {
  return (
    <div className="Cardticket">
      <img src={ticket.image} alt={ticket.name} />
      <div className="Cardticket__text">
        <div className="Cardticket__text-time">
          <p> {ticket.date} </p>
        </div>
        <div className="Cardticket__text-title">
          <h4>
            <b>{ticket.show}</b>
          </h4>
          <p>$ {ticket.price}</p>
        </div>
      </div>
    </div>
  );
}

export default Cardticket;
