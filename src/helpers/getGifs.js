export const getGifs = async (category) => {
    const API_KEY = 'fsJy7vQQX7J00c5B2B6DtCFXT1y5tWhX';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=${20}&offset=0&rating=g&lang=en`;
  
    const resp = await fetch(url);
  
    const {data} = await resp.json()
  
    const gifs = data.map (img => (
      {
        id: img.id,
        title: img.title,
        url: img.images.original.url
      }
      
    ))
    
    console.log(gifs);
      return gifs;
    
  
  }