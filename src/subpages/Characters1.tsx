import React from "react";
import { useQuery, gql } from "@apollo/client";
import ReactDOM from "react-dom/client";
import Card from "../components/library/visual/Card";
import "./Characters1.css";

type Character ={
    name: string;
    image: string;
}

type CharactersData= {
    characters: {
        info: {
            count: number;
        };
    results: Character[];
    }
}

type CharacterProps = {
    initialPage?: number;
    pageSize?: number;
}


const RICK_AND_MORTY_QUERY = gql`
  query allCharacters {
    characters {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

const { loading, data, error } = useQuery<CharactersData>(RICK_AND_MORTY_QUERY);

const characters = data?.characters?.results || [];
export default function Characters1() {
    return (
        <>
          <div className="cardsContainer">
          {characters.map((character) => (
            <Card
              title={character.name}
              image={character.image}
            />
          ))}
          </div>
            <div className="showMoreButtonContainer">
              <button>Load more</button>
            </div>
        </>
      );
    };
