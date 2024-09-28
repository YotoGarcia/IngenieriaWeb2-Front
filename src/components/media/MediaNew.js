import React, { useState, useEffect } from 'react';
import { getDirector } from '../../services/directorService';
import { getGenero } from '../../services/generoService';
import { postMedia } from '../../services/mediaService';
import { getProductora } from '../../services/productoraService';
import { getTipo } from '../../services/tipoService';
import Swal from 'sweetalert2';


export const MediaNew = ({ handleOpenModal, listarMedia }) => {

    const [Director, setDirector ] = useState([]);
    const [Genero, setGenero ] = useState([]);
    const [Tipo, setTipo ] = useState([]);
    const [Productora, setProductora ] = useState([]);
    const [ valoresForm, setValoresForm ] = useState({});
    const { serial = '', titulo = '', sinopsis = '', url = '',
        imagen = '', fechaCreacion = '', añoEstreno = '', genero, director, productora, tipo } = valoresForm
    
    const listarGeneros = async () => {
        try{
            const { data } = await getGenero();
            setGenero(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarGeneros();
    }, []);


    const listardirectores = async () => {
        try{
            const { data } = await getDirector();
            setDirector(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listardirectores();
    }, []);


    const listarTipos = async () => {
        try{
            const { data } = await getTipo();
            setTipo(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarTipos();
    }, []);


    const listarProductoras = async () => {
        try{
            const { data } = await getProductora();
            setProductora(data);

        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        listarProductoras();
    }, []);

    
    const handleOnChange = ({ target }) => {
        const { name, value } = target;
        setValoresForm({ ...valoresForm, [name]: value });
    }

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        const media = {
            serial, titulo, sinopsis, url, imagen,
            fechaCreacion, añoEstreno,
            genero: {
                _id: genero
            },
            director: {
                _id: director
            },
            productora:{
                _id: productora
            },
            tipo: {
                _id: tipo
            }
        }
        console.log(media);
        try {
            Swal.fire({
                allowOutsideClick: false,
                text: 'Cargando...'
            });
            Swal.showLoading();
            const { data } = await postMedia(media);
            handleOpenModal();
            listarMedia();
            Swal.close();

        } catch(error) {
            console.log(error);
            Swal.close();
        }
        
    }

  return (
    <div className='sidebar'>
        <div className='container-fluid'>
            <div className='row'>

                <div className='col'>
                    <div className='sidebar-header'>
                        <h3>Nueva Pelicula o Serie</h3>
                        <i className="fa-solid fa-xmark" onClick={ handleOpenModal }> </i>
                    </div>
                </div>

                <div className='row'>
                    <div className='col'>
                        <hr  />
                    </div>
                </div>

                <form onSubmit={(e) => handleOnSubmit(e) }>
                    <div className='row'>

                        <div className='col'>
                            <div className="mb-3">
                                <label className="form-label">Serial</label>
                                <input type="text" name='serial' 
                                value= {serial}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Titulo </label>
                                <input type="text" name='titulo' 
                                value={titulo}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Sinopsis </label>
                                <input type="text" name='sinopsis' 
                                value={sinopsis}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>

                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Url </label>
                                <input type="text" name='url' 
                                value={url}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Imagen </label>
                                <input type="text" name='imagen'
                                value={imagen} 
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Fecha Creación </label>
                                <input type="date" name='fechaCreacion' 
                                value={fechaCreacion}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Año estreno </label>
                                <input type="number" name='añoEstreno' 
                                value={añoEstreno}
                                onChange={e => handleOnChange(e)}
                                required 
                                className='form-control' />
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Genero </label>
                                <select className='form-select'
                                required
                                name= 'genero'
                                value={genero}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        Genero.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Director </label>
                                <select className='form-select'
                                required
                                name= 'director'
                                value={director}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        Director.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Productora</label>
                                <select className='form-select'
                                required
                                name= 'productora'
                                value={productora}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        Productora.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                        <div className='col'>
                            <div className="mb-3">
                                <label  className="form-label">Tipo</label>
                                <select className='form-select'
                                required
                                name= 'tipo'
                                value={tipo}
                                onChange={e => handleOnChange(e)}>
                                <option value="">--SELECCIONE--</option>
                                    {
                                        Tipo.map(({ _id, nombre }) => {
                                            return <option key={_id} value={_id}>{nombre}</option>
                                        }) 
                                    }
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col'>
                            <button className="btn btn-primary">Guardar</button>
                        </div>
                        
                    </div>
                </form>

            </div>
        </div>
    </div>
  )
} 