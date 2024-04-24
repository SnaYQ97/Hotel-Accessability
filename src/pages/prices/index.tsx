import './styles.css';

const Prices = () => {
  return (
    <div className="price-list">
      <h1>Cennik</h1>
      <p>Nasze ceny są konkurencyjne i dostosowane do różnych budżetów. Oferujemy różne pokoje i usługi, aby spełnić oczekiwania naszych gości.</p>
      <table>
        <thead>
          <tr>
            <th>Pokój</th>
            <th>Cena</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pokój jednoosobowy</td>
            <td>100 zł</td>
          </tr>
          <tr>
            <td>Pokój dwuosobowy</td>
            <td>150 zł</td>
          </tr>
          <tr>
            <td>Apartament</td>
            <td>200 zł</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Prices;
