import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './ProductCard.css';

/**
 * Knowffers Workplace Products Catalog Data (All 28 Products Across 10 Categories)
 */
export const KNOWFFERS_PRODUCTS = [
  // STATIONERY
  {
    id: "STAT-JK-A4-75GSM",
    title: "JK Copier Paper A4 75 GSM (Carton of 5 Reams / 2,500 Sheets)",
    category: "stationery",
    categoryLabel: "Stationery / Paper",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    vendor: "JK Paper",
    rating: 4.9,
    reviewsCount: 412,
    moq: 2,
    packSize: "carton",
    discount: "23% OFF",
    price: 1350,
    gstAvailable: true,
    tiers: [
      { qty: "2 - 9", price: 1350 },
      { qty: "10 - 49", price: 1260 },
      { qty: "50+", price: 1180 }
    ]
  },
  {
    id: "STAT-STAPLE-HD-K24",
    title: "Heavy Duty Desk Stapler (Kangaro 24/6) with 5 Staple Pin Boxes",
    category: "stationery",
    categoryLabel: "Stationery / Staplers",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "Kangaro",
    rating: 4.8,
    reviewsCount: 195,
    moq: 2,
    packSize: "set",
    discount: "22% OFF",
    price: 380,
    gstAvailable: true
  },
  {
    id: "STAT-REG-ACC-300P",
    title: "Hardbound Accounts Ledger Register (Pack of 4, 300 Pages Each)",
    category: "stationery",
    categoryLabel: "Stationery / Notebooks",
    image: "https://images.unsplash.com/photo-1544716278-e513176f20b5?auto=format&fit=crop&w=600&q=80",
    vendor: "Classmate B2B",
    rating: 4.8,
    reviewsCount: 160,
    moq: 1,
    packSize: "pack",
    discount: "26% OFF",
    price: 680,
    gstAvailable: true
  },
  {
    id: "STAT-PEN-BOX-50",
    title: "Executive Ballpoint & Gel Pen Assorted Box (Pack of 50)",
    category: "stationery",
    categoryLabel: "Stationery / Pens",
    image: "https://images.unsplash.com/photo-1585336261026-61e778929b0f?auto=format&fit=crop&w=600&q=80",
    vendor: "Reynolds",
    rating: 4.9,
    reviewsCount: 530,
    moq: 2,
    packSize: "box",
    discount: "24% OFF",
    price: 420
  },
  {
    id: "STAT-CELLO-10P",
    title: "Cello Fine Grip Pen Set (Pack of 10)",
    category: "stationery",
    categoryLabel: "Stationery / Pens",
    image: "https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?auto=format&fit=crop&w=600&q=80",
    vendor: "Cello",
    rating: 4.7,
    reviewsCount: 88,
    moq: 1,
    packSize: "pack",
    discount: "33% OFF",
    price: 100
  },

  // PRINTER SUPPLIES
  {
    id: "PRINT-LBL-4X6-500",
    title: "Direct Thermal Barcode Shipping Labels 4x6 Inch (Roll of 500)",
    category: "printing",
    categoryLabel: "Printer Supplies / Labels",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    vendor: "ThermalPack",
    rating: 4.8,
    moq: 4,
    packSize: "roll",
    discount: "31% OFF",
    price: 290
  },
  {
    id: "PRINT-TONER-HP88A",
    title: "HP LaserJet 88A (CC388A) High-Yield Black Toner Cartridge",
    category: "printing",
    categoryLabel: "Printer Supplies / Toner",
    image: "https://images.unsplash.com/photo-1612815150336-997c58874404?auto=format&fit=crop&w=600&q=80",
    vendor: "HP Compatible Pro",
    rating: 4.9,
    moq: 1,
    packSize: "pcs",
    discount: "41% OFF",
    price: 850
  },
  {
    id: "PRINT-INK-GI790-4PK",
    title: "Canon GI-790 High Capacity Ink Bottle Combo (CMYK 4-Pack)",
    category: "printing",
    categoryLabel: "Printer Supplies / Ink",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=600&q=80",
    vendor: "Canon",
    rating: 4.9,
    moq: 1,
    packSize: "set",
    discount: "22% OFF",
    price: 1950
  },

  // PANTRY & BEVERAGES
  {
    id: "PAN-COF-NES500G",
    title: "Nescafe Classic Instant Coffee Commercial Dispenser Tin (500g)",
    category: "pantry",
    categoryLabel: "Pantry / Coffee",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80",
    vendor: "Nescafe",
    rating: 4.9,
    moq: 1,
    packSize: "tin",
    discount: "18% OFF",
    price: 1150
  },
  {
    id: "PAN-CUP-RIP-250ML",
    title: "Ripple Wall Insulated Kraft Paper Beverage Cups 250ml (Pack of 250)",
    category: "pantry",
    categoryLabel: "Pantry / Disposable Cups",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    vendor: "EcoSip B2B",
    rating: 4.8,
    moq: 2,
    packSize: "pack",
    discount: "27% OFF",
    price: 690
  },
  {
    id: "PAN-TEA-ASSAM-200PK",
    title: "Premium Assam CTC Tea Bulk Dispenser Box (200 Envelope Bags)",
    category: "pantry",
    categoryLabel: "Pantry / Tea",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=600&q=80",
    vendor: "Taj Garden B2B",
    rating: 4.8,
    moq: 2,
    packSize: "box",
    discount: "26% OFF",
    price: 520
  },

  // CLEANING & HYGIENE
  {
    id: "CLN-FLR-CITRUS-5L",
    title: "Commercial Heavy-Duty Disinfectant Floor Cleaner Citrus (5 Liters)",
    category: "cleaning",
    categoryLabel: "Cleaning / Floor Cleaning",
    image: "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?auto=format&fit=crop&w=600&q=80",
    vendor: "SparklePro Commercial",
    rating: 4.8,
    moq: 2,
    packSize: "canister",
    discount: "36% OFF",
    price: 480
  },
  {
    id: "CLN-GBAG-30X37-150",
    title: "Heavy Duty Bio-Degradable Garbage Bags Black (30x37 Inch, Pack of 150)",
    category: "cleaning",
    categoryLabel: "Cleaning / Garbage Bags",
    image: "https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80",
    vendor: "CleanEarth",
    rating: 4.7,
    moq: 2,
    packSize: "pack",
    discount: "28% OFF",
    price: 490
  },
  {
    id: "CLN-HWASH-FOAM-5L",
    title: "Antibacterial Foaming Hand Wash Bulk Refill (5 Liters)",
    category: "cleaning",
    categoryLabel: "Cleaning / Hand Wash",
    image: "https://images.unsplash.com/photo-1600857062241-98e5dba7f214?auto=format&fit=crop&w=600&q=80",
    vendor: "PureGlow B2B",
    rating: 4.8,
    moq: 1,
    packSize: "canister",
    discount: "31% OFF",
    price: 590
  },

  // PACKAGING MATERIALS
  {
    id: "PKG-TAPE-CLR-12PK",
    title: "BOPP Transparent Carton Sealing Tape 65m Length (Pack of 12 Rolls)",
    category: "packaging",
    categoryLabel: "Packaging / Tape",
    image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80",
    vendor: "WonderTape",
    rating: 4.9,
    moq: 2,
    packSize: "pack",
    discount: "31% OFF",
    price: 540
  },
  {
    id: "PKG-BOX-3PLY-50PK",
    title: "3-Ply Corrugated Shipping Cartons 12x10x8 Inch (Bundle of 50)",
    category: "packaging",
    categoryLabel: "Packaging / Cartons",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=600&q=80",
    vendor: "PackShield",
    rating: 4.8,
    moq: 1,
    packSize: "bundle",
    discount: "24% OFF",
    price: 1250
  },
  {
    id: "PKG-BUB-100MX1M",
    title: "Industrial Air Bubble Cushioning Wrap Roll (100m x 1m Width)",
    category: "packaging",
    categoryLabel: "Packaging / Bubble Wrap",
    image: "https://images.unsplash.com/photo-1595246140625-573b715d11dc?auto=format&fit=crop&w=600&q=80",
    vendor: "PackShield",
    rating: 4.8,
    moq: 1,
    packSize: "roll",
    discount: "26% OFF",
    price: 890
  },

  // COMPUTER & IT CONSUMABLES
  {
    id: "IT-HDMI-4K-3M-5PK",
    title: "Braided 4K/60Hz High-Speed HDMI 2.0 Cable 3-Meter (Pack of 5)",
    category: "it",
    categoryLabel: "IT / Cables",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "VoltSync IT",
    rating: 4.9,
    moq: 1,
    packSize: "pack",
    discount: "33% OFF",
    price: 1100
  },
  {
    id: "IT-MSE-WRLS-5PK",
    title: "Wireless Optical Ergonomic Mouse with USB Nano Receiver (Pack of 5)",
    category: "it",
    categoryLabel: "IT / Mouse",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    vendor: "LogiTech Compatible",
    rating: 4.8,
    moq: 1,
    packSize: "pack",
    discount: "34% OFF",
    price: 1650
  },
  {
    id: "IT-BAT-AA-40PK",
    title: "Commercial AA Alkaline Batteries Bulk Box (Pack of 40)",
    category: "it",
    categoryLabel: "IT / Batteries",
    image: "https://images.unsplash.com/photo-1619725002198-6a689b72f41d?auto=format&fit=crop&w=600&q=80",
    vendor: "Duracell Pro",
    rating: 4.9,
    moq: 1,
    packSize: "box",
    discount: "26% OFF",
    price: 890
  },

  // OFFICE FURNITURE
  {
    id: "FURN-CHR-EXEC-MSH",
    title: "Ergonomic High-Back Mesh Executive Office Chair",
    category: "furniture",
    categoryLabel: "Furniture / Chairs",
    image: "https://images.unsplash.com/photo-1580481072645-022f9a6d83d0?auto=format&fit=crop&w=600&q=80",
    vendor: "ErgoComfort",
    rating: 4.9,
    moq: 1,
    packSize: "pcs",
    discount: "28% OFF",
    price: 6499,
    isVerified: true
  },
  {
    id: "FURN-WB-MAG-4X3FT",
    title: "Magnetic Dry Erase Whiteboard with Aluminum Frame (4x3 Feet)",
    category: "furniture",
    categoryLabel: "Furniture / Whiteboards",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "ClearBoard",
    rating: 4.8,
    moq: 1,
    packSize: "pcs",
    discount: "29% OFF",
    price: 1850
  },

  // ELECTRICAL SUPPLIES
  {
    id: "ELEC-SPK-6SKT-3M",
    title: "Heavy-Duty 6-Socket Surge Protector Spike Guard with 3m Cord",
    category: "electrical",
    categoryLabel: "Electrical / Surge Protectors",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "VoltSync",
    rating: 4.8,
    moq: 2,
    packSize: "pcs",
    discount: "32% OFF",
    price: 580
  },
  {
    id: "ELEC-DRIL-20V-KIT",
    title: "Heavy Duty Cordless Impact Drill 20V Kit with 2 Batteries",
    category: "electrical",
    categoryLabel: "Electrical / Tools",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    vendor: "VoltSync Tools",
    rating: 4.9,
    moq: 1,
    packSize: "set",
    discount: "26% OFF",
    price: 4600
  },
  {
    id: "ELEC-LED-12W-10PK",
    title: "12W Energy Saving Cool Daylight LED Bulbs (Pack of 10)",
    category: "electrical",
    categoryLabel: "Electrical / LED Bulbs",
    image: "https://images.unsplash.com/photo-1550985616-10810253b84d?auto=format&fit=crop&w=600&q=80",
    vendor: "Philips Commercial",
    rating: 4.9,
    moq: 1,
    packSize: "pack",
    discount: "36% OFF",
    price: 890
  },

  // SAFETY SUPPLIES
  {
    id: "SAF-GLS-CLR-12PK",
    title: "Anti-Scratch Clear Polycarbonate Safety Glasses (Pack of 12)",
    category: "safety",
    categoryLabel: "Safety / Protective Glasses",
    image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80",
    vendor: "SafeShield",
    rating: 4.8,
    moq: 1,
    packSize: "pack",
    discount: "30% OFF",
    price: 840,
    stockCount: 0 // Out of Stock
  },
  {
    id: "SAF-EXT-ABC-4KG",
    title: "ABC Dry Powder Commercial Fire Extinguisher 4KG (ISI Certified)",
    category: "safety",
    categoryLabel: "Safety / Fire Extinguishers",
    image: "https://images.unsplash.com/photo-1599586120429-48281b6f0eca?auto=format&fit=crop&w=600&q=80",
    vendor: "FlameGuard",
    rating: 4.9,
    moq: 1,
    packSize: "pcs",
    discount: "31% OFF",
    price: 1450
  },
  {
    id: "SAF-FAID-50PERS",
    title: "Commercial Workplace First Aid Box Kit (50-Person Compliant)",
    category: "safety",
    categoryLabel: "Safety / First Aid",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?auto=format&fit=crop&w=600&q=80",
    vendor: "SafeShield",
    rating: 4.9,
    moq: 1,
    packSize: "kit",
    discount: "29% OFF",
    price: 1250
  },
  {
    id: "SAF-HLM-HDPE-5PK",
    title: "Industrial High-Density Safety Helmet with Ratchet (Pack of 5)",
    category: "safety",
    categoryLabel: "Safety / Helmets",
    image: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    vendor: "SafeShield",
    rating: 4.8,
    moq: 1,
    packSize: "pack",
    discount: "31% OFF",
    price: 1350
  },

  // OTHER BUSINESS ESSENTIALS
  {
    id: "BIZ-SHRD-A4-15L",
    title: "Cross-Cut Commercial Office Paper Shredder P-4 (15L Waste Bin)",
    category: "business",
    categoryLabel: "Business / Shredders",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "Calculox",
    rating: 4.8,
    moq: 1,
    packSize: "pcs",
    discount: "25% OFF",
    price: 3600
  },
  {
    id: "BIZ-STMP-DATE-SEAL",
    title: "Self-Inking Heavy Duty Date & Custom Received Rubber Stamp",
    category: "business",
    categoryLabel: "Business / Rubber Stamps",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=600&q=80",
    vendor: "Trodat Pro",
    rating: 4.9,
    moq: 1,
    packSize: "pcs",
    discount: "29% OFF",
    price: 490
  },
  {
    id: "BIZ-LAM-A4-PRO",
    title: "A4 Hot & Cold Document Thermal Laminating Machine with Jam Release",
    category: "business",
    categoryLabel: "Business / Laminating",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    vendor: "Calculox",
    rating: 4.8,
    moq: 1,
    packSize: "pcs",
    discount: "29% OFF",
    price: 1950
  }
];

