import Image from "next/image";

const fetchcomments = () => {
    return fetch(process.env.NEXTAUTH_URL + "/api/hello", {
       
    })
    .then(res => res.json())
}

export default async function Users({params}){
    const { id } = params;
    const comments = await fetchcomments()
    

    return(
        <ul style={{ fontSize: '12px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h1>Id: {comment.id}</h1>
                    <h2>{comment.name}</h2>
                    <h2>{comment.email}</h2>
                    <Image src={comment.image}  width={100} height={100}/>
                </li>
            ))}
        </ul>
    )
}