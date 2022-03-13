
export default function AddWork (id,day, work) {

    fetch(`https://protected-hollows-66291.herokuapp.com/events/${id}`,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            day,
            work
        })
    })

}