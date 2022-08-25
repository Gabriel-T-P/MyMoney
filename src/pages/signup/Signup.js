import { useState } from 'react'
import { useSignup } from '../../hooks/useSignup'

// Styles
import styles from './Signup.module.css'

export default function Signup() {
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isPending, error } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password, displayName)
  }

  return (

    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Cadastrar</h2>

      <label>
        <span>nome de usuário:</span>
        <input
          type="text"
          onChange={(e) => setDisplayName(e.target.value)}
          value={displayName}
        />
      </label>

      <label>
        <span>email:</span>
        <input
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </label>

      <label>
        <span>senha:</span>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
      </label>

      {!isPending && <button className='btn'>Cadastrar</button>}
      {isPending && <button className='btn' disabled>Carregando</button>}
      {error && <p> {error} </p>}

    </form>
  )
}
