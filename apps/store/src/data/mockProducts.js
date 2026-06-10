const img = {
  headphones:
    "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=85",
  jacket:
    "https://images.unsplash.com/photo-1520975954732-35dd22299614?auto=format&fit=crop&w=900&q=85",
  beauty:
    "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=900&q=85",
  lamp:
    "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=900&q=85",
  watch:
    "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=85",
  bag:
    "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=85",
  grocery:
    "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=85",
  shoes:
    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
};

export const mockProducts = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    slug: "premium-wireless-headphones",
    category: "electronics",
    brand: "Mahi Tech",
    storeName: "Tech World",
    price: 8500,
    oldPrice: 10500,
    rating: 4.8,
    sold: 124,
    badge: "Best Seller",
    image: img.headphones,
    hoverImage: img.headphones,
  },
  {
    id: 2,
    name: "Classic Men Leather Jacket",
    slug: "classic-men-leather-jacket",
    category: "fashion",
    brand: "Urban Wear",
    storeName: "Style Hub",
    price: 12500,
    oldPrice: 15000,
    rating: 4.6,
    sold: 89,
    badge: "New",
    image: img.jacket,
    hoverImage: img.jacket,
  },
  {
    id: 3,
    name: "Luxury Beauty Care Kit",
    slug: "luxury-beauty-care-kit",
    category: "beauty",
    brand: "Glow Care",
    storeName: "Beauty Mart",
    price: 4200,
    oldPrice: 5200,
    rating: 4.7,
    sold: 210,
    badge: "Hot Deal",
    image: img.beauty,
    hoverImage: img.beauty,
  },
  {
    id: 4,
    name: "Modern Home Decor Lamp",
    slug: "modern-home-decor-lamp",
    category: "home-living",
    brand: "Home Luxe",
    storeName: "Decor House",
    price: 6500,
    oldPrice: 7800,
    rating: 4.5,
    sold: 67,
    badge: "Featured",
    image: img.lamp,
    hoverImage: img.lamp,
  },
  {
    id: 5,
    name: "Smart Fitness Watch",
    slug: "smart-fitness-watch",
    category: "electronics",
    brand: "FitPro",
    storeName: "Gadget Zone",
    price: 7200,
    oldPrice: 9200,
    rating: 4.9,
    sold: 320,
    badge: "Flash Sale",
    image: img.watch,
    hoverImage: img.watch,
  },
  {
    id: 6,
    name: "Women Fashion Handbag",
    slug: "women-fashion-handbag",
    category: "fashion",
    brand: "Luna Bags",
    storeName: "Fashion Market",
    price: 5600,
    oldPrice: 6900,
    rating: 4.4,
    sold: 75,
    badge: "New",
    image: img.bag,
    hoverImage: img.bag,
  },
  {
    id: 7,
    name: "Daily Grocery Essentials Pack",
    slug: "daily-grocery-essentials-pack",
    category: "grocery",
    brand: "Fresh Basket",
    storeName: "Quick Grocery",
    price: 3200,
    oldPrice: 3800,
    rating: 4.3,
    sold: 154,
    badge: "Value Pack",
    image: img.grocery,
    hoverImage: img.grocery,
  },
  {
    id: 8,
    name: "Professional Sports Shoes",
    slug: "professional-sports-shoes",
    category: "sports",
    brand: "RunMax",
    storeName: "Sports Arena",
    price: 9800,
    oldPrice: 12000,
    rating: 4.8,
    sold: 198,
    badge: "Best Seller",
    image: img.shoes,
    hoverImage: img.shoes,
  },
];

export const products = mockProducts;

export const topSellingProducts = [...mockProducts]
  .sort((a, b) => Number(b.sold || 0) - Number(a.sold || 0))
  .slice(0, 6);

export const newArrivalProducts = mockProducts.filter(
  (item) => item.badge === "New" || item.badge === "Featured"
);

export const dealProducts = mockProducts.filter(
  (item) => item.oldPrice && Number(item.oldPrice) > Number(item.price)
);

export default mockProducts;