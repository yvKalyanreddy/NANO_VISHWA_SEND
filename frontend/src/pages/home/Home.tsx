import { useNavigate } from 'react-router-dom'
import './Home.css'
import HeroScroll from '../../components/HeroScroll'
import greenBottle from '../../assets/home/greenbottle.png'
import salad from '../../assets/home/salad.png'
import salad2 from '../../assets/home/salad2.png'
import tropicalSunrise from '../../assets/home/TropicalSunrise.png'
import berryBlast from '../../assets/home/BerryBlast.jpg'
import melonRefresh from '../../assets/home/melon Refresh.png'
import greenGlow from '../../assets/home/Green Glow.png'
import citrusSunrise from '../../assets/home/Citrus Sunrise.png'
import heartBeet from '../../assets/home/Heart Beet.png'
import tropicalCleanse from '../../assets/home/Tropical Cleanse.png'
import superGreen from '../../assets/home/The Super Green.png'
import mediterraneanBliss from '../../assets/home/mediterraneanBliss.png'
import citrusHarvest from '../../assets/home/Citrus harvest.png'
import classicAcai from '../../assets/home/Classic Acai.png'
import matchaZen from '../../assets/home/mtacha Zen.png'
import nuttyCacao from '../../assets/home/Nutty Cacao.png'
import dragonfruitDream from '../../assets/home/DragonFruit Dream.png'
import gingerBurn from '../../assets/home/Ginger Burn shot.png'
import charcoalLemonade from '../../assets/home/Charcoal lemonade.png'
import blueSpirulina from '../../assets/home/Blue spirulina.png'
import pureCelery from '../../assets/home/Pure celery.png'
import storyPeoples from '../../assets/home/Ourstorypeoples.png'
import storySalad from '../../assets/home/ourStorySalad.png'
import storyBottles from '../../assets/home/ourStoryBottles.png'

const whyComingBackData = [
  {
    id: 'fresh',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5"></circle>
        <line x1="12" y1="1" x2="12" y2="3"></line>
        <line x1="12" y1="21" x2="12" y2="23"></line>
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
        <line x1="1" y1="12" x2="3" y2="12"></line>
        <line x1="21" y1="12" x2="23" y2="12"></line>
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
      </svg>
    ),
    title: 'Pressed fresh daily',
    text: 'Our bottles are prepared in small batches to keep flavor bright and ingredients nutrient-rich.'
  },
  {
    id: 'balanced',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 10h16M2 14c0 4.418 4.477 8 10 8s10-3.582 10-8H2z"></path>
        <path d="M12 4v6"></path>
        <path d="M14 6c-1-1-3-1-4 0"></path>
      </svg>
    ),
    title: 'Balanced meal options',
    text: 'From fruit bowls to salads, every category gives customers a fresh grab-and-go choice.'
  },
  {
    id: 'pickup',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13"></rect>
        <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
        <circle cx="5.5" cy="18.5" r="2.5"></circle>
        <circle cx="18.5" cy="18.5" r="2.5"></circle>
      </svg>
    ),
    title: 'Fast pickup and delivery',
    text: 'Perfect for workdays, post-workout recovery, and healthy office orders.'
  },
  {
    id: 'seasonal',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"></path>
      </svg>
    ),
    title: 'Seasonal specials',
    text: 'Limited-edition blends and toppings keep the menu feeling new without losing consistency.'
  }
]

const testimonialsData = [
  {
    id: 'aanya',
    name: 'Aanya S.',
    role: 'Weekly subscriber',
    avatar: 'https://i.pravatar.cc/150?img=5',
    text: '"The juices taste genuinely fresh and the subscription made healthy mornings so much easier for me."'
  },
  {
    id: 'marcus',
    name: 'Marcus T.',
    role: 'Fitness customer',
    avatar: 'https://i.pravatar.cc/150?img=11',
    text: '"Their smoothie bowls are my post-gym favorite. Clean ingredients, generous toppings, and always consistent."'
  },
  {
    id: 'elena',
    name: 'Elena R.',
    role: 'Family regular',
    avatar: 'https://i.pravatar.cc/150?img=9',
    text: '"I love that there\'s something for every mood — salad for lunch, detox shot in the evening, and fruit bowls for the kids."'
  }
];

