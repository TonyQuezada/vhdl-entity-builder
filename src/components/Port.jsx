// Port.jsx

import '../App.css'

const Port = ( { portPlaceholder="port_name", disabled=false, portProperties, onChange} ) => {

    if(disabled === true){
        return (
            <div className='flex flex-row mx-9 my-1'>
                <input disabled type="text" name="portName" id="portName" placeholder={"+"}
                className='border rounded w-6/12 m-2 px-2 py-0.5 border-gray-300 text-gray-500'
                />
                <select disabled name="direction" id="direction"
                className='border rounded m-2 w-1/12 border-gray-300 text-gray-300'
                >
                    <option value="in">in</option>
                    <option value="out">out</option>
                </select>
                <input disabled type="checkbox" name="isBus" id="isBus" className='m-2 w-1/12 border-gray-300'/>
                <input disabled type="text" name="msb" id="msb" className='border rounded px-2 py-0.5 m-2 w-2/12 border-gray-300'/>
                <input disabled type="text" name="lsb" id="lsb" className='border rounded px-2 py-0.5 m-2 w-2/12 border-gray-300'/>
            </div>
        )
    }
    else{
        return (
            <div className='flex flex-row mx-9 my-1'>
                <input type="text" name="portName" id="portName" placeholder={portPlaceholder}
                value={portProperties.portName}
                onChange={e => onChange(portProperties.id, e)}
                className='border rounded w-6/12 m-2 px-2 py-0.5'
                />
                <select name="direction" id="direction" className='border rounded m-2 w-1/12'
                value={portProperties.direction}
                onChange={e => onChange(portProperties.id, e)}>
                    <option value="in">in</option>
                    <option value="out">out</option>
                </select>
                <input type="checkbox" name="isBus" id="isBus" className='m-2 w-1/12' checked={portProperties.isBus} onChange={e => onChange(portProperties.id, e)}/>
                <input type="number" name="msb" id="msb" className='border rounded px-2 py-0.5 m-2 w-2/12 disabled:border-gray-400' value={portProperties.msb} onChange={e => onChange(portProperties.id, e)}
                disabled={portProperties.isBus === false ? true : false}
                />
                <input type="number" name="lsb" id="lsb" className='border rounded px-2 py-0.5 m-2 w-2/12 disabled:border-gray-400' value={portProperties.lsb} onChange={e => onChange(portProperties.id, e)}
                disabled={portProperties.isBus === false ? true : false}
                />
            </div>
        )
    }
}

export default Port