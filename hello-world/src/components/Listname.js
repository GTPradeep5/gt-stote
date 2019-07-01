import React from 'react'

function Listname(props){
    return(
        <h2>{props.per.id} belongs to the name {props.per.name} role {props.per.position}</h2>
    )
}
export default Listname