import React, { createContext, useState } from 'react';

// Create a new context
const SellerContext = createContext();

// Create a provider component
export const SellerContextProvider = ({ children }) => {
  const [sellerLoggedIn, setSellerLoggedIn] = useState(false);
  const [sellerId, setSellerId] = useState('');

  return (
    <SellerContext.Provider value={{ sellerId, setSellerId, sellerLoggedIn, setSellerLoggedIn }}>
      {children}
    </SellerContext.Provider>
  );
};

export default SellerContext;