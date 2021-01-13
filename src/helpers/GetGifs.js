export const getGifs = async (category) => {
  let url = `http://api.giphy.com/v1/gifs/search?api_key=A60pVAO6LFUHNO93wgQyAYff1jmu5nJL&q=${encodeURI(
    category
  )}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    };
  });
  return gifs;
};
