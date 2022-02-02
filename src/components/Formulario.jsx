import React, { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, pacienteEdit, setPacienteEdit }) => {
  
  const [mascota, setMascota] = useState("");
  const [propietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [fecha, setFecha] = useState("");
  const [sintomas, setSintomas] = useState("");

  
  //State para manejar las validaciones
  const [error, setError] = useState(false);

  useEffect(()=>{
    if( Object.keys(pacienteEdit).length > 0){
      setMascota(pacienteEdit.mascota)
      setPropietario(pacienteEdit.propietario)
      setEmail(pacienteEdit.email)
      setFecha(pacienteEdit.fecha)
      setSintomas(pacienteEdit.sintomas)
      
    }
  },[pacienteEdit])

  //Función para generar un id aleatorio
  const generarID = () => {
    const randon = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36)

    return randon + fecha
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //Validacion del Formulario
    if ([mascota, propietario, email, fecha, sintomas].includes("")) {
      setError(true);
      return
    }
    setError(false)

    //Objeto de paciente
    const objPaciente = {
      mascota,
      propietario,
      email,
      fecha,
      sintomas,
      
    }

    //Editar Paciente
    if(pacienteEdit.id){
      objPaciente.id = pacienteEdit.id

      const pacienteActulizado = pacientes.map( pacienteState => pacienteState.id ===  pacienteEdit.id 
        ? objPaciente: pacienteState)

        setPacientes(pacienteActulizado)
        setPacienteEdit({})

    }else{
      //Nuevo Paciente
      objPaciente.id = generarID()
      setPacientes([...pacientes, objPaciente])
    }


    //Reiniciar el formulario
    setMascota('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  };

  return (
    <div className="col-12 col-md-6 col-lg-5  my-3 ">
      <h3 className="text-center fw-bold mb-4">
        Añadir <span className="text-primary">Pacientes</span>
      </h3>
      <form
        action=""
        className="my-4 bg-white shadow-sm rounded p-4"
        onSubmit={handleSubmit}
      >
        {error && <Error mensaje="Todos los campos son obligatorios"/> }

        <div className="mb-3">
          <label htmlFor="mascota" className="form-label fw-bold">
            Nombre Mascota
          </label>
          <input
            type="text"
            className="form-control"
            id="mascota"
            placeholder="Nombre de la Mascota"
            value={mascota}
            onChange={(e) => setMascota(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="propietario" className="form-label fw-bold">
            Nombre Propietario
          </label>
          <input
            type="text"
            className="form-control"
            id="propietario"
            placeholder="Nombre del Propietario"
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label fw-bold">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="correo@correo.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="alta" className="form-label fw-bold">
            Alta
          </label>
          <input
            type="date"
            className="form-control"
            id="alta"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="sintomas" className="form-label fw-bold">
            Sintomas
          </label>
          <textarea
            type="sintomas"
            className="form-control"
            id="sintomas"
            placeholder="Describe los sintomas"
            value={sintomas}
            onChange={(e) => setSintomas(e.target.value)}
          />
        </div>
        <div className=" d-grid ">
          <input
            type="submit"
            className="btn btn-primary"
            value={pacienteEdit.id  ? "Editar Paciente": "Agregar Paciente"}
          />
        </div>
      </form>
    </div>
  );
};

export default Formulario;
