// PortTable.jsx

import '../App.css'
import Port from "./Port"
import InputLabel from "./InputLabel"
import { useState, useEffect } from 'react'
import { codeFiller, saveToFile, copyToClipboard } from '../algorithm.js'
import clip from '/assets/clipboard.png'

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

    const [copyTooltip, setCopyTooltip] = useState(false)

    useEffect(() => {
        if (copyTooltip) {
          const timer = setTimeout(() => {
            setCopyTooltip(false);
          }, 600);
    
          return () => clearTimeout(timer);
        }
      }, [copyTooltip]);

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

            <form  className="flex flex-row justify-center">
                <button type="button"
                className="rounded bg-blue-700 text-white font-medium w-7/12 mt-15 mx-2 p-5 h-18 self-center hover:bg-blue-800 active:ring-blue-300 active:ring-4"
                onClick={ () => saveToFile((codeFiller(portState, entityName, archName)), entityName) }
                >Save VHDL file</button>
                <button type="button"
                title='copy to clipboard'
                onClick={() => {copyToClipboard((codeFiller(portState, entityName, archName))); setCopyTooltip(true)}}
                className='rounded bg-blue-800 text-white font-medium mt-15 mx-2 p-5 h-18 w-18 self-center hover:bg-blue-900 active:ring-blue-300 active:ring-4 relative'
                ><img src={clip}/>
                {copyTooltip &&
                <div 
                className='rounded ring-4 ring-red-300 bg-white text-center font font-medium text-red-600 w-min text-nowrap p-2 m-2 absolute left-10 top-12d'

                >
                    Saved to clipboard!
                </div>
                }
                </button>      
            </form>
            <div className='bg-red-500 w-10/12 justify-self-center relative'>
                
            </div>
        </>

    )

}

export default PortTable

