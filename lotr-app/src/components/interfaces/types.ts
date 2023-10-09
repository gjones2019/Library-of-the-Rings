export interface Movie {
  _id: string;
  name: string;
  academyAwardNominations: string;
}

interface Character {
  [key: string]: string;
  _id: string;
  name: string;
  birth: string;
  death: string;
  gender: string;
  hair: string;
  height: string;
  race: string;
  realm: string;
  spouse: string;
  wikiUrl: string;
}

export interface Quote {
  _id: string;
  dialog: string;
  character: string;
  movie: string;
}

export interface MovieListProps {
  movies: Movie[];
}

export interface CharacterListProps {
  characters: Character[];
}

export interface QuoteListProps {
  quotes: Quote[];
}

export interface MovieDetailsProps {
  movie: Movie;
}

export interface CharacterDetailsProps {
  character: Character;
}

export interface QuoteDetailsProps {
  quote: Quote;
}
