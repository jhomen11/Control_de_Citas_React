import { useState } from "react "
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  console.log(pacientes);

  return (
    <div className="container">
      <Header/>
      <div className="row mt-2">
      <Formulario 
        setPacientes={setPacientes}
        pacientes={pacientes}
      />
      <ListadoPacientes
        pacientes={pacientes}
      />
      </div>
    </div>
  )
}

export default App
