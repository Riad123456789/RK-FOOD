import React, { createContext, useState, useEffect } from 'react';

// Create the context
export const WishlistContext = createContext();

// Create the provider component
const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  // Load wishlist from localStorage on mount
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
    setWishlist(storedWishlist);
  }, []);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Function to add item to the wishlist
  const addToWishlist = (product) => {
    const isAlreadyInWishlist = wishlist.some((item) => item.id === product.id);
    
    if (!isAlreadyInWishlist) {
      setWishlist((prevWishlist) => [...prevWishlist, product]);
      alert(`${product.name} has been added to your wishlist!`);
    } else {
      alert(`${product.name} is already in your wishlist!`);
    }
  };

  // Function to remove item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlist(wishlist.filter((wishItem) => wishItem.id !== itemId));
  };

  // Provide the context to children components
  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;
