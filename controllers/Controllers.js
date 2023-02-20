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

    const returnJson = photos.map((elem) => ({
      id: elem.id,
      title: elem.title,
      url: `https://live.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}_b.jpg`,
      thumbUrl: `https://live.staticflickr.com/${elem.server}/${elem.id}_${elem.secret}_t.jpg`,
    }));

    res.status(200).json(returnJson);
  } catch (error) {
    console.log(error.message);
  }
};
