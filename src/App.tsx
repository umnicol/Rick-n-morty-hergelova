import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Route, Routes } from "react-router-dom";
import Characters from "./subpages/Characters";
import { NavBar } from "./components/library/visual/NavBar";
import { Footer } from "./components/library/visual/Footer";

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
 return (
    <ApolloProvider client={client}>
      <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Characters/>}/>
        <Route path='/Characters' element={<Characters/>}/>
      </Routes>
      <Footer/>
      </>
    </ApolloProvider>
  );
}

export default App;
