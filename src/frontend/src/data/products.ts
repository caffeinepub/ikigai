export interface Product {
  id: string;
  name: string;
  category: 'yoga-mats' | 'resistance-bands' | 'mobility-tools' | 'training-tops' | 'training-bottoms';
  categoryLabel: string;
  description: string;
  price: number;
  image: string;
  highlights: string[];
  material?: string;
}

export const products: Product[] = [
  // Yoga Mats
  {
    id: 'yoga-mat-pro',
    name: 'Flow Mat Pro',
    category: 'yoga-mats',
    categoryLabel: 'Yoga Mats',
    description: 'Premium natural rubber mat with optimal grip and cushioning for disciplined practice.',
    price: 1299,
    image: '/assets/generated/product-yoga-mat-pro.dim_1200x1200.png',
    highlights: [
      'Natural rubber base with microfiber top',
      '5mm thickness for joint support',
      'Non-slip texture in all conditions',
      'Biodegradable materials'
    ],
    material: 'Natural rubber, recycled microfiber'
  },
  {
    id: 'yoga-mat-travel',
    name: 'Travel Flow Mat',
    category: 'yoga-mats',
    categoryLabel: 'Yoga Mats',
    description: 'Lightweight foldable mat designed for movement anywhere.',
    price: 899,
    image: '/assets/generated/product-yoga-mat-travel.dim_1200x1200.png',
    highlights: [
      'Folds to compact size',
      '2mm ultra-portable design',
      'Quick-dry surface',
      'Includes carry strap'
    ],
    material: 'TPE foam, polyester'
  },
  {
    id: 'yoga-mat-studio',
    name: 'Studio Mat',
    category: 'yoga-mats',
    categoryLabel: 'Yoga Mats',
    description: 'Extra-wide mat for expansive movement and balance work.',
    price: 1449,
    image: '/assets/generated/product-yoga-mat-studio.dim_1200x1200.png',
    highlights: [
      '72" x 26" generous dimensions',
      '6mm cushioning',
      'Alignment markers',
      'Premium cork surface'
    ],
    material: 'Cork, natural rubber'
  },
  
  // Resistance Bands
  {
    id: 'resistance-set-complete',
    name: 'Complete Resistance Set',
    category: 'resistance-bands',
    categoryLabel: 'Resistance Bands',
    description: 'Five-band progressive resistance system for full-body strength training.',
    price: 1199,
    image: '/assets/generated/product-resistance-set-complete.dim_1200x1200.png',
    highlights: [
      'Five resistance levels (5-50 lbs)',
      'Durable latex-free bands',
      'Includes door anchor and handles',
      'Portable carry bag'
    ],
    material: 'TPE resistance bands, nylon handles'
  },
  {
    id: 'resistance-loops',
    name: 'Mobility Loop Set',
    category: 'resistance-bands',
    categoryLabel: 'Resistance Bands',
    description: 'Compact loop bands for activation and mobility work.',
    price: 699,
    image: '/assets/generated/product-resistance-loops.dim_1200x1200.png',
    highlights: [
      'Three resistance levels',
      'Non-slip fabric construction',
      'Perfect for warm-ups',
      'Machine washable'
    ],
    material: 'Cotton-polyester blend, latex core'
  },
  {
    id: 'resistance-heavy',
    name: 'Heavy Resistance Band',
    category: 'resistance-bands',
    categoryLabel: 'Resistance Bands',
    description: 'Single heavy-duty band for advanced strength training.',
    price: 849,
    image: '/assets/generated/product-resistance-heavy.dim_1200x1200.png',
    highlights: [
      '50-120 lbs resistance range',
      'Pull-up and dip assistance',
      'Reinforced construction',
      '41" continuous loop'
    ],
    material: 'Natural latex rubber'
  },
  {
    id: 'resistance-therapy',
    name: 'Therapy Band Roll',
    category: 'resistance-bands',
    categoryLabel: 'Resistance Bands',
    description: 'Flat resistance band for rehabilitation and stretching.',
    price: 599,
    image: '/assets/generated/product-resistance-therapy.dim_1200x1200.png',
    highlights: [
      '6-foot continuous band',
      'Light to medium resistance',
      'Ideal for physical therapy',
      'Latex-free option available'
    ],
    material: 'TPE or natural latex'
  },

  // Mobility Tools
  {
    id: 'foam-roller-pro',
    name: 'Deep Tissue Roller',
    category: 'mobility-tools',
    categoryLabel: 'Mobility Tools',
    description: 'High-density foam roller for myofascial release and recovery.',
    price: 999,
    image: '/assets/generated/product-foam-roller-pro.dim_1200x1200.png',
    highlights: [
      'Multi-density foam zones',
      '13" x 5.5" standard size',
      'Textured surface for trigger points',
      'Lightweight yet durable'
    ],
    material: 'EVA foam, ABS core'
  },
  {
    id: 'massage-ball-set',
    name: 'Precision Ball Set',
    category: 'mobility-tools',
    categoryLabel: 'Mobility Tools',
    description: 'Targeted massage balls for deep tissue work.',
    price: 749,
    image: '/assets/generated/product-massage-ball-set.dim_1200x1200.png',
    highlights: [
      'Three sizes for different areas',
      'Firm rubber construction',
      'Includes carrying case',
      'Ideal for feet, back, shoulders'
    ],
    material: 'Natural rubber'
  },
  {
    id: 'mobility-stick',
    name: 'Muscle Roller Stick',
    category: 'mobility-tools',
    categoryLabel: 'Mobility Tools',
    description: 'Handheld roller for controlled muscle release.',
    price: 879,
    image: '/assets/generated/product-mobility-stick.dim_1200x1200.png',
    highlights: [
      'Independent rolling spindles',
      'Ergonomic grip handles',
      '17" working length',
      'Travel-friendly design'
    ],
    material: 'Thermoplastic spindles, rubber grips'
  },
  {
    id: 'stretching-strap',
    name: 'Flexibility Strap',
    category: 'mobility-tools',
    categoryLabel: 'Mobility Tools',
    description: 'Multi-loop strap for assisted stretching and flexibility training.',
    price: 549,
    image: '/assets/generated/product-stretching-strap.dim_1200x1200.png',
    highlights: [
      '12 loops for progressive stretching',
      '6-foot length',
      'Non-elastic for stability',
      'Includes exercise guide'
    ],
    material: 'Cotton webbing'
  },

  // Training Tops
  {
    id: 'training-tee-essential',
    name: 'Essential Training Tee',
    category: 'training-tops',
    categoryLabel: 'Training Apparel',
    description: 'Breathable performance tee for focused training sessions.',
    price: 799,
    image: '/assets/generated/product-training-tee-essential.dim_1200x1200.png',
    highlights: [
      'Moisture-wicking fabric',
      'Seamless construction',
      'Anti-odor treatment',
      'Relaxed athletic fit'
    ],
    material: '88% polyester, 12% elastane'
  },
  {
    id: 'training-tank',
    name: 'Flow Tank',
    category: 'training-tops',
    categoryLabel: 'Training Apparel',
    description: 'Minimal tank for unrestricted movement.',
    price: 649,
    image: '/assets/generated/product-training-tank.dim_1200x1200.png',
    highlights: [
      'Lightweight mesh panels',
      'Dropped armholes',
      'Quick-dry technology',
      'Reflective details'
    ],
    material: '92% nylon, 8% spandex'
  },
  {
    id: 'training-longsleeve',
    name: 'Performance Long Sleeve',
    category: 'training-tops',
    categoryLabel: 'Training Apparel',
    description: 'Technical long sleeve for layering and cool-weather training.',
    price: 1099,
    image: '/assets/generated/product-training-longsleeve.dim_1200x1200.png',
    highlights: [
      'Four-way stretch fabric',
      'Thumbholes for hand coverage',
      'Flatlock seams',
      'UPF 50+ sun protection'
    ],
    material: '85% recycled polyester, 15% elastane'
  },
  {
    id: 'training-hoodie',
    name: 'Movement Hoodie',
    category: 'training-tops',
    categoryLabel: 'Training Apparel',
    description: 'Lightweight hoodie for warm-ups and recovery.',
    price: 1399,
    image: '/assets/generated/product-training-hoodie.dim_1200x1200.png',
    highlights: [
      'Soft brushed interior',
      'Kangaroo pocket',
      'Adjustable hood',
      'Tapered athletic fit'
    ],
    material: '80% cotton, 20% polyester'
  },

  // Training Bottoms - Fixed image references
  {
    id: 'training-shorts-7',
    name: '7" Training Shorts',
    category: 'training-bottoms',
    categoryLabel: 'Training Apparel',
    description: 'Versatile shorts for strength and mobility training.',
    price: 949,
    image: '/assets/generated/product-training-bottoms.dim_1200x1200.png',
    highlights: [
      '7" inseam for coverage',
      'Four-way stretch',
      'Secure zip pocket',
      'Elastic waistband with drawcord'
    ],
    material: '90% polyester, 10% spandex'
  },
  {
    id: 'training-tights',
    name: 'Compression Tights',
    category: 'training-bottoms',
    categoryLabel: 'Training Apparel',
    description: 'Full-length tights for support and recovery.',
    price: 1149,
    image: '/assets/generated/product-training-bottoms.dim_1200x1200.png',
    highlights: [
      'Graduated compression',
      'High-rise waistband',
      'Side phone pocket',
      'Moisture-wicking'
    ],
    material: '77% nylon, 23% elastane'
  },
  {
    id: 'training-joggers',
    name: 'Studio Joggers',
    category: 'training-bottoms',
    categoryLabel: 'Training Apparel',
    description: 'Tapered joggers for pre and post-training comfort.',
    price: 1249,
    image: '/assets/generated/product-training-bottoms.dim_1200x1200.png',
    highlights: [
      'Soft French terry fabric',
      'Tapered leg with cuffs',
      'Zip pockets',
      'Relaxed through hip and thigh'
    ],
    material: '80% cotton, 20% polyester'
  },
  {
    id: 'training-shorts-5',
    name: '5" Performance Shorts',
    category: 'training-bottoms',
    categoryLabel: 'Training Apparel',
    description: 'Lightweight shorts for high-intensity training.',
    price: 799,
    image: '/assets/generated/product-training-bottoms.dim_1200x1200.png',
    highlights: [
      '5" inseam for mobility',
      'Built-in liner',
      'Reflective trim',
      'Water-resistant fabric'
    ],
    material: '100% recycled polyester'
  },
];

export const categories = [
  { id: 'yoga-mats', label: 'Yoga Mats', type: 'equipment' },
  { id: 'resistance-bands', label: 'Resistance Bands', type: 'equipment' },
  { id: 'mobility-tools', label: 'Mobility Tools', type: 'equipment' },
  { id: 'training-tops', label: 'Training Tops', type: 'apparel' },
  { id: 'training-bottoms', label: 'Training Bottoms', type: 'apparel' },
] as const;
