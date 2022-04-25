function Cardticket({ ticket }: any) {
  return (
    <div className="Cardticket">
      <img src={ticket.image} alt={ticket.name} />
      <div className="Cardticket__text">
        <div className="Cardticket__text-time">
          <p> { ticket.date} </p>
        </div>
        <div className="Cardticket__text-title">
          <h4>
            <b> {ticket.name} </b>
          </h4>
          <p>Architect & Engineer</p>
        </div>
      </div>
    </div>
  );
}

export default Cardticket;
