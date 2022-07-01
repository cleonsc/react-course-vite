import fetch from 'cross-fetch';

export const getImage = async () => {
  try {
    const apiKey = 'GqSTWoH4rFJ6WACU9zsuGEn2wZSRfhXG';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const { data } = await resp.json();
    const { url } = data.images.original;
    
    return url;
  } catch (error) {
    console.error(error)
    return 'No se encontró la imagen'
  }
}
