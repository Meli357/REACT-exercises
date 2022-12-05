import { useMemo } from "react"

const personList =[
    {name:"Lucia", age:21, id:1},
    {name:"Monica", age:16, id:2},
    {name:"Francesco", age:30, id:3},
    {name:"Alessandro", age:18, id:4},
    {name:"Stefania", age:24, id:5},
    {name:"Marco", age:17, id:6}
]

function filterAge(value){
    return value.filter(person=>person.age >=18)
}

export function FilteredList(){
    const filter = useMemo(() => 
    filterAge(personList),[personList])
    //  console.log(filter)
    return(<ul>{filter.map(person=>(<li key={person.id}>{person.name}</li>))}</ul>)
}

