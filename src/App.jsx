import { useState } from "react "
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] =  useState({})
  

  return (
    <div className="container">
      <Header/>
      <div className="row mt-2">
      <Formulario 
        setPacientes={setPacientes}
        setPacienteEdit={setPacienteEdit}
        pacientes={pacientes}
        pacienteEdit={pacienteEdit}

      />
      <ListadoPacientes
        pacientes={pacientes}
        setPacienteEdit={setPacienteEdit}
      />
      </div>
    </div>
  )
}

export default App
