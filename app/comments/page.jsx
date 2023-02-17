
import { useSession } from "next-auth/react";
import Image from "next/image";

const fetchcomments = () => {
    return fetch("https://jsonplaceholder.typicode.com/posts", {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Users(){
    
    
    const comments = await fetchcomments()
    

    return(
        <ul style={{ fontSize: '12px'}}>
            {comments.map(comment => (
                <li key={comment.id}>
                    <h2>{comment.title}</h2>
                    <h2>{comment.body}</h2>
                    {/* <Image src={comment.image}  width={100} height={100}/> */}
                </li>
            ))}
        </ul>
    )
}