const plans = [
  {
    id: '1-week',
    title: '1 Week',
    badge: 'Starter',
    subtitle: '6 bottles included',
    price: '₹550',
    unit: '/ week',
    desc: 'Perfect for first-time subscribers who want a light trial before committing to a longer routine.',
    features: [
      'Choose fruit or vegetable blends',
      'Great for testing a morning routine',
      'Easy single-week commitment'
    ],
    footerTag: 'Mon - Sat',
    buttonText: 'Get Started',
    buttonStyle: 'outline'
  },
  {
    id: '2-week',
    title: '2 Week',
    badge: 'Reset',
    subtitle: '12 bottles included',
    price: '₹1050',
    unit: '/ 2 weeks',
    desc: 'A balanced choice for customers who want more flexibility while still keeping a healthy delivery habit.',
    features: [
      'Mix citrus, greens, and roots',
      'Ideal for workweek wellness resets',
      'Flexible mid-length commitment'
    ],
    footerTag: 'Balanced pick',
    buttonText: 'Choose Plan',
    buttonStyle: 'outline'
  },
  {
    id: '4-week',
    title: '4 Week',
    badge: 'Most Popular',
    subtitle: '24 bottles included',
    price: '₹2000',
    unit: '/ month',
    desc: 'Our best-value monthly option for customers who want consistency, better savings, and a fully built wellness rhythm.',
    features: [
      'Priority flavor rotation access',
      'Best for everyday wellness habits',
      'More savings than one-off orders'
    ],
    footerTag: 'Best value',
    buttonText: 'Subscribe Now',
    buttonStyle: 'solid-green',
    specialBg: true
  },
  {
    id: 'detox',
    title: 'Detox Plan',
    badge: 'Cleanse',
    subtitle: '4 bottle cleanse pack',
    price: '₹375',
    unit: '/ pack',
    desc: 'A focused body-cleanse option for quick resets with a compact, easy-to-follow bottle lineup.',
    features: [
      'Super Red, Super Green, WOW Wheatgrass',
      'Cool Pineapple finish',
      'Great as an occasional cleanse'
    ],
    footerTag: 'Body cleanse',
    buttonText: 'Try Detox',
    buttonStyle: 'solid-orange'
  },
  {
    id: 'office',
    title: 'Office Plan',
    badge: 'Team',
    subtitle: '30 bottles included',
    price: '₹2450',
    unit: '/ month',
    desc: 'Designed for small teams or shared office fridges that want healthier grab-and-go options during the week.',
    features: [
      'Mixed fruit and green blends',
      'Ideal for coworking and studios',
      'Simple recurring team delivery'
    ],
    footerTag: 'Bulk value',
    buttonText: 'Talk to Us',
    buttonStyle: 'outline'
  },
  {
    id: 'weekend',
    title: 'Weekend Reset',
    badge: 'Light Detox',
    subtitle: '2 day mini reset',
    price: '₹699',
    unit: '/ reset',
    desc: 'A short-format cleanse for customers who want a compact refresh without committing to a full monthly plan.',
    features: [
      'Built for Saturday-Sunday routines',
      'Hydration and cleanse support',
      'Easy entry into detox packs'
    ],
    footerTag: '2 day reset',
    buttonText: 'Book Reset',
    buttonStyle: 'outline'
  }
]

const detoxDrinks = [
  {
    id: 'ginger-burn',
    name: 'Ginger Burn Shot',
    price: '₹150',
    image: gingerBurn,
  },
  {
    id: 'charcoal-lemonade',
    name: 'Charcoal Lemonade',
    price: '₹170',
    image: charcoalLemonade,
  },
  {
    id: 'blue-spirulina',
    name: 'Blue Spirulina',
    price: '₹750',
    image: blueSpirulina,
  },
  {
    id: 'pure-celery',
    name: 'Pure Celery',
    price: '₹100',
    image: pureCelery,
  }
]

