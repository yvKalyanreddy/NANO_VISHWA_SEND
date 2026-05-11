import React, { useState, useEffect, useRef, useMemo } from "react";
import { 
  Sprout, ShoppingBag, Utensils, History, ArrowRight, 
  Search, Plus, Minus, X, Leaf, Droplets, Heart 
} from "lucide-react";
import { motion, useScroll, useSpring, useTransform, AnimatePresence } from "framer-motion";
import "./Ourstory.css";

// ── CONSTANTS ──
const FAQ_DATA = [
  { q: "Do you make everything from scratch?", a: "Yes, every single dish is made fresh in our kitchen using only whole, natural ingredients." },
  { q: "What kind of experience do you offer?", a: "We craft meals using your preferences and current health goals to fuel your life." },
  { q: "Do you offer subscriptions?", a: "Yes! We have weekly and monthly plans that give you a healthy, delicious meal every day." },
  { q: "What makes you different?", a: "We combine everything about natural food in a holistic philosophy for a unique dining experience." }
];

const TIMELINE_STEPS = [
  {
    chapter: "Start",
    title: "The First Press",
    desc: "Our story begins in a tiny home kitchen, where we first discovered the power of raw, cold-pressed nourishment.",
    video: "https://player.vimeo.com/external/370331493.hd.mp4?s=33d02635293673c46e01768c182583e74852026e&profile_id=175"
  },
  {
    chapter: "Grow",
    title: "A Growing Spark",
    desc: "The community responded with overwhelming love. We expanded our roots and moved into our first official workspace.",
    video: "https://player.vimeo.com/external/291673931.hd.mp4?s=94c1e2fba4073e86f87455e2e8113e6481745423&profile_id=175"
  },
  {
    chapter: "Expand",
    title: "Bowls Join the Menu",
    desc: "Nourishment evolved. We brought our philosophy to solid food, crafting superfood bowls that redefined healthy eating.",
    video: "https://player.vimeo.com/external/434045526.hd.mp4?s=c1775e533c3937a09c258d4a6f876e480f2d48c8&profile_id=175"
  },
  {
    chapter: "Today",
    title: "Still Growing",
    desc: "Today, we continue to innovate, fueled by the same simple belief that nature holds the key to vitality.",
    video: "https://player.vimeo.com/external/481831205.hd.mp4?s=6960714777a8b417c828d17277864f77c3a9d949&profile_id=175"
  }
];

const VISIONARIES = [
  { name: "Sarah Jenkins", role: "Founder & CEO", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80" },
  { name: "Marcus Chen", role: "Head Chef", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
  { name: "Elena Rodriguez", role: "Nutritionist", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" }
];

const INGREDIENT_CARDS = [
  {
    icon: "🌿",
    title: "Nutrient-First Intake",
    desc: "Every ingredient is chosen based on nutritional impact, ensuring every meal supports your strength.",
    details: "We analyze the micro-nutrient profile of every leaf and seed to maximize vitality in every bite."
  },
  {
    icon: "🌾",
    title: "Ancient Grains",
    desc: "Our grains are both ancient and complex. We make sure to only include whole grain varieties.",
    details: "From Quinoa to Amaranth, we source non-hybridized grains that offer sustained energy release."
  }
];

const PHILOSOPHY_CARDS = [
  {
    icon: <Leaf size={32} />,
    title: "100% Organic",
    desc: "Everything we use is certified organic and sustainably grown.",
    color: "rgba(100, 255, 100, 0.2)",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80"
  },
  {
    icon: <Droplets size={32} />,
    title: "Cold-Pressed",
    desc: "Our cold-pressing technique preserves maximum nutritional value.",
    color: "rgba(144, 238, 144, 0.2)",
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80"
  },
  {
    icon: <Heart size={32} />,
    title: "Holistic Care",
    desc: "We focus on the complete well-being of our community.",
    color: "rgba(152, 251, 152, 0.2)",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
  }
];

// ── TYPES ──
interface AnimatedNumberProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const AnimatedNumber: React.FC<AnimatedNumberProps> = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState<number>(0);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });

    const el = document.getElementById(`stat-${end}`);
    if (el) observer.observe(el);
    return () => observer.disconnect();
  }, [end]);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isVisible, end, duration]);

  return <span id={`stat-${end}`}>{count}{suffix}</span>;
};

