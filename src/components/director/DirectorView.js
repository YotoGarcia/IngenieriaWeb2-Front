import React, { useState, useEffect } from 'react';
import { getDirector, postDirector } from '../../services/directorService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const DirectorView = () => {
  const [valoresForm, setValoresForm] = useState({});
  const [directorList, setDirector] = useState([]); 
  const { nombre = '', estado = '' } = valoresForm;

  const listarDirectores = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      const resp = await getDirector();
      setDirector(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarDirectores();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  const handleCrearDirector = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      await postDirector(valoresForm);
      setValoresForm({ nombre: '', estado: '' });
      Swal.close();
      listarDirectores(); 

      // Alerta de éxito
      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Director creado correctamente',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false, // Evita que se cierre al hacer clic afuera
        didClose: () => {
          // Esta función se llama cuando la alerta se cierra
          console.log("Alerta cerrada");
        }
      });
    } catch (error) {
      console.log(error);
      Swal.close();
      // Alerta de error
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el director',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false, // Evita que se cierre al hacer clic afuera
        didClose: () => {
          // Esta función se llama cuando la alerta se cierra
          console.log("Alerta cerrada");
        }
      });
    }
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleCrearDirector}>
        <div className="row">
          <div className="col-lg-8">
            <div className="mb-3">
              <label className="form-label">Nombre</label>
              <input required name='nombre' value={nombre} type="text" className="form-control"
                onChange={handleOnChange} />
            </div>
          </div>
          <div className="col-lg-4">
            <div className="mb-3">
              <label className="form-label">Estado</label>
              <select required name='estado' value={estado} className="form-select" onChange={handleOnChange}>
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
          </tr>
        </thead>
        <tbody>
          {directorList.length > 0 && directorList.map((director, index) => (
            <tr key={director._id}>
              <th scope='row'>{index + 1}</th>
              <td>{director.nombre}</td>
              <td>{director.estado}</td>
              <td>{moment(director.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>{moment(director.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
