

export const getGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=AJiJgLy64t2CHUW3GdT2B1v2aJnAJ3BA&q=${category}&limit=10`;
  
    const resp = await fetch(url);
    const { data } = await resp.json();
    
    const gifs = data.map( img=> ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }) );
  
    return gifs;
  } 