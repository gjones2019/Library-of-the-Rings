import React, { useState } from "react";
import {
  Container,
  Title,
  List,
  ListItem,
  Name,
  SortButtonContainer,
  Button,
  ButtonContainer,
} from "../styles/StyledComponents";
import QuoteDetails from "./details/QuoteDetails";
import { QuoteListProps } from "./interfaces/types";

const QuoteList: React.FC<QuoteListProps> = ({ quotes }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [isQuoteExpanded, setIsQuoteExpanded] = useState<boolean[]>(
    quotes.map(() => false)
  );

  const sortedQuotes = [...quotes].sort((a, b) => {
    if (isAscending) {
      return a.dialog.localeCompare(b.dialog);
    } else {
      return b.dialog.localeCompare(a.dialog);
    }
  });

  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  const toggleQuoteDetails = (index: number) => {
    setIsQuoteExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  return (
    <Container>
      <Title>Quotes</Title>
      <SortButtonContainer onClick={toggleSortOrder}>
        Sort {isAscending ? "Descending" : "Ascending"}
      </SortButtonContainer>
      <List>
        {sortedQuotes.map((quote, index) => (
          <ListItem key={quote._id}>
            <Name>{quote.dialog}</Name>
            <ButtonContainer>
              <Button onClick={() => toggleQuoteDetails(index)}>
                {isQuoteExpanded[index] ? "Less" : "More"} Details
              </Button>
            </ButtonContainer>
            {isQuoteExpanded[index] && <QuoteDetails quote={quote} />}
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default QuoteList;
