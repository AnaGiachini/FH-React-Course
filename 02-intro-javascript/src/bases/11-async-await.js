// Async y Await

const getImagen = async () => {

  try {
    const apiKey = 'mmAkkrc2X0pumay8HQUfKvJG33AaV4dE';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();

    const { url } = (data.images.original);

    const img = document.createElement('img');
    img.src = url;
    document.body.append(img);

  }
  catch (error) {
    // manejo del error
    console.error(error);
  }
}
getImagen();

