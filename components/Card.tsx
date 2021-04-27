import React from 'react';
import styled from 'styled-components';
import { CardT } from '../logic/logic';

const CardStyled = styled.div<CardT>`
  background: url(${(props) => (props.isFlipped ? props.url : `backside.gif`)});
  background-size: cover;
  background-position: center, center;
  display: inline-block;
  content: ' ';
  height: 100px;
  width: 100px;
  margin: 10px;
  opacity: ${({ isVisible }) => (isVisible ? 100 : 0)};
  &:after {
    content: '';
    background: url(${({ url }) => url});
    opacity: 0;
  }
`;

type additionalCardProps = {
  handleCardClick: (key: number, flipCount: number) => void;
  flipCount: number;
};
export type CardProps = CardT & additionalCardProps;

function Card(props: CardProps) {
  const { url, isFlipped, isVisible, key, handleCardClick, flipCount } = props;
  return (
    <CardStyled
      url={url}
      isFlipped={isFlipped}
      isVisible={isVisible}
      onClick={() => handleCardClick(key, flipCount)}
      key={key}
    />
  );
}

export default Card;
