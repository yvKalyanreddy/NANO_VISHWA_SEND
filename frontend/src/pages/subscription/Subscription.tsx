import React from 'react';
import './Subscription.css';

const plansData = [
  {
    label: 'Starter Plan',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="8" y="8" width="8" height="14" rx="2" /><path d="M10 2h4v2h-4z" /><path d="M11 4v4h2V4z" /></svg>,
    title: '1 Week',
    subtitle: 'Mon - Sat delivery',
    price: '550',
    priceSubtext: '6 bottles included',
    features: [
      'Fresh cold-pressed juices made daily',
      'Choose fruit or vegetable blends',
      'Great for first-time subscribers'
    ],
    buttonText: 'Subscribe Now',
    footerText: 'Easy to upgrade anytime',
    isPopular: false
  },
  {
    label: 'Most Popular',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    title: '2 Week',
    subtitle: 'Mon - Sat delivery',
    price: '1050',
    priceSubtext: '12 bottles included',
    features: [
      'Better weekly savings than single orders',
      'Pick any flavors across the menu',
      'Balanced option for regular wellness'
    ],
    buttonText: 'Subscribe Now',
    footerText: 'Best mix of flexibility and value',
    isPopular: true
  },
  {
    label: 'Value Plan',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>,
    title: '4 Week',
    subtitle: 'Mon - Sat delivery',
    price: '2000',
    priceSubtext: '24 bottles included',
    features: [
      'Lowest monthly cost per bottle',
      'Ideal for consistent nutrition goals',
      'Priority scheduling for repeat deliveries'
    ],
    buttonText: 'Subscribe Now',
    footerText: 'Made for everyday wellness habits',
    isPopular: false
  },
  {
    label: 'Reset Plan',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>,
    title: 'Detox Plan',
    subtitle: 'Body cleanse bundle',
    price: '375',
    priceSubtext: 'Pack of 4 bottles',
    features: [
      'Super Red and Super Green blends',
      'WOW Wheatgrass and Cool Pineapple',
      'Perfect for short refresh cycles'
    ],
    buttonText: 'Subscribe Now',
    footerText: 'Quick cleanse, simple start',
    isPopular: false
  }
];

