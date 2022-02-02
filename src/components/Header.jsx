const Header = ({ setBusqueda, busqueda }) => {
  return (
    <>
      <h1 className="text-center my-3 fw-bold">
        Control de Citas <span className="text-primary">Veterinaria</span>
      </h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Buscar por Mascota o Propietario"
                aria-label="Buscar por Mascota o Propietario"
                aria-describedby="button-addon2"
                value={busqueda}
                onChange={(e)=> setBusqueda(e.target.value)}
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
