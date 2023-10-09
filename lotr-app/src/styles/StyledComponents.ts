import styled from "styled-components";

export const Container = styled.div`
  padding: 1.25rem;
  border-radius: 0.5rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  margin: 1.25rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.625rem;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: #000;
  text-decoration: underline;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const ListItem = styled.li`
  background-color: #f5f5f5;
  border: 0.0625rem solid #e8e8e8;
  margin-bottom: 10px;
  padding: 1.25rem;
  border-radius: 0.25rem;
  box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Name = styled.span`
  font-weight: bold;
  color: #333;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.3125rem 0.625rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Details = styled.span`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const SortButtonContainer = styled.div`
  background-color: #007bff;
  color: #fff;
  padding: 0.3125rem 0.625rem;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  &:hover {
    background-color: #0056b3;
  }
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  width: 10rem;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;
