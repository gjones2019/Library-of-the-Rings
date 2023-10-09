import React, { useState, useEffect, useMemo } from "react";
import LOTRApi from "../../api/api";
import {
  Details,
  ButtonContainer,
  Button,
} from "../../styles/StyledComponents";
import { QuoteDetailsProps, Quote } from "../interfaces/types";

const QuoteDetails: React.FC<QuoteDetailsProps> = ({ quote }) => {
  const labels: Record<string, string> = {
    character: "Character",
    movie: "Movie",
  };

  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const [movieName, setMovieName] = useState<string | undefined>(undefined);
  const [characterName, setCharacterName] = useState<string | undefined>(
    undefined
  );

  const validKeys = useMemo(() => ["character", "movie"], []);

  useEffect(() => {
    const fetchCharacterName = async () => {
      const currentKey = validKeys[currentKeyIndex] as keyof Quote;

      if (currentKey === "character") {
        try {
          const response = await LOTRApi.get(`/character/${quote.character}`);
          if (response.data.docs.length > 0) {
            setCharacterName(response.data.docs[0].name);
          }
        } catch (error) {
          console.error("Error fetching character:", error);
        }
      }
    };

    const fetchMovieName = async () => {
      const currentKey = validKeys[currentKeyIndex] as keyof Quote;

      if (currentKey === "movie") {
        try {
          const response = await LOTRApi.get(`/movie/${quote.movie}`);
          if (response.data.docs.length > 0) {
            setMovieName(response.data.docs[0].name);
          }
        } catch (error) {
          console.error("Error fetching movie:", error);
        }
      }
    };

    fetchCharacterName();
    fetchMovieName();
  }, [quote, currentKeyIndex, validKeys]);

  const nextKey = () => {
    setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % validKeys.length);
  };

  const currentKey = validKeys[currentKeyIndex] as keyof Quote;
  const label = labels[currentKey];
  const value =
    currentKey === "movie"
      ? movieName
      : currentKey === "character"
      ? characterName
      : quote[currentKey];

  return (
    <Details>
      {value !== undefined && (
        <div>
          {label}: {value}
        </div>
      )}
      <ButtonContainer>
        <Button onClick={nextKey}>Next</Button>
      </ButtonContainer>
    </Details>
  );
};

export default QuoteDetails;
