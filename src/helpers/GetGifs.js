export const getGifs = async (category, setState) => {
  setState({
    data: [],
    loading: true,
  })
  const apiKey = "6y6EW6FiRPOsqsMHB8AdCRWjdskw3gmh";
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=${apiKey}`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifts = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });
  return gifts;
};
