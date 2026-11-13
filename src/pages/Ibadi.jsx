
import { Link } from 'react-router-dom';

function Ibadi() {
  return (
    <div className="initiative-page ibadi-page">

      {/* HERO */}
      <section className="initiative-hero ibadi-hero">
        <div className="initiative-hero-content">
          <div className="ibadi-brand">
            <img
              className="ibadi-brand-logo"
              src="/assets/ibadi-learning-centre-logo.jpeg"
              alt="iBADI Learning Centre logo"
            />
            <span className="initiative-eyebrow">
              NUTAKOR M&C FOUNDATION / iBADI LEARNING CENTRE
            </span>
          </div>

          <h1>
            Learning today.
            <span> Empowering tomorrow.</span>
          </h1>

          <p>
            Bridging innovation, literacy and sustainable rural
            empowerment through practical education, technology
            and integrated agribusiness.
          </p>

          <a href="#ibadi-programmes" className="ibadi-button">
            Discover What We Do →
          </a>
        </div>

        <div className="initiative-hero-image">
        <img
  src="https://live.staticflickr.com/8331/8406164622_104071fc3d_o.jpg"
  alt="Children learning together in a rural outdoor classroom in Ghana"
/>
        </div>
      </section>

      {/* ABOUT */}
      <section className="initiative-intro section-padding">
        <div className="section-label">OUR STORY</div>

        <h2>
          A rural learning centre connecting knowledge
          with opportunity.
        </h2>

        <p>
          Located by the Volta River in Battor, North Tongu
          District, Volta Region, iBADI Learning Centre is
          committed to strengthening rural communities through
          literacy, digital innovation, practical skills and
          sustainable agricultural development.
        </p>
      </section>

      {/* PROGRAMMES */}
      <section
        className="ibadi-programmes section-padding"
        id="ibadi-programmes"
      >
        <div className="section-label">OUR AREAS OF WORK</div>

        <h2>Knowledge that creates opportunities.</h2>

        <div className="ibadi-programme-grid">

          <article className="ibadi-card">
            <span className="ibadi-number">01 / EDUCATION</span>
            <div className="ibadi-symbol">✎</div>
            <h3>Literacy & Education</h3>
            <p>
              Supporting schools through reading clubs, early
              literacy development and meaningful learning
              experiences for children.
            </p>
          </article>

          <article className="ibadi-card">
            <span className="ibadi-number">02 / TECHNOLOGY</span>
            <div className="ibadi-symbol">⌘</div>
            <h3>Digital Innovation</h3>
            <p>
              Equipping young people and community members with
              ICT, artificial intelligence and digital media skills
              for an increasingly connected world.
            </p>
          </article>

          <article className="ibadi-card">
            <span className="ibadi-number">03 / AGRICULTURE</span>
            <div className="ibadi-symbol">♧</div>
            <h3>Aquaculture</h3>
            <p>
              Exploring sustainable fish farming through tilapia
              and catfish production using cage and pond systems.
            </p>
          </article>

          <article className="ibadi-card">
            <span className="ibadi-number">04 / FOOD SECURITY</span>
            <div className="ibadi-symbol">❋</div>
            <h3>Poultry & Orchard Development</h3>
            <p>
              Promoting practical agricultural knowledge through
              poultry production, orchard development and
              sustainable food systems.
            </p>
          </article>

          <article className="ibadi-card">
            <span className="ibadi-number">05 / SKILLS</span>
            <div className="ibadi-symbol">⚒</div>
            <h3>Vocational Empowerment</h3>
            <p>
              Creating opportunities for rural youth and community
              members to acquire practical skills and develop
              sustainable livelihoods.
            </p>
          </article>

        </div>
      </section>

      {/* COMMUNITY */}
      <section className="ibadi-community section-padding">
        <div>
          <div className="section-label">OUR VISION</div>

          <h2>
            Building stronger rural communities through
            knowledge and innovation.
          </h2>

          <p>
            We believe that meaningful development happens when
            communities have access to the knowledge, skills and
            resources they need to shape their own futures.
          </p>
        </div>

        <div className="ibadi-community-highlight">
          <span>OUR APPROACH</span>
          <h3>Learn. Innovate. Produce. Transform.</h3>
          <p>
            Connecting education, technology and productive
            community initiatives.
          </p>
        </div>
      </section>

      {/* CTA */}

<section className="ibadi-cta section-padding">
  <div>
    <div className="section-label">GROW WITH US</div>

    <h2>Be part of rural transformation.</h2>

    <p>
      Join us in creating learning opportunities and
      sustainable futures for rural communities.
    </p>
  </div>

  <div className="initiative-actions">
    <a
      href="https://whatsapp.com/channel/0029VaMD3PJ1dAvuHokYeM0e"
      target="_blank"
      rel="noopener noreferrer"
      className="ibadi-whatsapp-button"
    >
      Join iBADI on WhatsApp →
    </a>

    <Link to="/" className="ibadi-button">
      Back to Foundation →
    </Link>
  </div>
</section>


    </div>
  );
}

export default Ibadi;
