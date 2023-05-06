import { useEffect, useState, createContext } from "react";

const BASE_URL = "https://my.api.mockaroo.com/cards/123.json?key=778301b0";

export const CardsContext = createContext();

const CardsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((res) => {
        setData([res]);
      });
  }, []);

  const updateData = (newData) => {
    setData([...data, newData]); // Добавляем новые данные к существующим данным
  };

  return (
    <CardsContext.Provider value={{ data, updateData }}>
      {children}
    </CardsContext.Provider>
  );
};

export default CardsProvider;
