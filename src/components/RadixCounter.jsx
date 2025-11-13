import { useState } from "react"

const RadixCounter = () => {

    const [value, setValue] = useState(0)

    return (
        <div className="border border-black border-2 rounded-3 m-auto mt-3 py-3 px-5" style={{ width: 'fit-content' }}>
            <h1 className="text-center fw-bold">RADIX COUNTER</h1>

            <div className="d-flex justify-content-between text-center gap-3 mt-3">
                <div> 
                    <div className="fw-bold">[HEX]</div> 
                    <div className="font-monospace">{ value.toString(16).toUpperCase().padStart(3, '0') }</div> 
                </div>
                <div> 
                    <div className="fw-bold">[DEC]</div> 
                    <div className="font-monospace text-primary fw-bold">{ value.toString(10).padStart(4, '0') }</div> 
                </div>
                <div> 
                    <div className="fw-bold">[OCT]</div> 
                    <div className="font-monospace">{ value.toString(8).padStart(4, '0') }</div> 
                </div>
                <div> 
                    <div className="fw-bold">[BIN]</div> 
                    <div className="font-monospace">{ value.toString(2).padStart(12, '0') }</div> 
                </div>
            </div>

            <div className="mt-3 d-flex justify-content-around gap-4">
                <button className="btn btn-danger px-4" onClick={ () => ( value <= 0 ? setValue(4095) : setValue( p => p - 1) ) }>&minus;</button>
                <button className="btn btn-secondary px-5" onClick={ () => ( setValue(0) )}>RESET</button>
                <button className="btn btn-success px-4" onClick={ () => ( value >= 4095 ? setValue(0) : setValue( p => p + 1) ) }>+</button>
            </div>
        </div>
    )
}

export default RadixCounter