import React, { useState } from 'react';
import styled from 'styled-components';
import { CardT } from '../logic/logic';
import { CardScene, CardContainer, CardFront, CardBack } from './CardStyles';

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
