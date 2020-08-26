import React from 'react'

function header(){
    return(
        <div className="header relative">
            <div className="header-bg relative">
                <div className="header-filter absolute">
                </div>
            </div>
            <div className="header-content-container absolute">
                <h1 className="mont green">Tu aliado en</h1>
                <h1 className="mont dark-green"><b>Seguridad</b></h1>
            </div>
        </div>
    )
}

export default header