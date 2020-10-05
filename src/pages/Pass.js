import React, {useState, useContext} from 'react'

export const Pass = () => {
    const [value, setValue] = useState('')

    const generatePass = () => {
        console.log('Pass');
    }

    return (
        <div className="row">
            <div className="col-xs-12 col-md-12 text-center">
                <button 
                    type="button" 
                    className="btn btn-primary"
                    onClick={generatePass}
                >
                    Generate Password
                </button>
            </div>
        </div>
    )
}