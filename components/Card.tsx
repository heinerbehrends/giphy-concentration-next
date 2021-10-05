import React from 'react';
import { CardT } from '../logic/logic';
import { CardScene, CardContainer, CardFront, CardBack } from './CardStyles';

type additionalCardProps = {
  handleCardClick: (key: number, flipCount: number, progress: number) => void;
  flipCount: number;
  progress: number;
  setProgress: React.Dispatch<React.SetStateAction<number>>;
};
export type CardProps = CardT & additionalCardProps;

function Card(props: CardProps) {
  const {
    url,
    isFlipped,
    isVisible,
    key,
    handleCardClick,
    flipCount,
    progress,
    setProgress,
  } = props;
  return (
    <CardScene
      key={key}
      onClick={() => handleCardClick(key, flipCount, progress)}
    >
      <CardContainer
        style={{
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          opacity: isVisible ? 100 : 0,
          cursor: progress === 24 ? 'pointer' : 'default',
        }}
      >
        <CardFront>
          <img
            src="backside.gif"
            alt="backside"
            style={{
              width: '100px',
              height: '100px',
              filter: `${progress === 24 ? 'none' : 'grayscale(90%)'}`,
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
            onLoad={() => setProgress(progress + 1)}
          />
        </CardBack>
      </CardContainer>
    </CardScene>
  );
}

export default Card;
