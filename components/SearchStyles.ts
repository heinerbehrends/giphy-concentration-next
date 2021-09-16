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
  border-radius: 1.5rem;
  border-color: transparent;
  box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  transition: transform 200ms ease-in;
  :focus {
    box-shadow: 0.28rem 0.28em 0.56rem rgba(0, 0, 0, 0.3);
    outline: none;
    transform: scale(1.025);
  }
`;

export const TextInput = styled(Input)`
  :focus {
    box-shadow: 0.3rem 0.3em 0.6rem rgba(0, 0, 0, 0.3);
    /* 0.1rem 0.1rem 0.2rem rgb(189, 189, 189) inset; */
    outline: none;
  }
`;

export const Button = styled(Input)`
  margin-left: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  font-weight: 700;
  background-color: rgba(255, 151, 151, 0.4);
  :active {
    transform: scale(0.95);
    box-shadow: 0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  }
  :focus {
    box-shadow: 0 0 0 3px #f5f5f5, 0 0 0 6px rgba(255, 151, 151, 0.4),
      0.4rem 0.4em 0.4rem rgba(0, 0, 0, 0.3);
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
`;

export const ReplayButton = styled(Button)`
  display: block;
  margin: 0 auto;
  margin-top: 2rem;
`;
