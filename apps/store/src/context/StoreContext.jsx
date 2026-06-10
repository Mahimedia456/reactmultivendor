import { createContext, useContext, useMemo, useState } from "react";

const StoreContext = createContext(null);

function getStored(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : fallback;
  } catch {
    return fallback;
  }
}

function saveStored(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function StoreProvider({ children }) {
  const [cart, setCart] = useState(() => getStored("mahi_cart", []));
  const [wishlist, setWishlist] = useState(() => getStored("mahi_wishlist", []));

  function updateCart(next) {
    setCart(next);
    saveStored("mahi_cart", next);
  }

  function updateWishlist(next) {
    setWishlist(next);
    saveStored("mahi_wishlist", next);
  }

  function addToCart(product, quantity = 1) {
    const exists = cart.find((item) => item.id === product.id);

    const next = exists
      ? cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      : [...cart, { ...product, quantity }];

    updateCart(next);
  }

  function removeFromCart(id) {
    updateCart(cart.filter((item) => item.id !== id));
  }

  function updateQuantity(id, quantity) {
    const safeQuantity = Math.max(1, Number(quantity || 1));

    updateCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: safeQuantity } : item
      )
    );
  }

  function clearCart() {
    updateCart([]);
  }

  function toggleWishlist(product) {
    const exists = wishlist.some((item) => item.id === product.id);

    const next = exists
      ? wishlist.filter((item) => item.id !== product.id)
      : [...wishlist, product];

    updateWishlist(next);
  }

  function removeFromWishlist(id) {
    updateWishlist(wishlist.filter((item) => item.id !== id));
  }

  const totals = useMemo(() => {
    const subtotal = cart.reduce(
      (sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 1),
      0
    );

    const delivery = subtotal > 0 ? 250 : 0;

    return {
      subtotal,
      delivery,
      total: subtotal + delivery,
    };
  }, [cart]);

  return (
    <StoreContext.Provider
      value={{
        cart,
        wishlist,
        totals,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);

  if (!context) {
    throw new Error("useStore must be used inside StoreProvider");
  }

  return context;
}