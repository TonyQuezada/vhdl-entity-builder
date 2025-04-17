import '../App.css'

const Port = ( { portName="port_name", disabled=false } ) => {

    if(disabled === true){
        return (
            <div className='flex flex-row mx-9 my-1'>
                <input disabled type="text" name="port_name" id="port_name" placeholder={"+"}
                className='border rounded w-6/12 m-2 px-2 py-0.5 border-gray-300 text-gray-500'
                />
                <select disabled name="directionSelect" id="directionSelect"
                className='border rounded m-2 w-1/12 border-gray-300 text-gray-300'
                >
                    <option value="in">in</option>
                    <option value="out">out</option>
                </select>
                <input disabled type="checkbox" name="busCheckbox" id="busCheckbox" className='m-2 w-1/12 border-gray-300'/>
                <input disabled type="text" name="MSB" id="MSB" className='border rounded px-2 py-0.5 m-2 w-2/12 border-gray-300'/>
                <input disabled type="text" name="LSB" id="LSB" className='border rounded px-2 py-0.5 m-2 w-2/12 border-gray-300'/>
            </div>
        )
    }
    else{
        return (
            <div className='flex flex-row mx-9 my-1'>
                <input type="text" name="port_name" id="port_name" placeholder={portName}
                className='border rounded w-6/12 m-2 px-2 py-0.5'
                />
                <select name="directionSelect" id="directionSelect" className='border rounded m-2 w-1/12'>
                    <option value="in">in</option>
                    <option value="out">out</option>
                </select>
                <input type="checkbox" name="busCheckbox" id="busCheckbox" className='m-2 w-1/12'/>
                <input type="text" name="MSB" id="MSB" className='border rounded px-2 py-0.5 m-2 w-2/12'/>
                <input type="text" name="LSB" id="LSB" className='border rounded px-2 py-0.5 m-2 w-2/12'/>
            </div>
        )
    }
}

export default Port