const smoothieBowls = [
  {
    id: 'classic-acai',
    name: 'Classic Acai',
    desc: 'Organic acai, banana, and almond milk. Topped with fresh berries, house granola, and a honey drizzle.',
    price: '₹200',
    image: classicAcai,
  },
  {
    id: 'matcha-zen',
    name: 'Matcha Zen',
    desc: 'Matcha, spinach, mango, kiwi, and coconut milk blended to perfection. Topped with coconut flakes.',
    price: '₹350',
    image: matchaZen,
  },
  {
    id: 'nutty-cacao',
    name: 'Nutty Cacao',
    desc: 'Peanut butter, raw cacao, banana, and oat milk. A rich and satisfying post-workout recovery bowl.',
    price: '₹400',
    image: nuttyCacao,
  },
  {
    id: 'dragonfruit-dream',
    name: 'Dragonfruit Dream',
    desc: 'Vibrant pink dragonfruit, mango, and coconut water. Topped with chia seeds and fresh kiwi slices.',
    price: '₹300',
    image: dragonfruitDream,
  }
]

const salads = [
  {
    id: 'super-green',
    name: 'The Super Green',
    tag: 'Best seller',
    desc: 'Kale, spinach, avocado, edamame, cucumber, and roasted pumpkin seeds with lemon-tahini dressing.',
    price: '₹150',
    image: superGreen,
  },
  {
    id: 'mediterranean-bliss',
    name: 'Mediterranean Bliss',
    tag: 'House favorite',
    desc: 'Mixed greens, cherry tomatoes, kalamata olives, red onion, feta cheese, and a light herb vinaigrette.',
    price: '₹250',
    image: mediterraneanBliss,
  },
  {
    id: 'citrus-harvest',
    name: 'Citrus Harvest',
    tag: 'Chef special',
    desc: 'Baby lettuce, roasted pumpkin, orange segments, toasted seeds, cucumber ribbons, and a bright herb dressing.',
    price: '₹300',
    image: citrusHarvest,
  }
]

const coldPressedJuices = [
  {
    id: 'green-glow',
    name: 'Green Glow',
    desc: 'Kale, Spinach, Apple, Lemon',
    price: '₹850',
    image: greenGlow,
  },
  {
    id: 'citrus-sunrise',
    name: 'Citrus Sunrise',
    desc: 'Orange, Carrot, Turmeric, Ginger',
    price: '₹100',
    image: citrusSunrise,
  },
  {
    id: 'heart-beet',
    name: 'Heart Beet',
    desc: 'Beetroot, Red Apple, Celery, Lime',
    price: '₹250',
    image: heartBeet,
  },
  {
    id: 'tropical-cleanse',
    name: 'Tropical Cleanse',
    desc: 'Pineapple, Cucumber, Mint, Aloe',
    price: '₹200',
    image: tropicalCleanse,
  }
]

const fruitBowls = [
  {
    id: 'tropical-sunrise',
    name: 'Tropical Sunrise',
    desc: 'Fresh mango, papaya, dragon fruit, kiwi, and pineapple chunks topped with toasted coconut flakes.',
    price: '₹140',
    image: tropicalSunrise,
  },
  {
    id: 'berry-blast',
    name: 'Berry Blast',
    desc: 'A simple but powerful antioxidant mix of fresh strawberries, blueberries, and raspberries.',
    price: '₹110',
    image: berryBlast,
  },
  {
    id: 'melon-refresh',
    name: 'Melon Refresh',
    desc: 'Hydrating watermelon, honeydew, and cantaloupe sprinkled with fresh mint leaves.',
    price: '₹100',
    image: melonRefresh,
  }
]

