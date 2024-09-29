import React, { useState, useEffect } from 'react';
import { getProductora, postProductora, deleteProductora } from '../../services/productoraService';
import Swal from 'sweetalert2';
const moment = require('moment');

export const ProductoraView = () => {
  const [valoresForm, setValoresForm] = useState({});
  const [productoraList, setProductora] = useState([]);
  const { nombre = '', estado = '' } = valoresForm;

  const listarProductora = async () => {
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      const resp = await getProductora();
      setProductora(resp.data);
      Swal.close();
    } catch (error) {
      console.log(error);
      Swal.close();
    }
  };

  useEffect(() => {
    listarProductora();
  }, []);

  const handleOnChange = (e) => {
    setValoresForm({ ...valoresForm, [e.target.name]: e.target.value });
  };

  const handleCrearProductora = async (e) => {
    e.preventDefault();
    try {
      Swal.fire({
        allowOutsideClick: false,
        text: 'Cargando...',
      });
      Swal.showLoading();
      await postProductora(valoresForm);
      setValoresForm({ nombre: '', estado: '' });
      Swal.close();
      listarProductora();

      Swal.fire({
        icon: 'success',
        title: '¡Éxito!',
        text: 'Productora creado correctamente',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    } catch (error) {
      console.log(error);
      Swal.close();

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Ocurrió un error al crear el Productora',
        confirmButtonText: 'Aceptar',
        allowOutsideClick: false,
      });
    }
  };

  const handleEliminarProductora = async (id) => {
    const confirmar = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Una vez eliminado, no podrás recuperar este Productora.',
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
        await deleteProductora(id);
        listarProductora();
        Swal.close();
        Swal.fire('¡Eliminado!', 'Productora ha sido eliminada.', 'success');
      } catch (error) {
        console.log(error);
        Swal.close();
        Swal.fire('Oops...', 'Ocurrió un error al eliminar Productora.', 'error');
      }
    }
  };

  return (
    <div className='container-fluid'>
      <form onSubmit={handleCrearProductora}>
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
          {productoraList.length > 0 && productoraList.map((productora, index) => (
            <tr key={productora._id}>
              <th scope='row'>{index + 1}</th>
              <td>{productora.nombre}</td>
              <td>{productora.estado}</td>
              <td>{moment(productora.fechaCreacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>{moment(productora.fechaActualizacion).format('DD-MM-YYYY HH:mm')}</td>
              <td>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => handleEliminarProductora(productora._id)}
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