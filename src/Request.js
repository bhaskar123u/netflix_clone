const key = '';

const requests = [
  { title: 'Popular', fetchURL: `https://api.themoviedb.org/3/movie/popular?api_key=${key}` },
  { title: 'Top Rated', fetchURL: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}` },
  { title: 'Weekly Trending', fetchURL: `https://api.themoviedb.org/3/trending/movie/week?api_key=${key}` },
  { title: 'Daily Trending', fetchURL: `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}` },
  { title: 'UpComing', fetchURL: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}` }
];

export default requests;