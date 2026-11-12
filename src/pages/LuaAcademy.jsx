
import { Link } from 'react-router-dom';

function LuaAcademy() {
  return (
    <div className="initiative-page lua-page">

      {/* HERO */}
      <section className="initiative-hero lua-hero">
        <div className="initiative-hero-content">
          <span className="initiative-eyebrow">
            NUTAKOR M&C FOUNDATION / OUR INITIATIVES
          </span>

          <h1>
            Growing together.
            <span> Learning with purpose.</span>
          </h1>

          <p>
            A safe, purpose-driven digital sanctuary empowering
            junior youth to learn, create, collaborate and contribute
            to the transformation of their communities.
          </p>

          <a href="#lua-programmes" className="initiative-button">
            Explore Our Learning Spaces →
          </a>
        </div>

        <div className="initiative-hero-image">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=75"
            alt="Young people learning and collaborating with technology"
          />
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="initiative-intro section-padding">
        <div className="section-label">ABOUT LUA ACADEMY</div>

        <h2>
          A digital space where young people discover
          their potential.
        </h2>

        <p>
          LuaGetsinger Academy connects junior youth through
          meaningful learning experiences inspired by the Junior
          Youth Spiritual Empowerment Program. We encourage
          intellectual growth, creativity, moral development,
          friendship and service to humanity.
        </p>
      </section>

      {/* PROGRAMMES */}
      <section
        className="lua-programmes section-padding"
        id="lua-programmes"
      >
        <div className="section-label">OUR LEARNING SPACES</div>

        <h2>Five spaces. One community.</h2>

        <div className="lua-programme-grid">

          <article className="lua-programme-card">
            <span className="lua-card-number">01</span>
            <h3>JYConnect & LEARN</h3>
            <p>
              A learning environment for academic development,
              digital literacy, coding, mathematics, French,
              science and Socratic mentorship.
            </p>
            <span className="lua-card-tag">Learning & Discovery</span>
          </article>

          <article className="lua-programme-card">
            <span className="lua-card-number">02</span>
            <h3>JYConnect & SHARE</h3>
            <p>
              A space for young people to share project
              experiences, photographs, achievements and
              community service stories.
            </p>
            <span className="lua-card-tag">Sharing & Reflection</span>
          </article>

          <article className="lua-programme-card">
            <span className="lua-card-number">03</span>
            <h3>JYConnect & CREATE</h3>
            <p>
              Creative challenges that encourage young people
              to explore design, storytelling, digital media
              and innovative ideas.
            </p>
            <span className="lua-card-tag">Creativity & Innovation</span>
          </article>

          <article className="lua-programme-card">
            <span className="lua-card-number">04</span>
            <h3>Animators' Forum</h3>
            <p>
              A collaborative space for animator and coordinator
              development, training, reflection and shared
              learning experiences.
            </p>
            <span className="lua-card-tag">Animator Development</span>
          </article>

          <article className="lua-programme-card">
            <span className="lua-card-number">05</span>
            <h3>Parents & Guardians Support</h3>
            <p>
              A space for parents and guardians to understand
              the Academy's activities, support young learners
              and participate in their development.
            </p>
            <span className="lua-card-tag">Family & Community</span>
          </article>

        </div>
      </section>

      {/* SAFETY */}
      <section className="lua-safety section-padding">
        <div>
          <div className="section-label">SAFETY COMES FIRST</div>

          <h2>
            A protected environment for meaningful growth.
          </h2>

          <p>
            The wellbeing of every junior youth is central to
            our mission. Our digital community will be guided
            by child safeguarding, parental consent, privacy
            and respectful participation.
          </p>
        </div>

        <div className="lua-safety-points">
          <p>✓ Child safeguarding principles</p>
          <p>✓ Parental consent and involvement</p>
          <p>✓ Respectful community guidelines</p>
          <p>✓ Responsible sharing of photographs and stories</p>
        </div>
      </section>

      {/* CALL TO ACTION */}

<section className="lua-cta section-padding">
  <div>
    <div className="section-label">BE PART OF THE JOURNEY</div>

    <h2>Helping junior youth grow into protagonists of change.</h2>

    <p>
      Together, we can create opportunities for young
      people to learn, create and serve their communities.
    </p>
  </div>

  <div className="initiative-actions">
    <a
      href="https://whatsapp.com/channel/0029Vb95sS0IiRomOvaU2f0p"
      target="_blank"
      rel="noopener noreferrer"
      className="lua-whatsapp-button"
    >
      Join Lua Academy on WhatsApp →
    </a>

    <Link to="/" className="initiative-button">
      Back to Foundation →
    </Link>
  </div>
</section>


    </div>
  );
}

export default LuaAcademy;
