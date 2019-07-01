import React from 'react'

function Childcompo(props)
{
    return(
        <div>
                    <button onClick={()=>props.happar('my child name')}> Click for parrent</button>
        </div>
    )
}
export default Childcompo