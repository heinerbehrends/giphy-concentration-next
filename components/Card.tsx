import React from 'react';
import styled from 'styled-components';
import { CardT } from '../logic/logic';

// const CardStyled = styled.div<CardT>`
//   background: url(${(props) => (props.isFlipped ? props.url : `backside.gif`)});
// background-size: cover;
// background-position: center, center;
//   display: inline-block;
//   content: ' ';
//   height: 100px;
//   width: 100px;
//   margin: 10px;
//   opacity: ${({ isVisible }) => (isVisible ? 100 : 0)};
//   &:after {
//     content: '';
//     background: url(${({ url }) => url});
//     opacity: 0;
//   }
// `;

const CardScene = styled.div`
  width: 100px;
  height: 100px;
  perspective: 600px;
`;

const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

const CardFront = styled.div`
  position: absolute;
  backface-visibility: hidden;
  width: 100px;
  height: 100px;
`;

const CardBack = styled.div`
  transform: rotateY(180deg);
  width: 100px;
  height: 100px;
  img {
    object-fit: cover;
    object-position: center, center;
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
    <CardScene key={key} onClick={() => handleCardClick(key, flipCount)}>
      <CardContainer
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          opacity: isVisible ? 100 : 0,
        }}
      >
        <CardFront>
          <img
            src="backside.gif"
            alt="backside"
            style={{ width: '100px', height: '100px' }}
          />
        </CardFront>
        <CardBack>
          <img
            src={`${url}`}
            alt="frontside"
            style={{ width: '100px', height: '100px' }}
          />
        </CardBack>
      </CardContainer>
    </CardScene>
  );
}

export default Card;
