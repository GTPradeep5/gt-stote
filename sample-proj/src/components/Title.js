import React from 'react'

export default function Title({name,title}) {
    return (
        <div className='row mt-0' >
            <div className='col-11 mx-auto my-2 mt-0 text-title text-center ' style={cam}>
                <h1 className='text-capitalize font-weight-bold'> {name} <strong className='text-blue'>{title}</strong>                
                </h1>
            </div>
        </div>
    )
}

const cam ={
    color:'yellow',
}
