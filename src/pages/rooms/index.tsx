import './styles.css';

const Rooms = () => {
  return (
    <div className="accessibility">
      <h1 className="accessibility-header">Pokoje</h1>
      <ul id="roomList" className="accessibility-list">
        <li className="accessibility-list-item">
          <h2 className="accessibility-list-item-header">Pokój jednoosobowy</h2>
          <p className="accessibility-list-item-text">Cena: 100 zł</p>
          <p className="accessibility-list-item-text">Opis: Pokój jednoosobowy z łazienką. Idealny dla osób podróżujących samotnie.</p>
        </li>
        <li className="accessibility-list-item">
          <h2 className="accessibility-list-item-header">Pokój dwuosobowy</h2>
          <p className="accessibility-list-item-text">Cena: 150 zł</p>
          <p className="accessibility-list-item-text">Opis: Pokój dwuosobowy z łazienką. Idealny dla par lub przyjaciół.</p>
        </li>
        <li className="accessibility-list-item">
          <h2 className="accessibility-list-item-header">Apartament</h2>
          <p className="accessibility-list-item-text">Cena: 200 zł</p>
          <p className="accessibility-list-item-text">Opis: Apartament z łazienką i aneksem kuchennym. Idealny dla osób szukających luksusu i komfortu.</p>
        </li>
      </ul>
    </div>
  );
};

export default Rooms;
