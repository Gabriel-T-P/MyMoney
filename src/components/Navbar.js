import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

// Style
import styles from './Navbar.module.css'

export default function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  return (

    <nav className={styles.navbar}>

      <ul>
        <li className={styles.title}>myMoney</li>

        {!user && (
          <>
            <li> <Link to={'/login'}> Entrar</Link> </li>
            <li> <Link to={'/signup'}> Cadastrar </Link> </li>
          </>
        )}

        {user && (
          <>
            <li>Bem vindo, {user.displayName} </li>
            <li>
              <button className="btn" onClick={logout}>Sair</button>
            </li>
          </>
        )}

      </ul>

    </nav>
  )
}
