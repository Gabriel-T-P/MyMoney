import { useState } from "react"
import { useFirestore } from "../../hooks/useFirestore"

export default function TransactionForm({ uid }) {
  const [name, setName] = useState('')
  const [amount, setAmount] = useState('')
  const { addDocument, response } = useFirestore('transactions')

  const handleSubmit = (e) => {
    e.preventDefault()
    addDocument({
      uid,
      name,
      amount
    })
    console.log(response.success)
    setAmount('')
    setName('')
  }

  return (
    <>
      <h3>Adcionar Transação</h3>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Nome da transação:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span>Valor da transação (R$):</span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </label>

        <button className="btn">Confirmar</button>

      </form>
    </>
  )
}