/* ── Category card data ── */
const categories = [
  {
    id: 'juices',
    tag: 'Pressed daily',
    tagStyle: 'orange',
    title: 'Coldpressed\nJuices',
    desc: 'Fruit and vegetable blends packed with bright flavor and clean energy.',
    link: '8 menu items',
    active: false,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="22" y="22" width="36" height="42" rx="8" stroke="#FF9500" strokeWidth="5" fill="none" />
        <path d="M28 22V18a4 4 0 0 1 4-4h16a4 4 0 0 1 4 4v4" stroke="#FF9500" strokeWidth="5" strokeLinecap="round" />
        <path d="M30 38h20M30 46h14" stroke="#FF9500" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="30" r="4" fill="#FF9500" />
      </svg>
    ),
  },
  {
    id: 'bowls',
    tag: 'Fresh cut fruit',
    tagStyle: 'green',
    title: 'Fruit Bowls',
    desc: 'Refreshing bowls layered with tropical fruit, berries, and bright toppings.',
    link: '3 signature bowls',
    active: false,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="31" cy="44" r="13" stroke="#193B0A" strokeWidth="5" fill="none" />
        <circle cx="50" cy="44" r="13" stroke="#193B0A" strokeWidth="5" fill="none" />
        <path d="M31 44 Q35 20 40.5 16" stroke="#193B0A" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M50 44 Q46 20 40.5 16" stroke="#193B0A" strokeWidth="4" strokeLinecap="round" fill="none" />
        <path d="M38 18 Q40 12 44 14" stroke="#193B0A" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    ),
  },
  {
    id: 'salads',
    tag: 'Locally sourced',
    tagStyle: 'white',
    title: 'Salads',
    desc: 'Crunchy greens, satisfying proteins, and house dressings made to order',
    link: 'Build or choose',
    active: true,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="40" cy="52" rx="24" ry="10" stroke="white" strokeWidth="5" fill="none" />
        <path d="M16 52 Q18 68 40 68 Q62 68 64 52" stroke="white" strokeWidth="5" strokeLinecap="round" fill="none" />
        <circle cx="32" cy="36" r="8" stroke="white" strokeWidth="4" fill="none" />
        <circle cx="48" cy="34" r="7" stroke="white" strokeWidth="4" fill="none" />
        <circle cx="40" cy="28" r="7" stroke="white" strokeWidth="4" fill="none" />
      </svg>
    ),
  },
  {
    id: 'smoothie',
    tag: 'Creamy blends',
    tagStyle: 'orange',
    title: 'Smoothie\nBowls',
    desc: 'Thick spoonable blends topped with granola, seeds, and fresh fruit.',
    link: '3 best sellers',
    active: false,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 26h32l-6 36H30L24 26Z" stroke="#FF9500" strokeWidth="5" strokeLinejoin="round" fill="none" />
        <rect x="30" y="18" width="20" height="8" rx="4" stroke="#FF9500" strokeWidth="4" fill="none" />
        <path d="M50 20 Q58 16 58 10" stroke="#FF9500" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M33 40h14M35 50h10" stroke="#FF9500" strokeWidth="4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'detox',
    tag: 'Cleanse shots',
    tagStyle: 'green',
    title: 'Detox Drinks',
    desc: 'Potent wellness shots and cleansing drinks for a quick daily reset.',
    link: '4 quick boosts',
    active: false,
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M40 14 L42.5 22 L40 30 L37.5 22 Z" stroke="#193B0A" strokeWidth="4" strokeLinejoin="round" fill="#193B0A" />
        <path d="M66 40 L58 42.5 L50 40 L58 37.5 Z" stroke="#193B0A" strokeWidth="4" strokeLinejoin="round" fill="#193B0A" />
        <path d="M14 40 L22 42.5 L30 40 L22 37.5 Z" stroke="#193B0A" strokeWidth="4" strokeLinejoin="round" fill="#193B0A" />
        <path d="M54 20 L54 28" stroke="#193B0A" strokeWidth="4" strokeLinecap="round" />
        <path d="M58 24 L50 24" stroke="#193B0A" strokeWidth="4" strokeLinecap="round" />
        <circle cx="40" cy="40" r="10" stroke="#193B0A" strokeWidth="5" fill="none" />
        <circle cx="62" cy="58" r="5" stroke="#193B0A" strokeWidth="3.5" fill="none" />
      </svg>
    ),
  },
]

