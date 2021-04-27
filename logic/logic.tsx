export const makeCards = (linkArray: string[]): Cards => {
  const links = shuffleDuplicateElements(linkArray);
  return links.map((link, i) => ({
    key: i,
    url: link,
    isFlipped: false,
    isVisible: true,
  }));
};

export type CardT = {
  key: number;
  url: string;
  isFlipped: boolean;
  isVisible: boolean;
};

export type Cards = CardT[];

export function makeNextCards(cards: Cards) {
  if (cards === null) return null;
  return isPair(cards)
    ? changeFlipped(cards, 'isVisible')
    : changeFlipped(cards, 'isFlipped');
}

export const cardCount = (cards: Cards) =>
  cards.filter((card) => card.isVisible).length;

export function flipCard(cards: Cards, key: number) {
  if (cards === null) return null;
  return cards.map((card) =>
    card.key === key ? { ...card, isFlipped: true } : card
  );
}

export function shouldFlip(cards: Cards, key: number, flipCount: number) {
  if (!!cards) {
    return flipCount < 2 && !cards[key].isFlipped && cards[key].isVisible;
  }
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

function shuffleDuplicateElements<Type>(array: Type[]) {
  return shuffleArray(duplicateElement(array));
}

const getFlipped = (cards: Cards) =>
  cards.filter((card) => card.isFlipped && card.isVisible);

const isPair = (cards: Cards) => {
  const flippedCards = getFlipped(cards);
  const [flippedOne, flippedTwo] = flippedCards;
  return flippedOne.url === flippedTwo.url;
};

const changeFlipped = (cards: Cards, flag: string) =>
  cards.map((card) => {
    if (card.isFlipped) {
      switch (flag) {
        case 'isFlipped':
          return { ...card, isFlipped: false };
        case 'isVisible':
          return { ...card, isVisible: false };
        default:
          return card;
      }
    }
    return card;
  });
