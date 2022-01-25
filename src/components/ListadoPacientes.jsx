import Paciente from "./Paciente";

const ListadoPacientes = ({ pacientes }) => {
  return (
    <div className="col-12 col-md-6 my-3">
      {pacientes && pacientes.length ? (
        <>
          <h3 className="text-center fw-bold">
            Listado <span className="text-primary">Pacientes</span>
          </h3>

          {pacientes.map((el) => {
            return <Paciente key={el.id} el={el} />;
          })}
        </>
      ) : (
        <h3 className="text-center fw-bold">
          No hay <span className="text-primary">Citas</span>
        </h3>
      )}
    </div>
  );
};
export default ListadoPacientes;
