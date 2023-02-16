import { signIn, getCsrfToken, getProviders } from 'next-auth/react'
import Image from 'next/image'
import Header from '@/components/Header'
import styles from '@/styles/Signin.module.css'
import logopic from '@/public/images/Logo_Blanco.png'

const Signin = ({ csrfToken, providers }) => {
  return (
    <div style={{ overflow: 'hidden', position: 'relative' }}>
      <Header />
      <div className={styles.wrapper} />
      <div className={styles.content}>
        <div className={styles.cardWrapper}>
          <Image src={logopic} width="196px" height="64px" alt='App Logo' style={{ height: '85px', marginBottom: '20px' }} />
          <div className={styles.cardContent}>
           
            {providers &&
              Object.values(providers).map(provider => (
                <div key={provider.name} style={{ marginBottom: 0 }}>
                  <button onClick={() => signIn(provider.id)} >
                    Sign in with{' '} {provider.name}
                  </button>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src='/login_pattern.svg' alt='Pattern Background' layout='fill' className={styles.styledPattern} />
    </div>
  )
}

export default Signin

export async function getServerSideProps(context) {
  const providers = await getProviders()
 
  return {
    props: {
      providers
    },
  }
}