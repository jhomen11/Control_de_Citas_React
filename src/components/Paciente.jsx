import React from 'react'

const Paciente = ({ el }) => {
    return (
        <div className="bg-white shadow-sm rounded p-4 my-4">
                <p className="fw-bold my-2">Nombre: <span className="fw-normal">{el.mascota}</span></p>
                <p className="fw-bold my-2">Propietario: <span className="fw-normal">{el.propietario}</span></p>
                <p className="fw-bold my-2">Email: <span className="fw-normal">{el.email}</span></p>
                <p className="fw-bold my-2">Fecha: <span className="fw-normal">{el.fecha}</span></p>
                <p className="fw-bold my-2">Sintomas: <span className="fw-normal">{el.sintomas}</span></p>
            </div>
    )
}

export default Paciente
