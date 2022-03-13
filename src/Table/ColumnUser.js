import "./ColumnUser.css"
import {useState} from "react"

export default function ColumnUser ({user}) {

    const [day, setDay] = useState("")
    const [work, setWork] = useState("")

    return(
        <tr>
            <th>{user.name}</th>
            <td id={user.name + 1}></td>
            <td id={user.name + 2}></td>
            <td id={user.name + 3}></td>
            <td id={user.name + 4}></td>
            <td id={user.name + 5}></td>
            <td id={user.name + 6}></td>
            <td id={user.name + 7}></td>
            <td id={user.name + 8}></td>
            <td id={user.name + 9}></td>
            <td id={user.name + 10}></td>
            <td id={user.name + 11}></td>
            <td id={user.name + 12}></td>
            <td id={user.name + 13}></td>
            <td id={user.name + 14}></td>
            <td id={user.name + 15}></td>
            <td id={user.name + 16}></td>
            <td id={user.name + 17}></td>
            <td id={user.name + 18}></td>
            <td id={user.name + 19}></td>
            <td id={user.name + 20}></td>
            <td id={user.name + 21}></td>
            <td id={user.name + 22}></td>
            <td id={user.name + 23}></td>
            <td id={user.name + 24}></td>
            <td id={user.name + 25}></td>
            <td id={user.name + 26}></td>
            <td id={user.name + 27}></td>
            <td id={user.name + 28}></td>
            <td id={user.name + 29}></td>
            <td id={user.name + 30}></td>
            <td id={user.name + 31}></td>
            <td>
                <input className="addDay" value={day} type="text" onChange={(e)=>{
                    setDay(e.target.value)
                }}/>
            </td>
            <td>
                <input className="addDay" value={work} type="text" placeholder={user.name} onChange={(e)=>{
                    setWork(e.target.value)
                }}/>
            </td>

        </tr>
    )

}