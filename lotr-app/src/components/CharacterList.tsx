import React, { useState } from "react";
import {
  Container,
  Title,
  List,
  ListItem,
  Name,
  Button,
  ButtonContainer,
  SortButtonContainer,
} from "../styles/StyledComponents";
import CharacterDetails from "./details/CharacterDetails";
import { CharacterListProps } from "./interfaces/types";

const CharacterList: React.FC<CharacterListProps> = ({ characters }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [isCharacterExpanded, setIsCharacterExpanded] = useState<boolean[]>(
    characters.map(() => false)
  );

  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  const toggleCharacterDetails = (index: number) => {
    setIsCharacterExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const sortedCharacters = [...characters].sort((a, b) => {
    if (isAscending) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });
  return (
    <Container>
      <Title>Characters</Title>
      <SortButtonContainer onClick={toggleSortOrder}>
        Sort {isAscending ? "Descending" : "Ascending"}
      </SortButtonContainer>
      <List>
        {sortedCharacters.map((character, index) => (
          <ListItem key={character._id}>
            <Name>{character.name}</Name>
            <ButtonContainer>
              <Button onClick={() => toggleCharacterDetails(index)}>
                {isCharacterExpanded[index] ? "Less" : "More"} Details
              </Button>
            </ButtonContainer>
            {isCharacterExpanded[index] && (
              <CharacterDetails character={character} />
            )}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CharacterList;
