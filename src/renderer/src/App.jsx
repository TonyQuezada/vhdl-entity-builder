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

      <form  className="flex flex-col">
        <button type="button"
        className="rounded bg-blue-700 text-white font-medium w-8/12 m-10 mt-15 p-5 self-center hover:bg-blue-800 active:ring-blue-300 active:ring-4"
        >Save VHDL file</button>      
      </form>

    </>
  )
}

export default App
