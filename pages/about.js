import { useUser } from '@auth0/nextjs-auth0/client';




export default function about() {
    const { user, error, isLoading } = useUser();
    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>{error.message}</div>;
    if (!user) return <h1>usuario no identificado</h1>
    return(
        <div>
        <h1>hola</h1>
        </div>
    )
}
