import PortTable from "./components/PortTable"
import MarcaAgua from "./components/MarcaAgua"
import './App.css'

function App() {

  return (
    <>
      <h1 className="font-bold text-6xl text-center text-blue-900 m-10 hover:underline" onClick={() => window.location.reload()}>VHDL Entity Builder</h1>
      
      <PortTable/>
      <MarcaAgua/>

    </>
  )
}

export default App
