import React from 'react'
import Listname from './Listname'

function Namelist(){

    const persons = [
        {
            id : 1,
            name : 'Davan',
            position : 'Opner'
        },
        {
            id : 2,
            name : 'Rohit',
            position : 'Opner'
        },
        {
            id : 3,
            name : 'Kholi',
            position : 'One down'
        }
    ]

    const nlist = persons.map(person =>  <Listname key={person.id} per={person}/>)

    return(
        <div>
        {nlist}
        </div>
    )
}
export default Namelist