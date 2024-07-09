const generateProducts = (count) => {
    const productTypes = [
      'Moisturizer', 'Cleanser', 'Serum', 'Toner', 'Sunscreen', 
      'Face Mask', 'Eye Cream', 'Exfoliator', 'Lip Balm', 'Night Cream'
    ];
  
    const brands = [
      'Glow', 'Radiant', 'Pure', 'Essence', 'Bloom', 
      'Harmony', 'Zen', 'Vital', 'Lush', 'Serene'
    ];
  
    const skinTypes = ['All', 'Dry', 'Oily', 'Combination', 'Sensitive'];
  
    const descriptions = [
      'Hydrating formula for smooth skin',
      'Gentle cleansing for a fresh face',
      'Powerful anti-aging properties',
      'Balances and refreshes your complexion',
      'Protects against harmful UV rays',
      'Deep nourishment for glowing skin',
      'Reduces fine lines and wrinkles',
      'Smooths and brightens skin texture',
      'Moisturizes and protects delicate lips',
      'Rejuvenates skin while you sleep'
    ];
  
    const images = [
      'https://img.freepik.com/free-photo/young-woman-raises-palms-face-keeps-eyes-closed-shows-white-teeth-uses-cleansing-foam-skin-care-gets-real-pleasure_273609-33241.jpg',
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881',
      'https://images.unsplash.com/photo-1612817288484-6f916006741a',
      'https://images.unsplash.com/photo-1567721913486-6585f069b332',
      'https://images.unsplash.com/photo-1571781926291-c477ebfd024b'
    ];
  
    return Array.from({ length: count }, (_, index) => {
      const productType = productTypes[Math.floor(Math.random() * productTypes.length)];
      const brand = brands[Math.floor(Math.random() * brands.length)];
      const skinType = skinTypes[Math.floor(Math.random() * skinTypes.length)];
      const description = descriptions[Math.floor(Math.random() * descriptions.length)];
      const image = images[Math.floor(Math.random() * images.length)];
  
      return {
        id: index + 1,
        title: `${brand} ${productType}`,
        description: `${description} Perfect for ${skinType.toLowerCase()} skin types.`,
        price: (Math.random() * (50 - 10) + 10).toFixed(2),
        rating: (Math.random() * (5 - 3) + 3).toFixed(1),
        image: image,
        category: productType,
        brand: brand,
        skinType: skinType
      };
    });
  };
  
  export const products = generateProducts(150);