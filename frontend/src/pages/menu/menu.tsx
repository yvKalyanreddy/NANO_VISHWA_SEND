import React, { useState } from "react";
import "./menu.css";

const categories = [
  "Coldpressed Juices",
  "Fruit Bowls",
  "Smoothie Bowls",
  "Salads",
  "Detox Drinks",
];

const menuData: Record<string, { name: string; description: string; price: number; tag?: string, img?: string }[]> = {
  "Coldpressed Juices": [
    { name: "Green Glow", description: "Kale, Spinach, Green Apple, Cucumber, Lemon, and a touch of Ginger.", price: 226, tag: "Vegan", img: "https://i.pinimg.com/736x/a2/0f/1c/a20f1cdbc9f23d91239760291acf6d45.jpg"},
    { name: "Citrus Sunrise", description: "Orange, Carrot, Turmeric, Ginger, and a pinch of Black Pepper.", price: 248, tag: "Vegan" , img: "https://i.pinimg.com/736x/9c/33/8a/9c338af1a4637a57b590dc05a13d11e5.jpg"},
    { name: "Heart Beet", description: "Beetroot, Red Apple, Celery, Lime, and Parsley.", price: 229, tag: "Vegan", img: "https://i.pinimg.com/736x/83/b7/1c/83b71c468f898c88be068fd2969421d4.jpg" },
    { name: "Tropical Cleanse", description: "Pineapple, Cucumber, Mint, and Aloe Vera Water.", price: 258, img: "https://i.pinimg.com/736x/ce/fe/ea/cefeea01f4240f53f8dc1fb633e005f1.jpg" },
    { name: "Celery Hydration", description: "100% Organic coldpressed single celery. Great for morning digestion.", price: 218, img: "https://i.pinimg.com/736x/53/2a/96/532a9676da133c27b417ac82a6ccd765.jpg" },
  ],
  "Fruit Bowls": [
    { name: "Tropical Sunrise", description: "Fresh mango, papaya, dragon fruit, and banana, topped with granola and toasted coconut flakes.", price: 369, img: "https://i.pinimg.com/1200x/45/7f/63/457f635768d7f859a4bfd81b65c6d7cc.jpg" },
    { name: "Berry Blast", description: "A simple but powerful antioxidant bowl with strawberries, blueberries, and raspberries.", price: 315, img:"https://i.pinimg.com/736x/09/82/83/098283a01b89c11c03fa4ff1b9d37e9a.jpg" },
    { name: "Melon Refresh", description: "Hydrating watermelon and honeydew, drizzle rice syrup, sprinkled with fresh mint and coconut water.", price: 286, img:"https://i.pinimg.com/1200x/7b/02/40/7b0240f761f7dceb117a1245f994314f.jpg" },
    { name: "Dragonfruit Dream", description: "Vibrant pink pitaya, dried bananas, passion fruit, and a sprinkle of chia seeds.", price: 346, img:"https://i.pinimg.com/736x/96/a2/a0/96a2a054f0a95300022ff54f00ff0a55.jpg" },
  ],
  "Smoothie Bowls": [
    { name: "Classic Acai", description: "Acai puree, almond milk, topped with fresh berries, frozen granola, and banana.", price: 380 },
    { name: "Matcha Zen", description: "Matcha, turmeric, mango, kale, and coconut milk blend. Topped with granola and chia seeds.", price: 338, tag: "Vegetarian" },
    { name: "Nutty Cacao", description: "Roasted cacao, raw cacao, banana, and oat milk. Topped with cacao nibs and crushed almonds.", price: 368 },
    { name: "Blue Magic", description: "Blue spirulina, pineapple, banana, and coconut milk. Topped with blueberries and hemp seeds.", price: 329 },
  ],
  "Salads": [
    { name: "The Super Green", description: "Kale, spinach, avocado, edamame, cucumber, and pumpkin seeds with a lemon-tahini dressing.", price: 328, tag: "Vegan" },
    { name: "Mediterranean Bliss", description: "Mixed greens, cherry tomatoes, kalamata olives, red onion, feta crumbs, and a light herb vinaigrette.", price: 310, tag: "Vegetarian" },
    { name: "Sweet Potato & Chickpee", description: "Roasted sweet potatoes, spiced chickpeas, crispy goat cheese, and balsamic glaze.", price: 368, tag: "Vegetarian" },
    { name: "Crunchy Thai Peanut", description: "Shredded cabbage, edamame, red pepper, cilantro, rice noodles, and a creamy peanut dressing.", price: 320 },
  ],
  "Detox Drinks": [
    { name: "Ginger Burn Shot", description: "A potent 60ml shot of pure ginger root, lemon, and turmeric for all-day energy.", price: 130, tag: "Vegan", img:"ginger.png"},
    { name: "Charcoal Lemonade", description: "Activated charcoal, fresh squeezed lemon. Shared naturally with a touch of Stevia.", price: 198 },
    { name: "Blue Spirulina Water", description: "Alkaline water infused with custom-dose blue spirulina and a touch of lime.", price: 198 },
    { name: "Turmeric Immunity", description: "Turmeric, orange juice, black pepper, and cinnamon. Blended smoothly for an everyday immune boost.", price: 146 },
  ],
};

