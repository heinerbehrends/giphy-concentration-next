import { NextApiRequest, NextApiResponse } from 'next';
import { GiphyFetch, SearchOptions } from '@giphy/js-fetch-api';
import { IGif } from '@giphy/js-types';
import { makeCards } from '../../logic/logic';

const API_KEY = process.env.API_KEY;
const gf = new GiphyFetch(API_KEY!);

function getURL(giphObj: IGif) {
  return giphObj.images.fixed_height.url;
}

// type guard function to check if error object has message property
function isError(something: any): something is NodeJS.ErrnoException {
  return something instanceof Error;
}

async function getCards(searchTerm: string) {
  try {
    const options: SearchOptions = { sort: 'recent', limit: 12, rating: 'g' };

    const result = await gf.search(searchTerm, options);
    if (result.data.length < 12) {
      throw new Error('There are not enough results for the search term.');
    }
    const URLs = result.data.map(getURL);
    const cards = makeCards(URLs);

    return { cards, error: null };
  } catch (error) {
    if (isError(error)) {
      return { error: error.message, cards: null };
    }
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { searchTerm } = JSON.parse(req.body);
  const data = await getCards(searchTerm);
  res.status(200).json({ data });
};
