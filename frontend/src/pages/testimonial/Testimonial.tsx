import './Testimonial.css'

const stats = [
  {
    id: 'rating',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <polygon
          points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
          stroke="#FA8C2F" strokeWidth="1.8" strokeLinejoin="round" fill="none"
        />
      </svg>
    ),
    label: 'Average Rating',
    value: '4.9/5',
    title: 'Customer Satisfaction',
    desc: 'Based on over 2,500 reviews across all our locations.',
  },
  {
    id: 'community',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="9" cy="7" r="3" stroke="#FA8C2F" strokeWidth="1.8" />
        <circle cx="15" cy="7" r="3" stroke="#FA8C2F" strokeWidth="1.8" />
        <path d="M3 19c0-3.314 2.686-6 6-6h6c3.314 0 6 2.686 6 6" stroke="#FA8C2F" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    label: 'Community Size',
    value: '10k+',
    title: 'Happy Customers',
    desc: 'People choosing clean, healthy meals every single week.',
  },
  {
    id: 'loyalty',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 2H7a2 2 0 0 0-2 2v16l7-3 7 3V4a2 2 0 0 0-2-2z" stroke="#FA8C2F" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 10l2 2 4-4" stroke="#FA8C2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Loyalty',
    value: '95%',
    title: 'Subscription Retention',
    desc: 'Subscribers who stick with us month after month.',
  },
  {
    id: 'milestones',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="8" r="4" stroke="#FA8C2F" strokeWidth="1.8" />
        <path d="M12 12v9" stroke="#FA8C2F" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M8 16l4 5 4-5" stroke="#FA8C2F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    label: 'Milestones',
    value: '500+',
    title: 'Five Star Reviews',
    desc: 'Verified testimonials from our online and instore platforms.',
  },
]

function OutlineStars() {
  return (
    <div className="t-outline-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            stroke="#FA8C2F" strokeWidth="1.6" strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonial() {
  return (
    <div className="tpage">

      {/* ── Hero Banner ── */}
      <section className="t-hero">
        {/* Replace this div with <img> when you add the image */}
        <div className="t-hero__img-placeholder" />
        <div className="t-hero__overlay" />
        <div className="t-hero__content">
          <h1 className="t-hero__heading">What Our Community<br />Says</h1>
          <p className="t-hero__sub">
            Real stories from people who have made Bowls &amp; Bottles a part of<br />
            their daily wellness journey.
          </p>
        </div>
      </section>

      {/* ── Stats Row ── */}
      <section className="t-stats">
        <div className="t-stats__inner">
          {stats.map((s) => (
            <div key={s.id} className="t-stat-card">
              <div className="t-stat-icon">{s.icon}</div>
              <span className="t-stat-label">{s.label}</span>
              <span className="t-stat-value">{s.value}</span>
              <h3 className="t-stat-title">{s.title}</h3>
              <p className="t-stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>
      {/* ── Spotlight ── */}
      <section className="t-spotlight">
        <div className="t-spotlight__inner">

          {/* Left — image placeholder, replace with <img> when ready */}
          <div className="t-spotlight__img-placeholder" />

          {/* Right — quote */}
          <div className="t-spotlight__content">
            <OutlineStars />
            <h2 className="t-spotlight__quote">
              "It completely changed how I approach my lunches."
            </h2>
            <p className="t-spotlight__body">
              "I used to rely on heavy takeout meals that left me feeling sluggish by 2 PM.
              Since I started my weekly subscription with Bowls &amp; Bottles, my energy levels
              have skyrocketed. The salads are incredibly fresh, and the cold-pressed juices are
              the perfect afternoon pick-me-up. It's so rare to find food that tastes this good
              and is actually good for you."
            </p>
            <div className="t-spotlight__author">
              <span className="t-spotlight__name">Sarah Jenkins</span>
              <span className="t-spotlight__role">Marketing Director &amp; Weekly Subscriber</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Reviews Grid ── */}
      <section className="t-reviews">
        <div className="t-reviews__header">
          <h2 className="t-reviews__title">Words From Our Customers</h2>
          <p className="t-reviews__sub">
            Don't just take our word for it. Here is what people are experiencing with our fresh bowls and juices.
          </p>
        </div>
        <div className="t-reviews__grid">
          {[
            { id: 'michael', name: 'Michael T.', role: 'Fitness Coach',     quote: '"The Detox Green juice is an absolute lifesaver. I drink it every morning post-workout and it feels like hitting a reset button. Highly recommend!"' },
            { id: 'elena',   name: 'Elena R.',   role: 'Student',           quote: '"I am obsessed with the Acai Berry Bowl. The fruit is always so fresh and the portion size is perfect. It\'s my go-to weekend treat."' },
            { id: 'david',   name: 'David M.',   role: 'Architect',         quote: '"Great variety of salads. The Mediterranean Crunch bowl has the perfect balance of flavors. Only wish you had more locations!"' },
            { id: 'chloe',   name: 'Chloe W.',   role: 'Yoga Instructor',   quote: '"The 3-day juice cleanse was surprisingly easy to follow. The juices tasted amazing and I didn\'t feel starved at all. Will definitely do it again."' },
            { id: 'rahul',   name: 'Rahul S.',   role: 'Software Engineer', quote: '"Subscription has been a game changer for my office lunches. Delivery is always on time, and the packaging is eco-friendly which I love."' },
            { id: 'amanda',  name: 'Amanda P.',  role: 'Mother of Two',     quote: '"My kids actually ask for the Tropical Smoothie Bowl now instead of ice cream. Thank you for making healthy food so appealing!"' },
          ].map((r) => (
            <div key={r.id} className="t-review-card">
              <OutlineStars />
              <p className="t-review-card__text">{r.quote}</p>
              <div className="t-review-card__author">
                {/* Replace this div with <img> when you add the photo */}
                <div className="t-review-card__avatar" aria-label={`${r.name} photo`} />
                <div>
                  <span className="t-review-card__name">{r.name}</span>
                  <span className="t-review-card__role">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* ── CTA Block ── */}
      <section className="t-cta">
        <div className="t-cta__inner">
          <h2 className="t-cta__title">Ready to write your own story?</h2>
          <p className="t-cta__sub">
            Join thousands of happy customers who have discovered the power of fresh, clean, and delicious nourishment every day.
          </p>
          <div className="t-cta__buttons">
            <button className="t-cta__btn t-cta__btn--primary">Explore Menu</button>
            <button className="t-cta__btn t-cta__btn--outline">Start Subscription</button>
          </div>
        </div>
      </section>

    </div>
  )
}