const OurStory: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [openIngredient, setOpenIngredient] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const timelineRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const { scrollYProgress: timelineProgress } = useScroll({
    target: timelineRef,
    offset: ["start end", "end end"]
  });

  const lineHeight = useTransform(timelineProgress, [0, 1], ["0%", "100%"]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const filteredFaqs = useMemo(() => {
    return FAQ_DATA.filter(item =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="ourstory-wrapper">
      <motion.div className="progress-bar" style={{ scaleX }} />

      {/* ── HERO ── */}
      <section className="os-hero">
        <div className="os-hero-overlay" />
        <div className="os-hero-content">
          <p className="os-hero-eyebrow">
            Our&nbsp;&nbsp;journey&nbsp;&nbsp;began&nbsp;&nbsp;with&nbsp;&nbsp;a&nbsp;&nbsp;simple&nbsp;&nbsp;belief&nbsp;&nbsp;that&nbsp;&nbsp;connects&nbsp;&nbsp;to&nbsp;&nbsp;the&nbsp;&nbsp;roots&nbsp;&nbsp;of&nbsp;&nbsp;<br />
            Bowls&nbsp;&nbsp;&&nbsp;&nbsp;Bottles
          </p>
          <motion.h1
            className="os-hero-title os-cinematic-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            Rooted in Nature
          </motion.h1>
        </div>

        {/* Stats bar */}
        <div className="os-stats-bar glass-effect">
          <div className="os-stat">
            <span className="os-stat-num"><AnimatedNumber end={18} suffix="+" /></span>
            <span className="os-stat-label">Partner Farms</span>
            <span className="os-stat-desc">Direct partnerships with local, small-scale farmers</span>
          </div>
          <div className="os-stat">
            <span className="os-stat-num"><AnimatedNumber end={128} suffix="k" /></span>
            <span className="os-stat-label">Bottles created</span>
            <span className="os-stat-desc">Cold-pressed juices crafted since day one</span>
          </div>
          <div className="os-stat">
            <span className="os-stat-num"><AnimatedNumber end={5} /></span>
            <span className="os-stat-label">Wellness categories</span>
            <span className="os-stat-desc">Tailored programs for wellness goals</span>
          </div>
          <div className="os-stat">
            <span className="os-stat-num"><AnimatedNumber end={100} suffix="%" /></span>
            <span className="os-stat-label">Clean focus</span>
            <span className="os-stat-desc">Conscious selection, no hidden additives</span>
          </div>
        </div>
      </section>

      {/* ── SEED OF AN IDEA ── */}
      <section className="os-section os-seed">
        <div className="os-container">
          <div className="os-two-column">
            <motion.div className="os-column-text" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInVariants} className="os-seed-badge"><Sprout color="var(--os-orange)" size={24} /><span>Our Roots</span></motion.div>
              <motion.h2 variants={fadeInVariants} className="os-section-title">The Seed of an Idea</motion.h2>
              <motion.p variants={fadeInVariants}>It all started in a small home kitchen, driven by a passion for creating genuinely healthy meals that don't compromise on taste or your precious time.</motion.p>
              <motion.p variants={fadeInVariants}>We began cold-pressing juices using organic produce that felt deeply fresh and far more nourishing than anything store-bought.</motion.p>
              <motion.ul variants={fadeInVariants} className="os-bottle-list">
                <li>Deeply fresh organic produce</li>
                <li>Nourishment beyond store-bought limits</li>
              </motion.ul>
            </motion.div>
            <motion.div 
              className="os-column-image glass-frame hover-zoom" 
              initial={{ opacity: 0, x: 100, rotate: 5 }} 
              whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" alt="Seed" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FROM BOTTLE TO BOWL ── */}
      <section className="os-section os-bottle">
        <div className="os-container">
          <div className="os-two-column reverse">
            <motion.div 
              className="os-column-image glass-frame hover-zoom" 
              initial={{ opacity: 0, x: -100, rotate: -5 }} 
              whileInView={{ opacity: 1, x: 0, rotate: 0 }} 
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: "easeOut" }}
            >
              <img src="https://images.unsplash.com/photo-1670427255013-f01390d9cbfa?q=80&w=1287&auto=format&fit=crop" alt="Bottle" />
            </motion.div>
            <motion.div className="os-column-text" initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.div variants={fadeInVariants} className="os-seed-badge"><Utensils color="var(--os-green-dark)" size={24} /><span>Evolution</span></motion.div>
              <motion.h2 variants={fadeInVariants} className="os-section-title">From Bottle to Bowl</motion.h2>
              <motion.p variants={fadeInVariants}>As the demand for our juices grew, so did our vision. We realized that nourishing ingredients could do so much more than just fill a bottle.</motion.p>
              <motion.ul variants={fadeInVariants} className="os-bottle-list">
                <li>Fresh salads, soups, and smoothies</li>
                <li>Cold-pressed juices and superfood bowls</li>
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="os-section os-journey os-dark-editorial">
        <div className="os-container">
          <div className="os-centered">
            <motion.div 
              variants={fadeInVariants} 
              className="os-seed-badge" 
              style={{ justifyContent: "center" }}
            >
              <History color="var(--os-green-dark)" size={24} />
              <span style={{ color: "var(--os-green-dark)" }}>The Narrative</span>
            </motion.div>
            <h2 className="os-section-title">How Our Journey Grew</h2>
          </div>

          <div className="os-timeline-wrapper" ref={timelineRef}>
            <div className="os-timeline-bg-line" /><motion.div className="os-timeline-line" style={{ height: lineHeight }} />
            {TIMELINE_STEPS.map((step, i) => (
              <motion.div key={i} className={`os-timeline-item ${i % 2 === 0 ? 'left' : 'right'}`} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                {/* Visual Backdrop (Circular Video) */}
                <div className={`os-timeline-visual-backdrop ${i % 2 === 0 ? 'back-right' : 'back-left'}`}>
                  <motion.div 
                    className="os-visual-container" 
                    initial={{ opacity: 1, scale: 0.5, rotate: i % 2 === 0 ? 20 : -20 }} 
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  >
                    <video 
                      key={step.video}
                      autoPlay 
                      muted={true} 
                      loop 
                      playsInline 
                      preload="auto" 
                      className="os-visual-bg-img"
                    >
                      <source src={step.video} type="video/mp4" />
                    </video>
                  </motion.div>
                </div>
                <div className="os-timeline-content-editorial">
                  <span className="os-timeline-chapter">{step.chapter}</span>
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
                <div className="os-timeline-dot-editorial" />
              </motion.div>
            ))}
          </div>

          {/* Team Section */}
          <div className="os-team-section">
            <h3 className="os-centered">Meet the Visionaries</h3>
            <div className="os-team-grid">
              {VISIONARIES.map((member, i) => (
                <motion.div 
                  key={i} 
                  className="os-team-card glass-effect hover-lift" 
                  initial={{ opacity: 0, scale: 0.9, rotate: i % 2 === 0 ? 5 : -5 }} 
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }} 
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                >
                  <div className="os-team-img"><img src={member.img} alt={member.name} /></div>
                  <h4>{member.name}</h4>
                  <span>{member.role}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── INGREDIENTS ── */}
      <section className="os-section os-ingredients">
        <div className="os-container">
          <div className="os-two-column">
            <div className="os-column-text">
              <motion.div variants={fadeInVariants} className="os-seed-badge"><ShoppingBag color="var(--os-cream)" size={24} /><span>Sourcing</span></motion.div>
              <h2 className="os-section-title white-text">What Makes Our Ingredients Special</h2>
              <div className="os-ingredient-cards-grid">
                {INGREDIENT_CARDS.map((card, i) => (
                  <motion.div key={i} className={`os-premium-card glass-effect ${openIngredient === i ? 'active' : ''}`} onClick={() => setOpenIngredient(openIngredient === i ? null : i)} whileHover={{ y: -5 }}>
                    <div className="os-card-main-content">
                      <div className="os-ingredient-icon">{card.icon}</div>
                      <div className="os-card-info"><h4>{card.title}</h4><p>{card.desc}</p></div>
                    </div>
                    <AnimatePresence>
                      {openIngredient === i && (
                        <motion.div className="os-card-reveal" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                          <div className="os-reveal-divider" /><div className="os-reveal-content"><ArrowRight size={16} color="var(--os-orange)" /><p>{card.details}</p></div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              className="os-column-image glass-frame hover-zoom" 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }} 
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2 }}
            >
              <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=800&q=80" alt="Ingredients" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PHILOSOPHY ── */}
      <section className="os-section os-philosophy">
        <div className="os-container os-centered">
          <h2 className="os-section-title">Our Core Philosophy</h2>
          <div className="os-philosophy-cards">
            {PHILOSOPHY_CARDS.map((card, i) => (
              <motion.div key={i} className="os-phil-card glass-effect" whileHover={{ y: -10 }}>
                <div className="os-phil-bg-image" style={{ backgroundImage: `url(${card.image})` }} />
                <div className="os-phil-bg-glow" style={{ background: card.color }} />
                <span className="os-phil-icon-wrapper"><span className="os-phil-icon">{card.icon}</span></span>
                <h4>{card.title}</h4>
                <p>{card.desc}</p>
                <div className="os-phil-shimmer" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="os-section os-faq">
        <div className="os-container os-centered">
          <h2 className="os-section-title">Questions we often hear</h2>
          <div className="os-faq-search-wrapper glass-effect">
            <Search className="os-search-icon" size={20} /><input type="text" placeholder="Search for answers..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="os-faq-search-input" />
            {searchQuery && <X className="os-search-clear" size={18} onClick={() => setSearchQuery("")} />}
          </div>
          <div className="os-faq-grid">
            <AnimatePresence>
              {filteredFaqs.map((item, i) => (
                <motion.div key={item.q} layout className={`os-faq-item glass-effect ${openFaq === i ? 'active' : ''}`} onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                  <div className="os-faq-header"><h4>{item.q}</h4><div className="os-faq-icon-tray">{openFaq === i ? <Minus size={20} /> : <Plus size={20} />}</div></div>
                  <AnimatePresence>{openFaq === i && (<motion.div className="os-faq-body" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}><div className="os-faq-divider" /><p>{item.a}</p></motion.div>)}</AnimatePresence>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="os-cta">
        <div className="os-container os-centered">
          <h2 className="os-section-title">Come taste the story</h2>
          <p>Explore our menu, start a subscription, or invite us to cater for your next event.</p>
          <div className="os-cta-buttons">
            <button className="os-btn-primary hover-lift shimmer">Order Now</button>
            <button className="os-btn-secondary hover-lift shimmer">Start Subscription</button>
            <button className="os-btn-outline hover-lift shimmer">Contact Us</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
