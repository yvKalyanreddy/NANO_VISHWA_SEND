import React, { useState } from "react";
import { useEffect } from "react";
import enquiryBg from "../../assets/Enquiry background image.png";
import messageImg from "../../assets/enquiry message section.png";

import "./Enquiry2.css";
const Enquiry: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    inquiryType: "General Inquiry",
    message: "",
  });
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="enquiry-page">
      
      {/* Hero Section */}
      <section className="enquiry-hero" style={{ backgroundImage: `url(${enquiryBg})` }}>
        <div className="hero-overlay">
          <h1 className="hero-title">How can we help?</h1>
          <p className="hero-subtitle">
            Whether you have a question about our cold-pressed juices, want to
            discuss catering for your next event, or need help with a
            subscription, our team is ready.
          </p>
        </div>
      </section>

      {/* Contact Cards – floats up over the hero/cream boundary */}
      <section className="contact-section">
        <div className="contact-cards">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13 19.79 19.79 0 0 1 1.57 4.4 2 2 0 0 1 3.54 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <h3>Call Us</h3>
            <p>Mon-Fri from 8am to 8pm.</p>
            <strong>+1 (555) 123-4567</strong>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <h3>Email Us</h3>
            <p>We'll respond within 24 hours.</p>
            <strong>hello@bowlsandbottles.com</strong>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Visit Us</h3>
            <p>Come say hi at our flagship store.</p>
            <strong>123 Wellness Ave, Green City</strong>
          </div>
        </div>
      </section>

      {/* Choose Enquiry Section */}
      <section className="enquiry-types">
        <h2>Choose the right enquiry</h2>
        <p className="section-subtitle">
          From daily orders to business collaborations, we make it easy to reach
          the right team faster.
        </p>
        <div className="enquiry-cards-grid">
          <div className="enquiry-type-card">
            <div className="enquiry-type-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 21h10"/>
                <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/>
                <path d="M11.38 12a2.4 2.4 0 0 1-.4-4.77 5.9 5.9 0 0 0-6.88 3.71"/>
                <path d="M13.01 7.66a2.4 2.4 0 0 1 1.18-4.97 5.9 5.9 0 0 0-7.02 3.31"/>
                <path d="M7.3 5.9a2.4 2.4 0 0 1 1.1-4.71 5.9 5.9 0 0 0-6.59 3.98"/>
                <path d="m21 8-2.4-4.8A2 2 0 0 0 16.8 2H14Z"/>
              </svg>
            </div>
            <h4>Catering Orders</h4>
            <p>
              Fresh juice bottles, salad trays, smoothie bowls and fruit
              platters for events, offices and private gatherings.
            </p>
            <span className="tag">Minimum lead time: 24 hours</span>
          </div>
          <div className="enquiry-type-card">
            <div className="enquiry-type-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="16" height="20" x="4" y="2" rx="2" ry="2"/>
                <path d="M9 22v-4h6v4"/>
                <path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/>
                <path d="M12 10h.01"/><path d="M12 14h.01"/>
                <path d="M16 10h.01"/><path d="M16 14h.01"/>
                <path d="M8 10h.01"/><path d="M8 14h.01"/>
              </svg>
            </div>
            <h4>Corporate Wellness</h4>
            <p>
              Recurring pantry stocking, detox days, office breakfast boxes and
              curated employee wellness programs.
            </p>
            <span className="tag">Custom weekly plans</span>
          </div>
          <div className="enquiry-type-card">
            <div className="enquiry-type-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/>
                <path d="M3 6h18"/>
                <path d="M16 10a4 4 0 0 1-8 0"/>
              </svg>
            </div>
            <h4>Bulk Orders</h4>
            <p>
              Need a large quantity of juice drinks, sauces or bowls? We can
              arrange festive gifting and special packaging too.
            </p>
            <span className="tag">Ideal for groups & gifting</span>
          </div>
          <div className="enquiry-type-card">
            <div className="enquiry-type-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m11 17 2 2a1 1 0 1 0 3-3"/>
                <path d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"/>
                <path d="m21 3-6 6"/>
                <path d="M8.4 10.4 5 13.8a4 4 0 0 0 0 5.65l.6.6a2 2 0 0 0 2.82 0l2.55-2.55"/>
              </svg>
            </div>
            <h4>Partnerships</h4>
            <p>
              Collaborate with us for pop-ups, fitness studios, cafes, retail
              shelves or brand activations aligned with healthy living.
            </p>
            <span className="tag">Brand & venue tie-ups</span>
          </div>
        </div>
      </section>

      {/* Message Form Section */}
      <section className="message-section">
        <div className="message-inner">
          <div className="message-form-wrapper">
            <h2>Send us a message</h2>
            <p>Fill in the form below and our team will get back to you shortly.</p>
            <form className="message-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Doe"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+1 234 567 890"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Type of enquiry</label>
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                >
                  <option>General Inquiry</option>
                  <option>Catering Orders</option>
                  <option>Corporate Wellness</option>
                  <option>Bulk Orders</option>
                  <option>Partnerships</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea
                  name="message"
                  placeholder="Tell us how we can help you today..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                />
              </div>
              <button type="submit" className="send-btn">
                SUBMIT
              </button>
            </form>
          </div>
          <div className="message-image">
            <img
              src={messageImg}
              alt="Fresh juices and bowls"
            />
          </div>
        </div>
      </section>

      {/* What Happens After Section */}
      <section className="after-enquiry">
        <div className="after-enquiry-inner">
          <div className="after-steps-col">
            <span className="required-label">Response promise</span>
            <h2>What happens after you enquire?</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h4>We review your request</h4>
                  <p>
                    Our team checks your order size, preferred date, location and category details.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h4>We suggest the best plan</h4>
                  <p>
                    You'll receive menu suggestions, pricing guidance and timeline confirmation.
                  </p>
                </div>
              </div>
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h4>We confirm and prepare</h4>
                  <p>
                    Once approved, we arrange production, packing and delivery or pickup support.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="after-info-col">
            <div className="info-card">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <div>
                <h4>Store Hours</h4>
                <p>Mon-Fri: 8:00 AM - 8:00 PM</p>
                <p>Sat-Sun: 9:00 AM - 9:00 PM</p>
              </div>
            </div>
            <div className="info-card">
              <div className="info-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
                </svg>
              </div>
              <div>
                <h4>Delivery Zones</h4>
                <p>
                  Same-day delivery available across central city locations for
                  selected items and subscriptions.
                </p>
              </div>
            </div>
            <div className="info-card dark-card">
              <div className="info-card-icon light">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"/>
                  <path d="M8 12h.01"/><path d="M12 12h.01"/><path d="M16 12h.01"/>
                </svg>
              </div>
              <div>
                <h4>Need a quick quote?</h4>
                <p>
                  Share your guest count, date and location to get a faster
                  recommendation from our team.
                </p>
                <button className="quote-btn">Start an enquiry</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>Frequently Asked Questions</h2>
        <p className="section-subtitle">
          Quick answers to questions you might have about our products, delivery,
          and subscriptions.
        </p>
        <div className="faq-grid">
          <div className="faq-item">
            <div className="faq-header">
              <div className="faq-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h4>Do you offer catering for corporate events?</h4>
            </div>
            <p>
              Yes, we do! We can provide bulk orders of our cold-pressed juices, fruit bowls, and salads for corporate lunches, wellness events, and parties. Please select "Catering" in the contact form above.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <div className="faq-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h4>Are your juice bottles environmentally friendly?</h4>
            </div>
            <p>
              Absolutely. Sustainability is a core value for us. Our bottles are made from 100% recycled materials and are fully recyclable. We also offer a bottle return program at our retail locations.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <div className="faq-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h4>How do subscriptions work?</h4>
            </div>
            <p>
              Our subscriptions are fully customizable. You can choose to receive your favorite juices or bowls weekly, bi-weekly, or monthly. You can easily pause, modify, or cancel your subscription at any time through your account dashboard.
            </p>
          </div>
          <div className="faq-item">
            <div className="faq-header">
              <div className="faq-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>
              </div>
              <h4>How long do the cold-pressed juices last?</h4>
            </div>
            <p>
              Because our juices are truly cold-pressed & unpasteurized to maintain maximum nutrients, they have a shelf life of 4 days when kept properly refrigerated. We recommend consuming them within this window for the best taste and health benefits.
            </p>
          </div>
        </div>
      </section>


    </div>
  );
};

export default Enquiry;