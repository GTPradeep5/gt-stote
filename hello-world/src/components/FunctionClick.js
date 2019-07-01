// for function

import React from 'react'

function FunctionClick()
{
    const clicfun = () =>
    {
        console.log('button clicked')
    }
     return(
         <div>
             <button onClick={clicfun}> Click me</button>
         </div>
     )
}
//---> dont use parenthesis
export default FunctionClick