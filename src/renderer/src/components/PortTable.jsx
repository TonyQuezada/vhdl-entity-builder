// PortTable.jsx

import '../App.css'
import Port from "./Port"
import InputLabel from "./InputLabel"
import { useState } from 'react'
import codeFiller from '../algorithm.js'

const PortTable = () => {

    let counter = 0;
    const [portState, setPortState] = useState([
        {
        "id": ++counter,
        "portName": "",
        "direction": "in",
        "isBus": false,
        "msb": "",
        "lsb": ""
        }
    ])

    const handlePortChange = (id, e) => {
        const name = e.target.name
        let newValue

        if(e.target.type === 'checkbox')
            newValue = e.target.checked
        else
            newValue = e.target.value
        
        setPortState(previousPortState => {
            const updatedPortsArray = previousPortState.map(portObject => {
 
                if(portObject.id === id)
                    return {...portObject, [name]: newValue}
                else
                    return portObject
            })

            if(newValue != "" && newValue != false && id === previousPortState[previousPortState.length - 1]["id"]){
                const newPortObject = {
                    "id": id + 1,
                    "portName": "",
                    "direction": "in",
                    "isBus": false,
                    "msb": "",
                    "lsb": ""
                }
                return [...updatedPortsArray, newPortObject]
            }
            else{
                return updatedPortsArray
            }

        })
    }

    const [entityName, setEntityName] = useState("")
    const [archName, setArchName] = useState("")

    return (
        <>
            <InputLabel labelText="Entity Name" inputHint="my_entity" value={entityName} onChange={e => setEntityName(e.target.value)}/>
            <InputLabel labelText="Architecture Name" inputHint="behavioral" value={archName} onChange={e => setArchName(e.target.value)}/>
          
            <div className='flex flex-row mx-9 mt-10 mb-5'> 
                <div className='tablacss w-6/12'>Port Name</div>
                <div className='tablacss w-1/12'>Direction</div>
                <div className='tablacss w-1/12'>Bus</div>
                <div className='tablacss w-2/12'>MSB</div>
                <div className='tablacss w-2/12'>LSB</div>
            </div>

            <form>
                <div>
                    {
                        portState.map((portObject) => {
                            return (
                                <Port key={portObject.id} portProperties={portObject} onChange={handlePortChange}/>
                            )
                        })
                    }
                </div>
                <Port disabled={true} />

            </form>

            <form  className="flex flex-col">
                <button type="button"
                className="rounded bg-blue-700 text-white font-medium w-8/12 m-10 mt-15 p-5 self-center hover:bg-blue-800 active:ring-blue-300 active:ring-4"
                onClick={()=>console.log(codeFiller(entityName, archName, portState))}
                >Save VHDL file</button>      
            </form>
        </>

    )

}

export default PortTable