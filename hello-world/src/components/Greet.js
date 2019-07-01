import React from 'react';

//function Greet()
//{
//    return <h1> Hellow GT! .....:) time to show </h1>
//}

const Greet = (props) => {

    console.log(props)
    return (
       <div>
           <h1> Hellow {props.name} super as {props.sname}</h1>
           {props.children}
       </div>
   )
}


export default Greet;