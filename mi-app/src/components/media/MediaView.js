import React, { useEffect, useState } from "react"
import { getMedia } from "../../services/mediaService"


const MediaView = () => {

  const [media, setMedia] = useState([]);

  const listarMedia = async () => {
    try {
      const { data } = await getMedia();
      console.log(data);
      setMedia(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    listarMedia();
  }, [])

  return (
    <div className="container">
      <div className="mt-2 mb-2 row row-cols-1 row-cols-md-4 g-4">
        {
          media.map((media) => {
            return (
              <div className="col" >
                <div className="card">
                  <img src={media.imagen} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text">{`Serial: ${media.serial}`}</p>
                    <p className="card-text">{`Titulo: ${media.titulo}`}</p>
                    <p className="card-text">{`Sinopsis: ${media.sinopsis}`}</p>
                    <p className="card-text">{`Genero: ${media.genero}`}</p>

                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export {
  MediaView
}
