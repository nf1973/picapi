import fetch from "node-fetch";
import * as dotenv from "dotenv";
dotenv.config();

const APIKEY = process.env.APIKEY;

export const getPicsByKeyword = async (req, res) => {
  const KEYWORD = req.query.search;
  console.log("Searched for: ", KEYWORD);

  try {
    const response = await fetch(
      `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${APIKEY}&tags=${KEYWORD}&per_page=32&format=json&nojsoncallback=1`
    );

    const body = await response.json();
    const photos = body.photos.photo;

    res.status(200).json(photos);
  } catch (error) {
    console.log(error.message);
  }
};
