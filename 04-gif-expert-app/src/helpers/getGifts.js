
export const getGifs = async (category) => {
  
  const url = `https://api.giphy.com/v1/gifs/search?api_key=NWgAtm95m6kTEe51EJEv5GD0XEde8Ro4&q=${category}&limit=20`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.dowsized_medium.url
  }));

  console.log(gifs);

  return gifs;
}