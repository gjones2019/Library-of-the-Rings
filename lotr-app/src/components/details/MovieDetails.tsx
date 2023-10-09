import React, { useState, useEffect } from "react";
import { Details, Button, ButtonContainer } from "styles/StyledComponents";
import { MovieDetailsProps } from "../interfaces/types";

const MovieDetails: React.FC<MovieDetailsProps> = ({ movie }) => {
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);
  const movieKeys = [
    "runtimeInMinutes",
    "budgetInMillions",
    "boxOfficeRevenueInMillions",
    "academyAwardNominations",
    "academyAwardWins",
    "rottenTomatoesScore",
  ] as (keyof typeof movie)[];

  const nextKey = () => {
    const nextIndex = (currentKeyIndex + 1) % movieKeys.length;
    setCurrentKeyIndex(nextIndex);
  };

  useEffect(() => {
    setCurrentKeyIndex(0);
  }, [movie]);

  const currentKey = movieKeys[currentKeyIndex];
  const labelMapping: Record<string, string> = {
    runtimeInMinutes: "Length (min)",
    budgetInMillions: "Budget (millions)",
    boxOfficeRevenueInMillions: "Revenue (millions)",
    academyAwardNominations: "Award Nominations",
    academyAwardWins: "Award Wins",
    rottenTomatoesScore: "Rotten Tomatoes Score",
  };
  const currentLabel = labelMapping[currentKey];
  const currentValue = movie[currentKey];

  return (
    <Details>
      <div>
        {currentLabel}: {currentValue}
      </div>
      <ButtonContainer>
        <Button onClick={nextKey}>Next</Button>
      </ButtonContainer>
    </Details>
  );
};

export default MovieDetails;
