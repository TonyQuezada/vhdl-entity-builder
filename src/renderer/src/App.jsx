import InputLabel from "./components/InputLabel"
import PortTable from "./components/PortTable"
import './App.css'

function App() {

  return (
    <>
      <h1 className="font-bold text-6xl text-center m-10">VHDL Entity Builder</h1>

      <InputLabel labelText="Entity Name" inputHint="my_entity"/>
      <InputLabel labelText="Architecture Name" inputHint="behavioral"/>
      
      <PortTable/>

    </>
  )
}

export default App
