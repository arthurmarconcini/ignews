import styles from './styles.module.scss'

import { FiX } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { signIn, signOut, useSession } from 'next-auth/react'

export function SignInButton() {
  const { data: session } = useSession()

  return session ? (
    <button className={styles.signInButton} type="button">
      <FaGithub color="#04D361" />
      {session.user.name}
      <FiX
        color="#737380"
        className={styles.closeIcon}
        onClick={() => signOut()}
      />
    </button>
  ) : (
    <button
      className={styles.signInButton}
      type="button"
      onClick={() => signIn('github')}
    >
      <FaGithub color="#EBA417" />
      Sign in with Github
    </button>
  )
}
