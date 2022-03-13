import "./TableCRUD.css"
import {useState, useEffect} from "react";
import MainTableCRUD from "./MainTableCRUD";

export default function TableCRUD () {

    const [users, setUsers] = useState([])
    const [name, setName] = useState("")
    const [money, setMoney] = useState(0)

    useEffect(() => {
        fetch("https://protected-hollows-66291.herokuapp.com/events").then((resp) => resp.json()).then((data) =>{
        setUsers(data)
    })
    }, [])

    return (
        <table border="3" id="tableCRUD">
            <tbody>

                <tr>
                    <th>Имя</th>
                    <th>Замеси</th>
                    <th>Зарплата</th>
                    <th>Удалить</th>
                </tr>

                {
                    users.map((user) => {
                        return <MainTableCRUD user={user}
                                                key={user._id}
                        />
                    })
                }

                <tr>
                    <th>
                        <button id="addTodo" onClick={()=>{
                            if(name && money) {
                                fetch("https://protected-hollows-66291.herokuapp.com/events",{
                                    method: "POST",
                                    headers:{
                                        'Content-Type' : 'application/json'
                                    },
                                    body: JSON.stringify({
                                        name,
                                        money: +money,
                                        days: [],
                                        process: true
                                    })
                                })
                            }
                        }}>Добавить</button>
                    </th>
                    <th>
                        <input type="text" placeholder="Имя" value={name} onChange={(e) => {
                            setName(e.target.value)
                        }}/>
                    </th>
                    <th>
                        <input type="number" placeholder="Зарплата" value={money} onChange={(e) => {
                            setMoney(e.target.value)
                        }}/>
                    </th>

                </tr>

            </tbody>
        </table>
    )

}