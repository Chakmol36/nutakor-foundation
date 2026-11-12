
import { Link } from 'react-router-dom';

function Uth4SC() {
  return (
    <div className="initiative-page uth-page">

      {/* HERO */}
      <section className="initiative-hero uth-hero">
        <div className="initiative-hero-content">
          <span className="initiative-eyebrow">
            NUTAKOR M&C FOUNDATION / UTH4SC
          </span>

          <h1>
            Young people.
            <span> Collective action. Global change.</span>
          </h1>

          <p>
            Mobilizing youth protagonists and professionals
            to advance global service, digital transformation
            and meaningful social change.
          </p>

          <a href="#uth-teams" className="uth-button">
            Explore Our Network →
          </a>
        </div>

        <div className="initiative-hero-image">
     
<img
  src="https://images.pexels.com/photos/3184426/pexels-photo-3184426.jpeg?auto=compress&cs=tinysrgb&w=1200"
  alt="Young people from diverse racial and cultural backgrounds working together"
/>

        </div>
      </section>

      {/* ABOUT */}
      <section className="initiative-intro section-padding">
        <div className="section-label">ABOUT UTH4SC</div>

        <h2>
          A network of people united by service and
          the desire to create positive change.
        </h2>

        <p>
          Uth4SC (Youth for Social Change Network) brings
          together more than 400 young people and professionals
          committed to community development, knowledge sharing,
          education, research and digital innovation.
        </p>
      </section>

      {/* NETWORK TEAMS */}
      <section
        className="uth-teams section-padding"
        id="uth-teams"
      >
        <div className="section-label">OUR NETWORK</div>

        <h2>Different strengths. One shared purpose.</h2>

        <div className="uth-team-grid">

          <article className="uth-team-card">
            <span className="uth-number">01 / STRATEGY & RESOURCES</span>

            <div className="uth-icon">✦</div>

            <h3>Resource Mobilisers</h3>

            <p>
              A team focused on strategy, research, partnerships,
              grant opportunities and mobilising resources
              to support meaningful community initiatives.
            </p>

            <span className="uth-tag">Building Partnerships</span>
          </article>

          <article className="uth-team-card">
            <span className="uth-number">02 / EDUCATION & INNOVATION</span>

            <div className="uth-icon">⌘</div>

            <h3>Academic Facilitators & Content Creators</h3>

            <p>
              Educators, data scientists, programmers and
              teaching assistants who support Socratic mentorship,
              webinars, digital curricula and knowledge sharing.
            </p>

            <span className="uth-tag">Sharing Knowledge</span>
          </article>

        </div>
      </section>

      {/* IMPACT */}
      <section className="uth-impact section-padding">
        <div className="uth-impact-content">
          <div className="section-label">THE POWER OF COLLECTIVE ACTION</div>

          <h2>
            Every skill has the potential to serve humanity.
          </h2>

          <p>
            We believe young people are not simply beneficiaries
            of development. They are active protagonists capable
            of identifying challenges, developing solutions
            and contributing to the wellbeing of society.
          </p>
        </div>

        <div className="uth-impact-stat">
          <strong>400+</strong>
          <span>Young people and professionals in our network</span>
        </div>
      </section>

      {/* CTA */}

<section className="uth-cta section-padding">
  <div>
    <div className="section-label">
      YOUR SKILLS. YOUR SERVICE. YOUR IMPACT.
    </div>

    <h2>Be part of the movement.</h2>

    <p>
      Connect with people who believe in learning,
      collaboration and using their abilities to
      create positive social change.
    </p>
  </div>

  <div className="initiative-actions">
    <a
      href="https://whatsapp.com/channel/0029Vb9SKnxBfxoATlVeS33G"
      target="_blank"
      rel="noopener noreferrer"
      className="uth-whatsapp-button"
    >
      Join Uth4SC on WhatsApp →
    </a>

    <a
      href="mailto:nutakor.fnf@gmail.com"
      className="uth-button"
    >
      Email the Foundation →
    </a>
  </div>
</section>


      <section className="uth-back">
        <Link to="/">
          ← Back to Nutakor M&C Foundation
        </Link>
      </section>

    </div>
  );
}

export default Uth4SC;