const Subscription = () => {
  return (
    <div className="subscription-page">
      {/* Hero Section */}
      <section className="subscription">
        <div className="subscription__container">
          <div className="subscription__header">
            <span className="subscription__pill">Flexible & Fresh Plans</span>
            <h1 className="subscription__title">
              Wellness, Delivered to<br />Your Doorstep.
            </h1>
            <p className="subscription__description">
              Get your favorite cold-pressed juices, fresh fruit bowls, and vibrant<br />
              salads on a schedule that works for you. Save time, save money, and<br />
              stay consistently healthy.
            </p>
            <button className="subscription__cta">Explore Plans</button>
          </div>

          <div className="subscription__grid">
            {/* Card 1 */}
            <div className="subscription__card">
               <div className="subscription__image-placeholder">
                  {/* Image 1 space */}
               </div>
            </div>
            {/* Card 2 */}
            <div className="subscription__card">
               <div className="subscription__image-placeholder">
                  {/* Image 2 space */}
               </div>
            </div>
            {/* Card 3 */}
            <div className="subscription__card">
               <div className="subscription__image-placeholder">
                  {/* Image 3 space */}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="plans">
        <div className="plans__container">
          <div className="plans__header">
            <h2 className="plans__title">Choose Your Wellness Plan</h2>
            <p className="plans__description">
              Modern subscription plans for your daily juice ritual, flexible detox<br/>resets, and long-term healthy routines.
            </p>
          </div>

          <div className="plans__grid">
            {plansData.map((plan, index) => (
              <div key={index} className="plans__card">
                <div className="plans__card-label">{plan.label}</div>
                <div className="plans__card-icon">{plan.icon}</div>
                <h3 className="plans__card-title">{plan.title}</h3>
                <p className="plans__card-subtitle">{plan.subtitle}</p>
                
                <div className="plans__card-price-container">
                  <span className="plans__card-currency">₹</span>
                  <span className="plans__card-price">{plan.price}</span>
                  <span className="plans__card-currency-code">INR</span>
                </div>
                <p className="plans__card-price-subtext">{plan.priceSubtext}</p>
                
                <hr className="plans__card-divider" />
                
                <ul className="plans__card-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
                
                <button className="plans__card-btn">{plan.buttonText}</button>
                <p className="plans__card-footer-text">{plan.footerText}</p>
              </div>
            ))}
          </div>

          <div className="plans__banner">
            <div className="plans__banner-left">
              <h3 className="plans__banner-title">Juice Cleanse / Detox</h3>
              <div className="plans__banner-stats">
                <div className="plans__banner-stat-box">
                  <span className="plans__banner-stat-number">4</span>
                  <span className="plans__banner-stat-text">signature bottles</span>
                </div>
                <div className="plans__banner-stat-box">
                  <span className="plans__banner-stat-number">100%</span>
                  <span className="plans__banner-stat-text">freshly prepared</span>
                </div>
              </div>
            </div>
            <div className="plans__banner-right">
              <p className="plans__banner-desc">
                A Juice cleanse is a short wellness routine that focuses on fresh vegetable and fruit juices to support hydration, improve digestion, and help your body feel lighter and more refreshed.
                <br/><br/>
                Our blends are packed with vitamins, minerals, antioxidants, and phytonutrients that are easy to absorb, making them a practical addition to a balanced lifestyle.
              </p>
              <a href="#" className="plans__banner-link">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="how-it-works__container">
          <div className="how-it-works__header">
            <h2 className="how-it-works__title">How Subscription Works</h2>
            <p className="how-it-works__description">
              Enjoying daily wellness has never been easier. Set it up once, and let us take care of the rest.
            </p>
          </div>

          <div className="how-it-works__steps">
            {/* Step 1 */}
            <div className="how-it-works__step">
              <div className="how-it-works__step-content">
                <span className="how-it-works__step-pill">Step 1</span>
                <h3 className="how-it-works__step-title">Choose Your Plan</h3>
                <p className="how-it-works__step-desc">
                  Select a subscription tier that fits your lifestyle. Whether you need a daily green boost or a weekly detox kit, we have a flexible plan designed just for you.
                </p>
              </div>
              <div className="how-it-works__step-image">
                 <div className="how-it-works__image-placeholder"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="how-it-works__step">
              <div className="how-it-works__step-content">
                <span className="how-it-works__step-pill">Step 2</span>
                <h3 className="how-it-works__step-title">Customize Your Box</h3>
                <p className="how-it-works__step-desc">
                  Every week, log in and select exactly which juices, bowls, and salads you want, or let our expert nutritionists curate a delicious seasonal mix for you.
                </p>
              </div>
              <div className="how-it-works__step-image">
                 <div className="how-it-works__image-placeholder"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="how-it-works__step">
              <div className="how-it-works__step-content">
                <span className="how-it-works__step-pill">Step 3</span>
                <h3 className="how-it-works__step-title">Delivered Fresh</h3>
                <p className="how-it-works__step-desc">
                  Your items are pressed and prepared to order, then delivered straight to your door in insulated, eco-friendly packaging to ensure maximum freshness.
                </p>
              </div>
              <div className="how-it-works__step-image">
                 <div className="how-it-works__image-placeholder"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq">
        <div className="faq__container">
          <div className="faq__header">
            <h2 className="faq__title">Frequently Asked Questions</h2>
            <p className="faq__description">
              Everything you need to know about our subscription plans.
            </p>
          </div>

          <div className="faq__grid">
            <div className="faq__card">
              <h3 className="faq__question">Can I pause or cancel my subscription?</h3>
              <p className="faq__answer">
                Absolutely. You can pause, skip a week, or cancel your subscription at any time through your account dashboard with no hidden fees or penalties.
              </p>
            </div>
            
            <div className="faq__card">
              <h3 className="faq__question">Can I customize what goes into my weekly box?</h3>
              <p className="faq__answer">
                Yes! Before your weekly cutoff time, you can log in and swap items out. If you forget, we will send you a curated selection of our most popular items.
              </p>
            </div>

            <div className="faq__card">
              <h3 className="faq__question">When do deliveries happen?</h3>
              <p className="faq__answer">
                We deliver on Monday, Wednesday, and Friday mornings between 6 AM and 9 AM to ensure your items are fresh for the day.
              </p>
            </div>

            <div className="faq__card">
              <h3 className="faq__question">Are the bottles and containers recyclable?</h3>
              <p className="faq__answer">
                Yes, all our glass bottles are returnable for a discount on your next order, and our bowl packaging is 100% compostable. Just leave the empty bottles out!
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Subscription;
