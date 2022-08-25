import { useEffect, useState, useRef } from "react"
import { projectFirestore } from "../firebase/config"

export const useCollection = (collection, _query, _orderBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //se não colocarmos um ref -> loop infinito no useEffect
  //_query é um array e ele é 'diferente' em cada chamada de função
  const query = useRef(_query).current
  const orderBy = useRef(_orderBy).current

  useEffect(() => {
    let ref = projectFirestore.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }

    if (orderBy) {
      ref = ref.orderBy(...orderBy)
    }

    const unsubscribe = ref.onSnapshot(snapshot => {
      let results = []
      snapshot.docs.forEach(doc => {
        results.push({ ...doc.data(), id: doc.id })
      });

      // update state
      setDocuments(results)
      setError(null)
    }, error => {
      console.log(error)
      setError('não foi possível encontrar os arquivos')
    })

    // unsubscribe on unmount
    return () => unsubscribe()

  }, [collection, query])

  return { documents, error }
}