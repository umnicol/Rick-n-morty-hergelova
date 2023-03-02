import { useQuery, gql } from "@apollo/client";
import React, { useEffect } from "react";

const RICK_AND_MORTY_QUERY = gql `query allCharacters{
    characters(page: 2, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name
    }`
;

export default function ApolloExample() {
    const { loading, data, error } = useQuery(RICK_AND_MORTY_QUERY);
     
  
    useEffect(() => {
      console.log("Hi from Apollo Example", data);
    }, [data]);

return <div>ApploExample</div>  
}