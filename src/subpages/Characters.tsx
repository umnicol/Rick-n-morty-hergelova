import React from "react";
import Card from "../components/library/visual/Card";
import title from "../../src/assets/title.png";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./Characters.css";
import Characters1 from "./Characters1";


const Characters = () => {
    const client = new ApolloClient({
      uri: "https://rickandmortyapi.com/graphql",
      cache: new InMemoryCache(),
    });

return (
    <section className="Characters-section">
            <img
        src={title}
        className="title"
        style={{
          width: "25%",
          height: "auto",
          display: "block",
          margin: "auto",
          marginTop: "180px",
          marginBottom: "20px",
        }}
        alt="Rick and Morty Logo"
      />
      <ApolloProvider client={client}>
        <Characters1 />
        
      </ApolloProvider>
    </section>
  );
};

export default Characters;
