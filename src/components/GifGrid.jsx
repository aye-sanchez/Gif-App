
import { useFetchGif } from "../hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({category, removeCategory}) => {

  const {imagenes, loading} = useFetchGif(category);

  return (
      <>
        
        
        
           {/* desplegar listado */}
           <div className = "card-grid">
           
            {
              loading ? <h2> Cargando...</h2> :
              imagenes.map(imagen => <GifItem key = {imagen.id} {...imagen} />)
            }
           </div>
        
        
      </>
    )
}
