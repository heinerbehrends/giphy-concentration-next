import {
  Cards,
  CardT,
  shouldFlip,
  flipCard,
  shouldTriggerFlipBack,
  flipOrRemove,
  isPair,
} from './logic';

export function useOnClickCard(
  cards: Cards,
  setCards: React.Dispatch<React.SetStateAction<CardT[] | null>>,
  setFlipCount: React.Dispatch<React.SetStateAction<number>>,
  timeoutObj: NodeJS.Timeout
) {
  function onClickCard(key: number, flipCount: number) {
    if (shouldFlip(cards as Cards, key, flipCount)) {
      setFlipCount(flipCount + 1);
      setCards(flipCard(cards as Cards, key));
    }
    if (shouldTriggerFlipBack(cards as Cards, key, flipCount)) {
      clearTimeout(timeoutObj);
      setCards(flipCard(flipOrRemove(cards as Cards, isPair(cards)), key));
      setFlipCount(1);
    }
  }
  return { onClickCard };
}
