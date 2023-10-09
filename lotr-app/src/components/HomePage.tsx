import React from "react";
import "../styles/HomePage.css";
import { Container } from "styles/StyledComponents";

const HomePage: React.FC = () => {
  return (
    <Container className="container-center">
      <div className="home-container">
        <h1>Library of the Rings</h1>
        <p>Movies, characters, and quotes from the Lord of the Rings series.</p>
        <p>Created by Garrett Jones</p>
      </div>
    </Container>
  );
};

export default HomePage;
