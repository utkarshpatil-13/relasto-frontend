import { createContext, useState } from "react";

const BuyerContext = createContext();

export const BuyerContextProvider = ({children}) => {
    const [buyerLoggedIn, setBuyerLoggedIn] = useState(false);
    const [buyerId, setBuyerId] = useState('');

    return (
        <BuyerContext.Provider value={{buyerId, setBuyerId, buyerLoggedIn, setBuyerLoggedIn}}>
            {children}
        </BuyerContext.Provider>
    )
}


export default BuyerContext;