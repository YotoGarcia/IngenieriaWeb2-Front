import React from 'react'
import { Link } from 'react-router-dom';

export const MediaCard = (props) => {

  const { media } = props

  return (
    <div className="col">
      <div className="card">
        <img src={media?.imagen || 'default-image-url'} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">Descripción</h5>
          <p className="card-text">{`Serial: ${media?.serial}`}</p>
          <p className="card-text">{`Titulo: ${media?.titulo}`}</p>
          <p className="card-text">{`Sinopsis: ${media?.sinopsis}`}</p>
          <p className="card-text">{`Genero: ${media?.genero?.nombre}`}</p>
          <p className="card-text">{`Director: ${media?.director?.nombre}`}</p>
          <p className="card-text">{`Productora: ${media?.productora?.nombre}`}</p>
          <p className="card-text">{`Tipo: ${media?.tipo?.nombre}`}</p>
          <Link className='link' to={`/media/edit/${media?._id}`}>Ver Más...</Link>
        </div>
      </div>
    </div>
  )
}
