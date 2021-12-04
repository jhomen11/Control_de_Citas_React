import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"

function App() {
  

  return (
    <div className="container">
      <Header/>
      <div className="row mt-2">
      <Formulario/>
      <ListadoPacientes/>
      </div>
    </div>
  )
}

export default App