export default function Home() {
  const navigate = useNavigate()

  const handleScrollToSection = (id: string, e?: React.MouseEvent) => {
    e?.preventDefault();
    const sectionIds: Record<string, string> = {
      'bowls': 'fruit-bowls',
      'smoothie': 'smoothies',
      'salads': 'salads',
      'juices': 'juices',
      'detox': 'detox'
    };

    const targetId = sectionIds[id];
    if (targetId) {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="home-page">

      {/* ── Hero Scroll Section (GSAP + Canvas frame sequence) ── */}
      <HeroScroll />

      {/* ── Browse by Category ── */}
      <section className="browse-section">
        <div className="browse-header">
          <h2 className="browse-title">Browse by category</h2>
          <p className="browse-subtitle">
            Pick a section and jump straight into juices, bowls, salads, smoothies, and detox
            essentials. Each category is highlighted as its own large card for a stronger menu
            overview.
          </p>
        </div>

        <div className="browse-cards">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`browse-card${cat.active ? ' browse-card--active' : ''}`}
              onClick={(e) => handleScrollToSection(cat.id, e)}
            >
              <div className="card-icon-wrap">{cat.icon}</div>

              <span className={`card-tag card-tag--${cat.tagStyle}`}>{cat.tag}</span>

              <h3 className="card-title">
                {cat.title.split('\n').map((line, i) => (
                  <span key={i}>{line}{i < cat.title.split('\n').length - 1 && <br />}</span>
                ))}
              </h3>

              <p className="card-desc">{cat.desc}</p>

              <div className="card-footer">
                <a className="card-link" href={`#${cat.id}`} onClick={(e) => handleScrollToSection(cat.id, e)}>
                  {cat.link}
                  <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Fruit Bowls Section ── */}
      <section id="fruit-bowls" className="fruit-bowls-section">
        <div className="fruit-bowls-header">
          <h2 className="fruit-bowls-title">Fruit Bowls</h2>
          <p className="fruit-bowls-subtitle">
            A symphony of fresh cut fruits, perfect for a refreshing breakfast or a midday energy boost.
          </p>
        </div>

        <div className="fruit-bowls-cards">
          {fruitBowls.map((bowl) => (
            <div key={bowl.id} className="fruit-bowl-card">
              <div className="fruit-bowl-image-container">
                <img src={bowl.image} alt={bowl.name} className="fruit-bowl-image" />
              </div>
              <div className="fruit-bowl-content">
                <h3 className="fruit-bowl-name">{bowl.name}</h3>
                <p className="fruit-bowl-desc">{bowl.desc}</p>
                <div className="fruit-bowl-footer">
                  <span className="fruit-bowl-price">{bowl.price}</span>
                  <button className="fruit-bowl-add">Add</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Coldpressed Juices Section ── */}
      <section id="juices" className="juices-section">
        <div className="juices-container">
          <div className="juices-topbar">
            <div className="juices-header">
              <h2 className="juices-title">Coldpressed Juices</h2>
              <p className="juices-subtitle">
                Raw, unpasteurized, and packed with vitamins. Pressed daily to ensure maximum nutrient retention.
              </p>
            </div>
            <button className="view-all-btn">View All Juices</button>
          </div>

          <div className="juices-cards">
            {coldPressedJuices.map((juice) => (
              <div key={juice.id} className="juice-card">
                <div className="juice-image-container">
                  <img src={juice.image} alt={juice.name} className="juice-image" />
                </div>
                <h3 className="juice-name">{juice.name}</h3>
                <p className="juice-desc">{juice.desc}</p>
                <div className="juice-price">{juice.price}</div>
                <button className="juice-add">Add to Order</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Salads Section ── */}
      <section id="salads" className="salads-section">
        <div className="salads-container">
          <div className="salads-header">
            <h2 className="salads-title">Salads</h2>
            <p className="salads-subtitle">
              Our salads are made to order with seasonal organic produce and our<br />signature house-made dressings.
            </p>
          </div>

          <div className="salads-cards">
            {salads.map((salad) => (
              <div key={salad.id} className="salad-card">
                <div className="salad-image-container">
                  <img src={salad.image} alt={salad.name} className="salad-image" />
                </div>
                <div className="salad-content">
                  <span className="salad-tag">{salad.tag}</span>
                  <h3 className="salad-name">{salad.name}</h3>
                  <p className="salad-desc">{salad.desc}</p>
                  <div className="salad-footer">
                    <span className="salad-price">{salad.price}</span>
                    <button className="salad-add">Add</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Smoothie Bowls Section ── */}
      <section id="smoothies" className="smoothies-section">
        <div className="smoothies-container">
          <div className="smoothies-header">
            <h2 className="smoothies-title">Smoothie Bowls</h2>
            <p className="smoothies-subtitle">
              Thick, creamy blends topped with crunchy granola and superfoods. Eat your<br />smoothie with a spoon.
            </p>
          </div>

          <div className="smoothies-grid">
            {smoothieBowls.map((bowl) => (
              <div key={bowl.id} className="smoothie-card">
                <div className="smoothie-content">
                  <h3 className="smoothie-name">{bowl.name}</h3>
                  <p className="smoothie-desc">{bowl.desc}</p>
                  <div className="smoothie-footer">
                    <span className="smoothie-price">{bowl.price}</span>
                    <button className="smoothie-add">Add to Order</button>
                  </div>
                </div>
                <div className="smoothie-image-container">
                  <img src={bowl.image} alt={bowl.name} className="smoothie-image" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Detox Drinks Section ── */}
      <section id="detox" className="detox-section">
        <div className="detox-header">
          <h2 className="detox-title">Detox Drinks</h2>
          <p className="detox-subtitle">
            Potent shots and detoxifying waters designed to flush toxins and kickstart your metabolism.
          </p>
        </div>

        <div className="detox-cards">
          {detoxDrinks.map((drink) => (
            <div key={drink.id} className="detox-card">
              <div className="detox-image-container">
                <img src={drink.image} alt={drink.name} className="detox-image" />
              </div>
              <h3 className="detox-name">{drink.name}</h3>
              <span className="detox-price">{drink.price}</span>
              <button className="detox-add">Add to Order</button>
            </div>
          ))}
        </div>
      </section>

      {/* ── Subscriptions Section ── */}
      <section className="subscriptions-section">
        <div className="subscriptions-container">

          <div className="subs-hero">
            <div className="subs-hero-left">
              <span className="subs-tag">🌿 Wellness subscription</span>
              <h2 className="subs-title">Choose a better routine, one bottle at a time.</h2>
              <p className="subs-subtitle">
                A cleaner, more modern plan layout with a strong featured offer, simpler comparisons, and flexible options for regular juice drinkers and occasional detox customers.
              </p>
              <div className="subs-perks">
                <span>Fresh daily batches</span>
                <span>Pause anytime</span>
                <span>Custom flavor mix</span>
                <span>Mon - Sat delivery</span>
              </div>
            </div>
            <div className="subs-hero-right">
              <span className="featured-tag">Most chosen plan</span>
              <div className="featured-price">
                <span className="amount">₹2000</span>
                <span className="unit">/ month</span>
              </div>
              <p className="featured-desc">
                Best for customers building a steady wellness habit with regular deliveries and access to rotating seasonal blends.
              </p>
              <ul className="featured-features">
                <li><span className="check">✓</span> 24 bottles included with monthly savings</li>
                <li><span className="check">✓</span> Priority access to new fruit and detox blends</li>
                <li><span className="check">✓</span> Pause, skip, or switch flavors whenever needed</li>
              </ul>
              <div className="featured-buttons">
                <button className="btn-subscribe">Subscribe Now</button>
                <button className="btn-compare">Compare Plans</button>
              </div>
            </div>
          </div>

          <div className="subs-tabs">
            <button className="tab active">Popular plans</button>
            <button className="tab">Weekly delivery</button>
            <button className="tab">Monthly savings</button>
            <button className="tab">Detox options</button>
          </div>

          <div className="subs-grid">
            {plans.map(plan => (
              <div key={plan.id} className={`plan-card ${plan.specialBg ? 'plan-card--special' : ''}`}>
                <div className="plan-header">
                  <h3 className="plan-title">{plan.title}</h3>
                  <span className="plan-badge">{plan.badge}</span>
                </div>
                <span className="plan-sub">{plan.subtitle}</span>
                <div className="plan-price">
                  <span className="amount">{plan.price}</span>
                  <span className="unit">{plan.unit}</span>
                </div>
                <p className="plan-desc">{plan.desc}</p>
                <ul className="plan-features">
                  {plan.features.map((f, i) => (
                    <li key={i}><span className="check">✓</span> {f}</li>
                  ))}
                </ul>
                <div className="plan-footer">
                  <span className="plan-footer-tag">{plan.footerTag}</span>
                  <button className={`btn-plan btn-plan--${plan.buttonStyle}`}>{plan.buttonText}</button>
                </div>
              </div>
            ))}
          </div>

          <div className="subs-bottom">
            <p className="subs-disclaimer">
              Subscriptions renew based on your selected plan and delivery schedule. You can pause, switch flavors, or restart without losing your saved preferences and delivery rhythm.
            </p>
            <div className="subs-guarantees">
              <span>Pause anytime</span>
              <span>No hidden hassle</span>
              <span>Fresh every morning</span>
            </div>
          </div>

        </div>
      </section>

      {/* ── Our Story Section ── */}
      <section className="story-section">
        <div className="story-container">
          <div className="story-top">
            <span className="story-tag">
              <svg viewBox="0 0 16 16" width="12" height="12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 2 C8 2, 2 4, 3 9 C4 13, 8 15, 8 15 C8 15, 12 13, 13 9 C14 4, 8 2, 8 2 Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
              Our story
            </span>
            <h2 className="story-title">Built from a small juice bar into a<br />daily wellness ritual.</h2>
          </div>

          <div className="story-content-grid">
            <div className="story-left">
              <p className="story-text">
                Bowls & Bottles started with one idea: healthy food should feel fresh, joyful, and easy to fit into everyday life. We began by pressing juices in small batches each morning and pairing them with fruit bowls, salads, and smoothie bowls made from produce we would proudly serve at our own table.
              </p>
              <p className="story-text">
                Today, our menu is still centered around seasonal ingredients, balanced nutrition, and bright flavors that make clean eating something to look forward to.
              </p>

              <div className="story-stats">
                <div className="stat-box">
                  <span className="stat-number">2019</span>
                  <span className="stat-label">first kitchen opened</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">fresh<br />ingredients<br />rotated weekly</span>
                </div>
                <div className="stat-box">
                  <span className="stat-number">10k+</span>
                  <span className="stat-label">bowls and bottles<br />served monthly</span>
                </div>
              </div>

              <div className="story-actions">
                <button className="btn-journal">Read Our Journal</button>
                <button className="btn-store">Visit a Store</button>
              </div>
            </div>

            <div className="story-right">
              <div className="story-collage">
                <img src={storyPeoples} alt="Our team" className="img-top" />
                <div className="img-row">
                  <img src={storySalad} alt="Enjoying a bowl" className="img-bottom-left" />
                  <img src={storyBottles} alt="Fresh juices" className="img-bottom-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why People Keep Coming Back Section ── */}
      <section className="why-section">
        <div className="why-container">
          <div className="why-left">
            <h2 className="why-title">Why people<br />keep coming<br />back.</h2>
            <p className="why-subtitle">
              Everything on the menu is made to feel light, colorful, and easy to repeat throughout the week.
            </p>
          </div>
          <div className="why-grid">
            {whyComingBackData.map(item => (
              <div key={item.id} className="why-card">
                <div className="why-icon-wrapper">
                  {item.icon}
                </div>
                <h3 className="why-card-title">{item.title}</h3>
                <p className="why-card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="testimonials-section">
        <div className="testimonials-container">
          <div className="testimonials-header">
            <h2 className="testimonials-title">Loved by the community</h2>
            <p className="testimonials-subtitle">
              A few reasons Bowls & Bottles has become part of our customers'<br />weekly routine.
            </p>
          </div>

          <div className="testimonials-grid">
            {testimonialsData.map((review) => (
              <div key={review.id} className="testimonial-card">
                <div className="testi-user">
                  <img src={review.avatar} alt={review.name} className="testi-avatar" />
                  <div className="testi-info">
                    <span className="testi-name">{review.name}</span>
                    <span className="testi-role">{review.role}</span>
                  </div>
                </div>
                <div className="testi-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="star-icon">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  ))}
                </div>
                <p className="testi-text">{review.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
