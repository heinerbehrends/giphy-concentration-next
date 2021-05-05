import React, { useState } from 'react';
import styled from 'styled-components';
import { CardT } from '../logic/logic';

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
  width: 100px;
  height: 100px;
  img {
    backface-visibility: hidden;
  }
`;

const CardBack = styled.div`
  /* transform: rotate3d(0, 180, 0, 0); */
  transform: rotateY(180deg);
  width: 100px;
  height: 100px;
  img {
    backface-visibility: hidden;
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
  const [isLoading, setIsLoading] = useState(true);
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
            style={{
              width: '100px',
              height: '100px',
              filter: `${isLoading ? 'grayscale(90%)' : 'none'}`,
            }}
          />
        </CardFront>
        <CardBack>
          <img
            src={`${url}`}
            alt="frontside"
            style={{
              width: '100px',
              height: '100px',
            }}
            onLoad={() => setIsLoading(false)}
          />
        </CardBack>
      </CardContainer>
    </CardScene>
  );
}

export default Card;
