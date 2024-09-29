import React, { useState, useEffect } from 'react';
import { getTipo, postTipo, deleteTipo } from '../../services/tipoService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const TipoView = () => {
  const [valoresForm, setValoresForm] = useState({});
  const [tipoList, setTipo] = useState([]);
  const { nombre = '', descripcion = '' } = valoresForm;

  const listarTipo = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      const resp = await getTipo();
      setTipo(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarTipo();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  const handleCrearTipo = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      await postTipo(valoresForm);
      setValoresForm({ nombre: '', descripcion: '' });
      Swal.close();
      listarTipo();

      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Tipo creado correctamente',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    } catch (error) {
      console.log(error);
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el Tipo',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    }
  };

  const handleEliminarTipo = async (id) => {
    const confirmar = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar tipo.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'Cancelar',
    });

    if (confirmar.isConfirmed) {
      try {
        Swal.fire({
          allowOutsideClick: false,
          text: 'Eliminando...',
        });
        Swal.showLoading();
        await deleteTipo(id);
        listarTipo();
        Swal.close();
        Swal.fire('¡Eliminado!', 'Tipo ha sido eliminado.', 'success');
      } catch (error) {
        console.log(error);
        Swal.close();
        Swal.fire('Oops...', 'Ocurrió un error al eliminar Tipo.', 'error');
      }
    }
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleCrearTipo}>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input
                required
                name='nombre'
                value={nombre}
                type="text"
                className="form-control"
                onChange={handleOnChange}
              />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  required
                  name="descripcion"
                  value={descripcion}
                  className="form-control"
                  rows="1"
                  onChange={handleOnChange}
                />
              </div>

            </div>
          </div>
        </div>
        <button className="btn btn-primary">Guardar</button>
        <br />
        <br />
      </form>

      <table className="table">
        <thead>
          <tr>
            <th scope='row'>#</th>
            <th scope="col">Nombre</th>
            <th scope="col">descripcion</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {tipoList.length > 0 && tipoList.map((tipo, index) => (
            <tr key={tipo._id}>
              <th scope='row'>{index + 1}</th>
              <td>{tipo.nombre}</td>
              <td>{tipo.descripcion}</td>
              <td>{moment(tipo.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>{moment(tipo.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleEliminarTipo(tipo._id)}
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}