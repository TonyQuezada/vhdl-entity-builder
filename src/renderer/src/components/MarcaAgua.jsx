import terminal from '../../public/assets/terminal.png'

const MarcaAgua = () => {

    return(
        <div className="w-full h-30 mt-15">
            <div className="w-11/12 bg-gray-600 rounded h-1 justify-self-center"></div>
                <div className='flex flex-row-reverse justify-self-center w-11/12 items-center'>
                    <div className="text-gray-500 font-medium p-2">An App by <a href="https://github.com/TonyQuezada" target="_blank" className='underline'>Tony Quezada</a></div>
                    <a href="https://github.com/TonyQuezada/vhdl-entity-builder" target='_blank'><img src={terminal} width={"30px"} height={"30px"} alt="" srcset="" /></a>
                </div>
        </div>
    )

}

export default MarcaAgua