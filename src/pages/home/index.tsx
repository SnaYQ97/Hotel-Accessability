import "./styles.css";
import room1 from "./../../assets/images/rooms/room1.jpg";
import room2 from "./../../assets/images/rooms/room2.jpg";
import room3 from "./../../assets/images/rooms/room3.jpg";


const Home = () => {

  return (
    <main>
      <section className="hero">
        <div className="overlay"></div>
        <h1>Luksusowy Hotel Plaza</h1>
        <p>Witamy w naszym pięciogwiazdkowym hotelu, gdzie komfort spotyka elegancję.</p>
        <button>Rezerwuj Teraz</button>
      </section>
      <section className="about">
        <h2>O nas</h2>
        <p>Hotel Plaza to nie tylko miejsce do noclegu, to oaza luksusu i relaksu dla każdego podróżnika.
          Nasza
          oferta obejmuje wyjątkowe pokoje, ekskluzywne spa, doskonałą restaurację i wiele więcej.</p>
      </section>
      <section className="rooms">
        <div className="room">
          <img src={room1} alt="Pokój Luksusowy"/>
          <div className={'description'}>
            <h3>Pokój Standardowy</h3>
            <p>Przestronny pokój z łazienką i balkonem. Idealny dla osób, które cenią sobie wygodę i
              elegancję.</p>
          </div>
        </div>
        <div className="room">
          <img src={room2} alt="Pokój Luksusowy"/>
          <div className={'description'}>
            <h3>Pokój Luksusowy</h3>
            <p>Przestronny pokój z panoramicznym widokiem na morze. Wyposażony w najnowocześniejsze
              udogodnienia, zapewniający komfort na najwyższym poziomie.</p>
          </div>
        </div>
        <div className="room">
          <img src={room3} alt="Pokój Deluxe"/>
          <div className={'description'}>
            <h3>Pokój Deluxe</h3>
            <p>Stylowy pokój z eleganckim wystrojem i wygodnym łóżkiem king-size. Doskonały wybór dla
              wymagających gości, którzy cenią sobie wyjątkowy komfort.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home;
