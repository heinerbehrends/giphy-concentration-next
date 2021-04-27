import { NextApiRequest, NextApiResponse } from 'next';
import { GiphyFetch, SearchOptions } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { makeCards } from '../../logic/logic';

const gf = new GiphyFetch('u5T3TKASE8a0GHUAPgOsc7FPuoGn6iyo');

function getURL(giphObj: IGif) {
  return giphObj.images.fixed_height.url;
}

async function getCards(searchTerm: string) {
  try {
    const options: SearchOptions = { sort: 'recent', limit: 12, rating: 'g' };

    const result = await gf.search(searchTerm, options);
    const URLs = result.data.map(getURL);
    const cards = makeCards(URLs);

    return { cards, error: null };
  } catch (error) {
    console.error(`search`, error);
    return { error, cards: null };
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = JSON.parse(req.body);
  const data = await getCards(searchTerm);
  res.status(200).json({ data });
};
