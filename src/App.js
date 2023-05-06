import React from "react";
import CardsProvider from "./Components/UseFetch";
import RouteHandler from "./RouteHandler";

const App = () => {
  return (
    <div>
      <CardsProvider>
        <RouteHandler />
      </CardsProvider>
    </div>
  );
};

export default App;

// header
// all pages
