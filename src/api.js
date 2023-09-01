import axios from 'axios';

const API_KEY = '38376053-36f58a073519ff95a963b2d32';

export async function fetchImages(query, page) {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data.hits;
}
