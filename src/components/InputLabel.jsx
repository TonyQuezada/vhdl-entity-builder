import '../App.css'

const InputLabel = ( {labelText="empty", inputHint="empty", onChange, value} ) => {

    return (
        <form className='flex flex-row mx-10'>
            <label htmlFor="inputField"
                className='m-2 font-semibold w-1/8 text-right'
            >{labelText}</label>
            
            <input type="text" name="inputField" id="inputField" placeholder={inputHint}
            onChange={e => onChange(e)}
            value={value}
            className='border rounded m-1 p-1 w-7/8'
            />
        </form>

    )
}

export default InputLabel