import React, { useState, useEffect } from 'react';
import { getGenero, postGenero, deleteGenero } from '../../services/generoService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const GeneroView = () => {
  const [valoresForm, setValoresForm] = useState({});
  const [generoList, setGenero] = useState([]);
  const { nombre = '', estado = '' } = valoresForm;

  const listarGenero = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      const resp = await getGenero();
      setGenero(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarGenero();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  const handleCrearGenero = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      await postGenero(valoresForm);
      setValoresForm({ nombre: '', estado: '' });
      Swal.close();
      listarGenero();

      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Genero creado correctamente',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    } catch (error) {
      console.log(error);
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el Género',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    }
  };

  const handleEliminarGenero = async (id) => {
    const confirmar = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este Género.',
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
        await deleteGenero(id);
        listarGenero();
        Swal.close();
        Swal.fire('¡Eliminado!', 'El Género ha sido eliminado.', 'success');
      } catch (error) {
        console.log(error);
        Swal.close();
        Swal.fire('Oops...', 'Ocurrió un error al eliminar el Género.', 'error');
      }
    }
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleCrearGenero}>
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
              <label className="form-label">Estado</label>
              <select
                required
                name='estado'
                value={estado}
                className="form-select"
                onChange={handleOnChange}
              >
                <option value="">--SELECCIONE--</option>
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
              </select>
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
            <th scope="col">Estado</th>
            <th scope='col'>Fecha Creación</th>
            <th scope='col'>Fecha Actualización</th>
            <th scope='col'>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {generoList.length > 0 && generoList.map((genero, index) => (
            <tr key={genero._id}>
              <th scope='row'>{index + 1}</th>
              <td>{genero.nombre}</td>
              <td>{genero.estado}</td>
              <td>{moment(genero.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>{moment(genero.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleEliminarGenero(genero._id)}
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