const Menu: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("Coldpressed Juices");
  const [cart, setCart] = useState<Record<string, number>>({});

  const handleAdd = (itemName: string) => {
    setCart((prev) => ({ ...prev, [itemName]: (prev[itemName] || 0) + 1 }));
  };

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const scrollToSection = (category: string) => {
    setActiveCategory(category);
    const el = document.getElementById(category.replace(/\s+/g, "-"));
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="menu-page">
      {/* Header */}
      <header className="menu-header">
        <nav className="menu-nav">
          <div className="nav-logo">
            <span className="logo-leaf">🌿</span>
            <span className="logo-text">Bowls <em>and</em> Bottles</span>
          </div>
          <div className="nav-links">
            <a href="#">Home</a>
            <a href="#">Menu</a>
            <a href="#">Our Story</a>
            <a href="#">Testimonial</a>
            <a href="#">Enquiry</a>
            <a href="#">About Us</a>
          </div>
          <div className="nav-actions">
            <button className="btn-signin">Sign In</button>
            <button className="btn-subscribe">Subscription</button>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className="menu-hero">
        <h1>Our Menu</h1>
        <p>Freshly prepared daily. Order ahead for pickup or local delivery.</p>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search juices, bowls, salads and detox drinks..." />
        </div>
      </section>

      {/* Sticky Sidebar + Content */}
      <div className="menu-body">
        {/* Sidebar */}
        <aside className="menu-sidebar">
          {categories.map((cat) => {
            const count = menuData[cat].length;
            return (
              <button
                key={cat}
                className={`sidebar-item ${activeCategory === cat ? "active" : ""}`}
                onClick={() => scrollToSection(cat)}
              >
                <span>{cat}</span>
                <span className="sidebar-count">{count}</span>
              </button>
            );
          })}
        </aside>

        {/* Menu Sections */}
        <main className="menu-content">
          {categories.map((cat) => (
            <section key={cat} id={cat.replace(/\s+/g, "-")} className="menu-section">
              <h2 className="section-title">{cat}</h2>
              <div className="items-grid">
                {menuData[cat].map((item) => (
                  <div key={item.name} className="menu-card">
                    <div className="card-image">
                        {item.tag && <span className="item-tag">{item.tag}</span>}
  {item.img && <img src={item.img} alt={item.name} className="card-img" />}
</div>
                    <div className="card-body">
                      <h3 className="item-name">{item.name}</h3>
                      <p className="item-desc">{item.description}</p>
                      <div className="card-footer">
                        <span className="item-price">₹{item.price}</span>
                        {cart[item.name] ? (
  <div className="qty-control">
    <button className="qty-btn" onClick={() => setCart(prev => {
      const updated = { ...prev };
      if (updated[item.name] === 1) delete updated[item.name];
      else updated[item.name]--;
      return updated;
    })}>−</button>
    <span className="qty-count">{cart[item.name]}</span>
    <button className="qty-btn" onClick={() => handleAdd(item.name)}>+</button>
  </div>
) : (
  <button className="btn-add" onClick={() => handleAdd(item.name)}>Add</button>
)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Cart badge */}
      {totalItems > 0 && (
        <div className="cart-badge">
          🛒 {totalItems} item{totalItems > 1 ? "s" : ""} in cart
        </div>
      )}

      {/* Footer */}
      <footer className="menu-footer">
        <div className="footer-logo">
          <span className="logo-leaf">🌿</span>
          <span className="logo-text">Bowls <em>and</em> Bottles</span>
        </div>
        <div className="footer-links">
          <a href="#">Menu</a>
          <a href="#">Locations</a>
          <a href="#">Subscription</a>
          <a href="#">Our Story</a>
          <a href="#">Contact Us</a>
          <a href="#">Privacy Policy</a>
        </div>
        <p className="footer-copy">© 2025 Bowls & Bottles. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Menu;