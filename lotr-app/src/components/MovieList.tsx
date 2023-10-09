import React, { useState } from "react";
import {
  Container,
  Title,
  List,
  ListItem,
  Name,
  Button,
  SortButtonContainer,
} from "../styles/StyledComponents";
import MovieDetails from "./details/MovieDetails";
import { MovieListProps } from "./interfaces/types";

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  const [isAscending, setIsAscending] = useState(true);
  const [isMovieExpanded, setIsMovieExpanded] = useState<boolean[]>(
    movies.map(() => false)
  );

  const toggleSortOrder = () => {
    setIsAscending((prev) => !prev);
  };

  const toggleMovieDetails = (index: number) => {
    setIsMovieExpanded((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (isAscending) {
      return a.name.localeCompare(b.name);
    } else {
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>
      <Container>
        <Title>Movies</Title>
        <SortButtonContainer onClick={toggleSortOrder}>
          Sort {isAscending ? "Descending" : "Ascending"}
        </SortButtonContainer>
        <List>
          {sortedMovies.map((movie, index) => (
            <ListItem key={movie._id}>
              <Name>{movie.name}</Name>
              <Button onClick={() => toggleMovieDetails(index)}>
                {isMovieExpanded[index] ? "Less" : "More"} Details
              </Button>
              {isMovieExpanded[index] && <MovieDetails movie={movie} />}
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
};

export default MovieList;
