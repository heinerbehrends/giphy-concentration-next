export type CardT = {
  key: number;
  url: string;
  isFlipped: boolean;
  isVisible: boolean;
};

export type Cards = CardT[];

export function makeCards(linkArray: string[]): Cards {
  const links = shuffleAndDuplicate(linkArray);
  return links.map((link, i) => ({
    key: i,
    url: link,
    isFlipped: false,
    isVisible: true,
  }));
}

export function makeNextCards(cards: [CardT]) {
  return flipOrRemove(cards, isPair(cards));
}

export function countCards(cards: Cards) {
  return cards.filter((card) => card.isVisible).length;
}

export function flipCard(cards: Cards, key: number) {
  return cards.map((card) =>
    card.key === key ? { ...card, isFlipped: true } : card
  );
}

export function shouldFlip(cards: Cards, key: number, flipCount: number) {
  return flipCount < 2 && !cards[key].isFlipped && cards[key].isVisible;
}

function shuffleArray<Type>(array: Type[]): Type[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // eslint-disable-line no-param-reassign
  }
  return array;
}

function duplicateElement<Type>(array: Type[]) {
  return array.map((element) => [element, element]).flat();
}

function shuffleAndDuplicate<Type>(array: Type[]) {
  return shuffleArray(duplicateElement(array));
}

function getFlipped(cards: Cards) {
  return cards.filter((card) => card.isFlipped && card.isVisible);
}

export function isPair(cards: Cards) {
  const [flippedOne, flippedTwo] = getFlipped(cards);
  return flippedOne.url === flippedTwo.url;
}

function flipOrRemove(cards: Cards, isPair: boolean) {
  return cards.map((card) => {
    if (card.isFlipped) {
      return isPair
        ? { ...card, isVisible: false }
        : { ...card, isFlipped: false };
    }
    return card;
  });
}
