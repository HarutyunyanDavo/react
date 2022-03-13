import "./MainTable.css"
import {useState, useEffect} from "react"
import ColumnUser from "./ColumnUser"

export default function MainTable () {

    const [users, setUsers] =  useState([])

    useEffect(() => {
        fetch("https://protected-hollows-66291.herokuapp.com/events").then((resp) => resp.json()).then((data) =>{
        setUsers(data)
    })
    }, [])

    return (
        <>

            {
                users.map((user) => {
                    return <ColumnUser user={user}
                                    key={user._id}
                    />
                })
            }

        </>
    )

}