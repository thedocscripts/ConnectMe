import Link from "next/link"
import styles from '@/styles/Navbar.module.css'

const links = [
    {
        label: "Inicio",
        route: "/"
    },
    {
        label: "Sobre Nosotros",
        route: "/about"
    },
    {
        label: "Sobre Nosotros",
        route: "/about"
    },
    {
        label: "Sobre Nosotros",
        route: "/about"
    },
]



export default function Navbar(){
    return(<div className={styles.container}>
        <div className={styles.hijos}>
            izquierda
        </div>
        <div className={styles.hijos}>
            <ul  className={styles.lielem}>
                {links.map((map)=>(
                    <Link key={map.label} href={map.route} className={styles.litext}>
                        <li>
                            {map.label}
                        </li>
                    </Link>
                ))}
            </ul>
        </div>
        <div className={styles.hijos}>
            derecha
        </div>
        
    </div>)
}