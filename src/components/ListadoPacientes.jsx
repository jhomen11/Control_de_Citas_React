import Paciente from "./Paciente"


const ListadoPacientes = () => {
    return (
        <div className="col-12 col-md-6 my-3">
            <h3 className="text-center fw-bold">Listado <span className="text-primary">Pacientes</span></h3>
            <Paciente/>
            <Paciente/>
            <Paciente/>
            <Paciente/>
        </div>
    )
}

export default ListadoPacientes
