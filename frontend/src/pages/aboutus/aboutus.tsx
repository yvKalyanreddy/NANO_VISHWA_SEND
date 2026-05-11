import React from "react";
import { useNavigate } from "react-router-dom";
import "./aboutus.css";

const aboutus: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="eq1-page">

      {/* ── Hero ── */}
      <section className="eq1-hero">
        <div className="eq1-hero-overlay">
          <h1 className="eq1-hero-title">
            Nourishing Your Body,<br />Naturally.
          </h1>
          <p className="eq1-hero-sub">
            We believe that healthy eating should be delicious, accessible, and
            completely uncompromised. Experience the true taste of wellness.
          </p>
        </div>
      </section>

      {/* ── Origin Story ── */}
      <section className="eq1-origin">
        <div className="eq1-origin-inner">
          <div className="eq1-origin-text">
            <span className="eq1-breadcrumb">Our Story</span>
            <h2>Born from a passion for real, wholesome nutrition.</h2>
            <p>
              It started in a small home kitchen with a simple cold-press juicer
              and a strong desire to feel better. We realised that most store-
              bought juices were pasteurised, packed with preservatives, and
              stripped of their natural nutrients.
            </p>
            <p>
              So, we set out to create something entirely different. A place
              where every bottle of juice and every bowl of fruit is prepared
              fresh daily, using only the highest quality, locally sourced
              ingredients.
            </p>
            <p>
              Today, Bowls &amp; Bottles has grown into a community hub for
              wellness enthusiasts, but our core mission remains exactly the
              same: to make healthy, vibrant eating accessible and delicious for
              everyone.
            </p>
          </div>
          <div className="eq1-origin-image">
            <img
              src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=600&q=80"
              alt="Fresh vegetables and fruits"
            />
          </div>
        </div>
      </section>

      {/* ── Philosophy ── */}
      <section className="eq1-philosophy">
        <h2>Our Philosophy</h2>
        <p className="eq1-section-sub">
          The core values that drive everything we do, from sourcing ingredients
          to serving our community.
        </p>
        <div className="eq1-philosophy-cards">
          <div className="eq1-phil-card">
            <div className="eq1-phil-icon">🌿</div>
            <h4>Uncompromised Freshness</h4>
            <p>
              We never pasteurise or add preservatives. Our juices are
              cold-pressed daily and our bowls are made to order, ensuring you
              get maximum nutrients and vibrant flavours in every bite.
            </p>
          </div>
          <div className="eq1-phil-card">
            <div className="eq1-phil-icon">♻️</div>
            <h4>Sustainable Practices</h4>
            <p>
              From the produce we source to the materials we use, we care about
              health — from 100% recyclable glass bottles to compostable bowl
              packaging, we are constantly striving to reduce our footprint.
            </p>
          </div>
          <div className="eq1-phil-card">
            <div className="eq1-phil-icon">❤️</div>
            <h4>Community First</h4>
            <p>
              Our produce is sourced from local organic and sustainable farms to
              support our regional agri-community. When you shop with us, you're
              supporting local growers and sustainable food systems.
            </p>
          </div>
        </div>
      </section>

      {/* ── Journey ── */}
      <section className="eq1-journey">
        <h2>The Journey to Your Bottle</h2>
        <p className="eq1-section-sub">
          Transparency is key. Here is how we transform raw, natural ingredients
          into the products you love.
        </p>

        {/* Step 1 */}
        <div className="eq1-journey-step eq1-step-left">
          <div className="eq1-step-image">
            <img
              src="https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=500&q=80"
              alt="Sourcing locally"
            />
          </div>
          <div className="eq1-step-content">
            <span className="eq1-step-num">1</span>
            <h3>Sourcing Locally</h3>
            <p>
              Great juice starts with great produce. We partner directly with
              local farmers who practise organic and sustainable agriculture. Our
              team hand-selects the ripest apples, the leafiest greens, and the
              most vibrant root vegetables available each season.
            </p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="eq1-journey-step eq1-step-right">
          <div className="eq1-step-content">
            <span className="eq1-step-num">2</span>
            <h3>Cold-Pressing Daily</h3>
            <p>
              We use state-of-the-art hydraulic cold-press machines that extract
              every drop of liquid without generating heat. This careful, slow
              process preserves the delicate enzymes, vitamins, and minerals that
              traditional centrifugal juicers often destroy.
            </p>
          </div>
          <div className="eq1-step-image">
            <img
              src="https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&q=80"
              alt="Cold pressing juice"
            />
          </div>
        </div>

        {/* Step 3 */}
        <div className="eq1-journey-step eq1-step-left">
          <div className="eq1-step-image">
            <img
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=500&q=80"
              alt="Serving with care"
            />
          </div>
          <div className="eq1-step-content">
            <span className="eq1-step-num">3</span>
            <h3>Serving with Care</h3>
            <p>
              Once pressed, our juices are immediately bottled and kept perfectly
              chilled. Our smoothie bowls and salads are crafted fresh right
              before they reach your hands, ensuring the absolute peak of flavour
              and nutritional benefit.
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="eq1-cta">
        <h2>Ready to taste the difference?</h2>
        <p>
          Explore our menu of truly fresh, cold-pressed juices and vibrant bowls,
          or start a subscription to keep your fridge stocked with wellness.
        </p>
        <div className="eq1-cta-buttons">
          <button
            className="eq1-btn-primary"
            onClick={() => navigate("/menu")}
          >
            Menu
          </button>
          <button className="eq1-btn-secondary">View Subscriptions</button>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="eq1-footer">
        <div className="eq1-footer-logo">
          <span>🥣</span>
          <span className="eq1-footer-brand">Bowls and Bottles</span>
        </div>
        <nav className="eq1-footer-nav">
          <a href="#">Menu</a>
          <a href="#">Locations</a>
          <a href="#">Subscription</a>
          <a href="#">Our Story</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </nav>
        <p className="eq1-footer-copy">
          © 2025 Bowls &amp; Bottles. All rights reserved.
        </p>
      </footer>

    </div>
  );
};

export default aboutus;