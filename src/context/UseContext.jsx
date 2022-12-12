import { createContext, useState } from "react";

export const AgyanimContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [myIndex, setMyIndex] = useState(0);
  const [count, setCount] = useState(0);
  const price = 125;
  const [totalCost, setTotalCost] = useState(0);

  return (
    <AgyanimContext.Provider
      value={{
        myIndex,
        setMyIndex,
        price,
        count,
        setCount,
        totalCost,
        setTotalCost,
      }}
    >
      {children}
    </AgyanimContext.Provider>
  );
};
export default ContextProvider;
