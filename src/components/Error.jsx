const Error = ({ mensaje }) => {
  return (
    <div>
      <p className="alert alert-danger p-2 text-center text-uppercase fw-bold">
        {mensaje}
      </p>
    </div>
  );
};

export default Error;
