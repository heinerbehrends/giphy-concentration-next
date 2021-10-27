import styled from 'styled-components';

export const Form = styled.form`
  font-size: 1.5rem;
  margin: 0 auto;
`;

export const Input = styled.input`
  margin-left: 1.5rem;
  padding: 1rem;
  padding-left: 1.5rem;
  font-size: 1.5rem;
  transform: skew(-10deg);
  border-color: transparent;
  box-shadow: 0.3rem 0.3rem rgba(0, 0, 0, 0.3);
  :focus {
    box-shadow: 0.4rem 0.4rem rgba(0, 0, 0, 0.3);
    outline: none;
    transform: scale(1.02) skew(-10deg);
  }
`;

export const TextInput = styled(Input)``;

export const Button = styled(Input)`
  cursor: pointer;
  margin-left: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  color: white;
  background-color: #1cac78;
  :hover {
    transform: scale(1.02) skew(-10deg);
    box-shadow: 0.4rem 0.4rem rgba(0, 0, 0, 0.3);
  }
  :active {
    transform: scale(0.95) skew(-10deg);
    box-shadow: 0.15rem 0.15rem rgba(0, 0, 0, 0.3);
  }
`;

export const SearchSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Heading = styled.h1`
  font-size: 3rem;
  color: #333;
  text-shadow: 0.1rem 0.1rem rgba(0, 0, 0, 0.3);
`;

export const ReplayButton = styled(Button)`
  display: block;
  margin: 0 auto;
  background-color: orange;
  margin-top: 2rem;
`;
