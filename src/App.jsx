import { useState, useEffect } from "react "
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  
  const [pacientes, setPacientes] = useState([]);
  const [pacienteEdit, setPacienteEdit] =  useState({})

  //Se ejecuta para obtener lo que hay en localstorage
  useEffect(()=>{
    const getPacientesLs = ()=>{
      const pacientesLs = JSON.parse(localStorage.getItem('pacientes')) ?? []
      setPacientes(pacientesLs)
    }
    getPacientesLs()
  },[])

  //Se ejecuta cada vez que el componente se renderiza o cuando hay algun cambio en la variable Pacientes
  //y mofifica los cambios en localstorage
  useEffect(()=>{
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
  }, [pacientes])

  const eliminarPaciente = (id) =>{
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)

    setPacientes(pacientesActualizados)
  }
  

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
        eliminarPaciente={eliminarPaciente}
      />
      </div>
    </div>
  )
}

export default App
