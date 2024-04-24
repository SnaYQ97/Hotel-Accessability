import './styles.css';

const About = () => {
  return (
    <div className="about-us">
      <h1 className="about-title">O nas</h1>
      <section className="about-section">
        <h2 className="section-title">Historia</h2>
        <p className="section-content">Tutaj możesz umieścić historię hotelu.</p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Misja</h2>
        <p className="section-content">Tutaj możesz umieścić misję hotelu.</p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Wizja</h2>
        <p className="section-content">Tutaj możesz umieścić wizję hotelu.</p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Wartości</h2>
        <p className="section-content">Tutaj możesz umieścić wartości hotelu.</p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Zespół zarządzający</h2>
        <p className="section-content">Tutaj możesz umieścić informacje o zespole zarządzającym hotelu.</p>
      </section>
      <section className="about-section">
        <h2 className="section-title">Nagrody i wyróżnienia</h2>
        <p className="section-content">Tutaj możesz umieścić informacje o nagrodach i wyróżnieniach, które otrzymał hotel.</p>
      </section>
    </div>
  );
}

export default About;
