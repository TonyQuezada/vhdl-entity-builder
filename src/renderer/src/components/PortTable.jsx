import '../App.css'
import Port from "./Port"

const PortTable = () => {

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
                <Port/>
                <Port/>
                <Port/>
                <Port disabled={true} />
            </form>
        </>

    )

}

export default PortTable