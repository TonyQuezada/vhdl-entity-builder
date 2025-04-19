// PortTable.jsx

import '../App.css'
import Port from "./Port"
import { useState } from 'react'

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

    return (
        <>
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
                                <Port key={portObject.id} portProperties={portObject} onChange={handlePortChange} />
                            )
                        })
                    }
                </div>
                <Port disabled={true} />
            </form>
        </>

    )

}

export default PortTable