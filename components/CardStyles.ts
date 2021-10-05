import styled from 'styled-components';

export const CardScene = styled.div`
  width: 100px;
  height: 100px;
  perspective: 600px;
`;

export const CardContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 1s;
  transform-style: preserve-3d;
`;

export const CardFront = styled.div`
  transform: rotateY(0deg);
  position: absolute;
  width: 100px;
  height: 100px;
  img {
    backface-visibility: hidden;
  }
`;

export const CardBack = styled.div`
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
