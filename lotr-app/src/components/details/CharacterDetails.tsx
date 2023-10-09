import React, { useState } from "react";
import { Details, Button, ButtonContainer } from "styles/StyledComponents";
import { CharacterDetailsProps } from "../interfaces/types";

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character }) => {
  const characterKeys = Object.keys(character).filter(
    (key) => key !== "_id" && character[key] !== ""
  );
  const [currentKeyIndex, setCurrentKeyIndex] = useState(0);

  const nextKey = () => {
    if (characterKeys.length === 0) {
      return;
    }
    setCurrentKeyIndex((prevIndex) => (prevIndex + 1) % characterKeys.length);
  };

  const currentKey = characterKeys[currentKeyIndex];
  const currentValue = character[currentKey];

  const formatLabel = (label: string) => {
    switch (label) {
      case "wikiUrl":
        return "WikiUrl";
      default:
        return label.charAt(0).toUpperCase() + label.slice(1);
    }
  };

  return (
    <Details>
      <div>
        {currentKey === "wikiUrl" ? (
          <a href={currentValue} target="_blank" rel="noopener noreferrer">
            Wiki Url
          </a>
        ) : (
          <>
            {formatLabel(currentKey)}: {currentValue}
          </>
        )}
      </div>
      <ButtonContainer>
        <Button onClick={nextKey}>Next</Button>
      </ButtonContainer>
    </Details>
  );
};

export default CharacterDetails;