export const KnowffersCatalog = ({ onAddToCart, onRequestRFQ }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const categories = [
    { id: 'all', name: '🏢 All Categories', count: 28 },
    { id: 'stationery', name: '📝 Stationery', count: 5 },
    { id: 'printing', name: '🖨️ Printer & Supplies', count: 3 },
    { id: 'pantry', name: '☕ Pantry & Beverages', count: 3 },
    { id: 'cleaning', name: '🧹 Cleaning & Hygiene', count: 3 },
    { id: 'packaging', name: '📦 Packaging Materials', count: 3 },
    { id: 'it', name: '💻 Computer & IT', count: 3 },
    { id: 'furniture', name: '🪑 Office Furniture', count: 2 },
    { id: 'electrical', name: '⚡ Electrical Supplies', count: 3 },
    { id: 'safety', name: '🦺 Safety & Facility', count: 4 },
    { id: 'business', name: '🏢 Other Business', count: 3 }
  ];

  const filteredProducts = KNOWFFERS_PRODUCTS.filter((prod) => {
    const matchesCategory = activeCategory === 'all' || prod.category === activeCategory;
    const matchesStock = !inStockOnly || prod.stockCount !== 0;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch = !query || 
      prod.title.toLowerCase().includes(query) ||
      prod.vendor.toLowerCase().includes(query) ||
      prod.id.toLowerCase().includes(query);

    return matchesCategory && matchesStock && matchesSearch;
  });

  return (
    <div className="kf-catalog-container" style={{ padding: '16px 0' }}>
      {/* Search & Filter Header */}
      <div className="filter-bar">
        <div className="search-box">
          <input
            type="text"
            className="search-input"
            placeholder="Search 28 products by title, SKU, brand..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="filter-actions">
          <label className="filter-checkbox-label">
            <input
              type="checkbox"
              checked={inStockOnly}
              onChange={(e) => setInStockOnly(e.target.checked)}
            />
            In Stock Only
          </label>
        </div>
      </div>

      {/* Main Layout */}
      <div className="marketplace-layout">
        {/* Sidebar */}
        <aside className="cat-sidebar">
          <div className="sidebar-title">Workplace Categories</div>
          <ul className="cat-list">
            {categories.map((cat) => (
              <li key={cat.id}>
                <button
                  className={`cat-item-btn ${activeCategory === cat.id ? 'active' : ''}`}
                  onClick={() => setActiveCategory(cat.id)}
                >
                  <span>{cat.name}</span>
                  <span className="cat-count-badge">{cat.count}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {/* Product Grid */}
        <section>
          <div className="section-header">
            <h2 className="section-title">
              {categories.find(c => c.id === activeCategory)?.name || 'All Products'}
            </h2>
            <span className="section-subtitle">Showing {filteredProducts.length} Workplace Items</span>
          </div>

          <div className="cards-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                currency="₹"
                onAddToCart={onAddToCart}
                onRequestRFQ={onRequestRFQ}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default KnowffersCatalog;
