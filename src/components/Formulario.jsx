import React from "react";

const Formulario = () => {
  return (
    <div className="col-12 col-md-5 p-4 my-3 bg-white shadow-sm rounded">
      <h3 className="text-center fw-bold">Añadir <span className="text-primary">Pacientes</span></h3>
      <form action="" className="my-3">
          <div className="mb-3">
              <label htmlFor="mascota" className="form-label fw-bold">Nombre Mascota</label>
              <input type="text" className="form-control" id="mascota" placeholder="Nombre de la Mascota"/>
          </div>
          <div className="mb-3">
              <label htmlFor="propietario" className="form-label fw-bold">Nombre Propietario</label>
              <input type="text" className="form-control" id="propietario" placeholder="Nombre del Propietario"/>
          </div>
          <div className="mb-3">
              <label htmlFor="email" className="form-label fw-bold">Email</label>
              <input type="email" className="form-control" id="email" placeholder="correo@correo.com"/>
          </div>
          <div className="mb-3">
              <label htmlFor="alta" className="form-label fw-bold">Alta</label>
              <input type="date" className="form-control" id="alta"/>
          </div>
          <div className="mb-3">
              <label htmlFor="sintomas" className="form-label fw-bold">Sintomas</label>
              <textarea type="sintomas" className="form-control" id="sintomas" placeholder="Describe los sintomas"/>
          </div>
          <div className=" d-grid ">
          <input type="submit" className="btn btn-primary" value="Agregar Paciente" />
          </div>
      </form>
    </div>
  );
};

export default Formulario;
