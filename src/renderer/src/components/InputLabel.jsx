import '../App.css'

const InputLabel = ( {labelText="empty", inputHint="empty"} ) => {

    return (
        <form className='flex flex-row mx-10'>
            <label htmlFor="inputField"
                className='m-2 font-semibold w-1/8 text-right'
            >{labelText}</label>
            
            <input type="text" name="inputField" id="inputField" placeholder={inputHint}
            className='border rounded m-1 p-1 w-7/8'
            />
        </form>

    )
}

export default InputLabel