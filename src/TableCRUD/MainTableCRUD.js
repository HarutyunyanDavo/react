import "./MainTableCRUD.css"


export default function MainTableCRUD({user}) {

    return(
        <tr>
            <th>{user.name}</th>
            <th>asd</th>
            <th>1</th>
            <th>
                <button onClick={()=>{
                    fetch(`https://protected-hollows-66291.herokuapp.com/events/${user._id}`,{
                        method: "DELETE"
                    })
                }}>X</button>
            </th>
        </tr>
    )

}