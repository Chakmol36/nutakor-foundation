
import { Link } from 'react-router-dom';
import './App.css';

const initiatives = [
  {
    number: '01',
    name: 'LuaGetsinger Academy',
    shortName: 'LUA ACADEMY',
    description:
      'A safe, purpose-driven digital sanctuary empowering junior youth through academic excellence, creativity and community service.',
    features: ['Digital Learning', 'Youth Empowerment', 'Creative Projects'],
    color: 'green',
    link: '/lua-academy',
  },
  {
    number: '02',
    name: 'iBADI Learning Centre',
    shortName: 'iBADI CENTRE',
    description:
      'Bridging innovation, literacy and sustainable rural empowerment through practical education and integrated agribusiness.',
    features: ['Literacy & ICT', 'AI & Innovation', 'Sustainable Farming'],
    color: 'blue',
    link: '/ibadi',
  },
  {
    number: '03',
    name: 'Uth4SC',
    shortName: 'YOUTH FOR SOCIAL CHANGE',
    description:
      'Mobilizing talented young people and professionals to contribute their skills towards meaningful grassroots social transformation.',
    features: ['Youth Network', 'Community Service', 'Digital Transformation'],
    color: 'orange',
    link: '/uth4sc',
  },
];

function Home() {
  return (
    <div className="website">

      {/* HERO SECTION */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-line"></span>
            EMPOWERING PEOPLE. TRANSFORMING COMMUNITIES.
          </div>

          <h1>
            Building a future of
            <span> empowered communities.</span>
          </h1>

          <p>
            We believe in the power of education, innovation and
            collective action to transform lives and create
            sustainable opportunities for everyone.
          </p>

          <div className="hero-actions">
            <a href="#about" className="primary-button">
              Discover Our Mission <span>→</span>
            </a>

            <a href="#initiatives" className="secondary-button">
              Explore Our Initiatives
            </a>
          </div>

          <div className="hero-note">
            <span className="note-dot"></span>
            Rooted in Ghana. Inspired by global transformation.
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1100&q=75"
            alt="Students learning together in a classroom"
          />

          <div className="image-caption">
            <span className="caption-icon">✳</span>
            <div>
              <strong>Education. Empowerment. Service.</strong>
              <small>Creating opportunities for generations.</small>
            </div>
          </div>
        </div>

        <div className="hero-decoration"></div>
      </section>

      {/* ABOUT SECTION */}
      <section className="about-section section-padding" id="about">
        <div className="section-label">WHO WE ARE</div>

        <div className="about-grid">
          <div>
            <h2>
              Empowering human potential, one community at a time.
            </h2>
          </div>

          <div className="about-description">
            <p>
              Nutakor M&C Foundation is a Ghana-based non-governmental
              organization committed to holistic human capacity
              building, rural community empowerment, child and youth
              literacy, and the ethical use of technology and
              innovation for social transformation.
            </p>

            <a href="#impact" className="text-link">
              Discover what drives us <span>→</span>
            </a>
          </div>
        </div>

        <div className="mission-strip">
          <div className="mission-item">
            <span className="mission-number">01</span>
            <h3>Empowerment</h3>
            <p>
              Developing the moral, spiritual and academic potential
              of children and young people.
            </p>
          </div>

          <div className="mission-item">
            <span className="mission-number">02</span>
            <h3>Education</h3>
            <p>
              Promoting literacy, bilingual learning and access to
              meaningful educational opportunities.
            </p>
          </div>

          <div className="mission-item">
            <span className="mission-number">03</span>
            <h3>Innovation</h3>
            <p>
              Using technology, practical skills and sustainable
              development to strengthen communities.
            </p>
          </div>
        </div>
      </section>

      {/* INITIATIVES */}
      <section
        className="initiatives-section section-padding"
        id="initiatives"
      >
        <div className="initiatives-heading">
          <div>
            <div className="section-label">WHAT WE DO</div>
            <h2>Three initiatives. One shared vision.</h2>
            <p>
              Explore the programmes and initiatives through which
              we turn our mission into meaningful action.
            </p>
          </div>

          <span className="initiative-count">OUR INITIATIVES / 03</span>
        </div>

        <div className="initiative-grid">
          {initiatives.map((initiative) => (
            <article
              className={`initiative-card ${initiative.color}`}
              key={initiative.number}
            >
              <div className="card-top">
                <span>{initiative.shortName}</span>
                <span className="card-number">{initiative.number}</span>
              </div>

              <div className="card-symbol">
                {initiative.color === 'green' && '✳'}
                {initiative.color === 'blue' && '◈'}
                {initiative.color === 'orange' && '✺'}
              </div>

              <h3>{initiative.name}</h3>

              <p>{initiative.description}</p>

              <div className="feature-list">
                {initiative.features.map((feature) => (
                  <span key={feature}>{feature}</span>
                ))}
              </div>

              <Link to={initiative.link} className="card-link">
                Explore Initiative <span>↗</span>
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* IMPACT */}
      <section className="impact-section section-padding" id="impact">
        <div className="impact-content">
          <div className="section-label light-label">
            OUR COMMITMENT
          </div>

          <h2>
            Real change begins when people are given the opportunity
            to grow.
          </h2>

          <p>
            From rural classrooms to digital learning communities,
            we are committed to creating environments where people
            can learn, contribute and build better futures.
          </p>

          <Link to="/uth4sc" className="impact-button">
            Be Part of the Change <span>→</span>
          </Link>
        </div>

        <div className="impact-side">
          <div className="impact-point">
            <span>01</span>
            <div>
              <h3>Human Capacity Building</h3>
              <p>Investing in people and their potential.</p>
            </div>
          </div>

          <div className="impact-point">
            <span>02</span>
            <div>
              <h3>Rural Empowerment</h3>
              <p>Creating opportunities within communities.</p>
            </div>
          </div>

          <div className="impact-point">
            <span>03</span>
            <div>
              <h3>Ethical Innovation</h3>
              <p>Using technology for meaningful social progress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* GET INVOLVED */}
      <section className="join-section section-padding" id="get-involved">
        <div>
          <div className="section-label">MAKE A DIFFERENCE</div>
          <h2>Your skills can help change someone's future.</h2>
          <p>
            Whether you are an educator, volunteer, professional
            or supporter, there is a place for you in our mission.
          </p>
        </div>

        <Link to="/uth4sc" className="primary-button">
          Join the Movement <span>→</span>
        </Link>
      </section>


<a
  href="https://whatsapp.com/channel/0029VbB5FE6I1rcZDGR0Z30r"
  target="_blank"
  rel="noopener noreferrer"
  className="family-whatsapp-button"
>
  Join Our Family & Friends Community →
</a>


    </div>
  );
}

export default Home;
