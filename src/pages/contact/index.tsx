import './styles.css';

const Kontakt = () => {
  return (
    <div className="contact">
      <h1>Kontakt</h1>
      <p>Tutaj możesz umieścić informacje kontaktowe do hotelu.</p>

      <section>
        <h2>Adres</h2>
        <p>Ulica Hotelowa 1, 00-000 Miasto</p>
      </section>

      <section>
        <h2>Telefon</h2>
        <p>+48 123 456 789</p>
      </section>

      <section>
        <h2>E-mail</h2>
        <p>kontakt@hotel.pl</p>
      </section>

      <section>
        <h2>Formularz kontaktowy</h2>
        <form action="/submit_form" method="post">
          <label htmlFor="name">Imię i nazwisko:</label><br />
          <input type="text" id="name" name="name" /><br />
          <label htmlFor="email">E-mail:</label><br />
          <input type="email" id="email" name="email" /><br />
          <label htmlFor="message">Wiadomość:</label><br />
          <textarea id="message" name="message"></textarea><br />
          <input type="submit" value="Wyślij" />
        </form>
      </section>
    </div>
  );
}

export default Kontakt;
