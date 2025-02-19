import axios from "axios";

async function getGoogleReviews() {
  const placeId = import.meta.env.VITE_PLACE_ID;
  const apiKey = import.meta.env.VITE_GOOGLE_PLACES_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    if (data.result && data.result.reviews) {
      return data.result.reviews;
    } else {
      return [];
    }
  } catch (err) {
    console.error("Error fetching Google Reviews:", err);
    throw err;
  }
}

export default getGoogleReviews;
