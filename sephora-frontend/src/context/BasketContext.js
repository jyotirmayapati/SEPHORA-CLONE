import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  useEffect,
} from "react";

// Create the Basket context
const BasketContext = createContext();

// Custom hook to use the Basket context
export const useBasket = () => useContext(BasketContext);

// BasketProvider component
export const BasketProvider = ({ children }) => {
  const [basketItems, setBasketItems] = useState([]);

  // Load basket items from localStorage on initial render
  useEffect(() => {
    const savedBasketItems = JSON.parse(localStorage.getItem("basketItems"));
    if (Array.isArray(savedBasketItems)) {
      setBasketItems(savedBasketItems);
    }
  }, []);

  // Save basket items to localStorage whenever basketItems change
  useEffect(() => {
    if (basketItems.length > 0) {
      localStorage.setItem("basketItems", JSON.stringify(basketItems));
    } else {
      localStorage.removeItem("basketItems"); // Clear storage if basket is empty
    }
  }, [basketItems]);

  // Add an item to the basket
  const addToBasket = (item) => {
    const existingItem = basketItems.find((i) => i.id === item.id);
    if (existingItem) {
      setBasketItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      );
    } else {
      setBasketItems((prev) => [...prev, { ...item, quantity: 1 }]);
    }
  };

  // Remove an item from the basket
  const removeFromBasket = (id) => {
    setBasketItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Update the quantity of an item
  const updateQuantity = (id, quantity) => {
    if (quantity < 0 || isNaN(quantity)) return; // Invalid quantity, ignore
    if (quantity === 0) {
      removeFromBasket(id);
    } else {
      setBasketItems((prev) =>
        prev.map((item) => (item.id === id ? { ...item, quantity } : item))
      );
    }
  };

  // Clear the entire basket
  const clearBasket = () => {
    setBasketItems([]);
    localStorage.removeItem("basketItems");
  };

  // Calculate the total price of items in the basket
  const totalBasketValue = useMemo(() => {
    return basketItems
      .reduce((total, item) => total + item.price * item.quantity, 0)
  }, [basketItems]);

  // Calculate the total number of items in the basket
  const totalItems = useMemo(() => {
    return basketItems.reduce((total, item) => total + item.quantity, 0);
  }, [basketItems]);

  // Provide values to the context
  return (
    <BasketContext.Provider
      value={{
        basketItems,
        addToBasket,
        removeFromBasket,
        updateQuantity,
        clearBasket,
        totalBasketValue,
        totalItems,
      }}
    >
      {children}
    </BasketContext.Provider>
  );
};
