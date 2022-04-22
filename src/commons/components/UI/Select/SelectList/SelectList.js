import React from 'react'
import { useFetch } from '../../../../hooks/useFetch'

const SelectList = ({ labelText, url, handleChange, token }) => {
  console.log({ labelText, url, handleChange, token })

  const headers = {
    "Authorization": `Bearer ${token}`,
    "Accept": "application/json"
  }

  const { data, error, loading } = useFetch('get', url, {}, headers, {})
  console.log(data)

  // const dispatch = useDispatch()
  // const result = useSelector(selectEntities)
  // console.log(result)

  /*useEffect(() => {
    dispatch(getAllEntities('get', url))
    return () => {
      console.log('unmounting object')
    }
  }, [])*/

  if (!data) return null

  if (error) {
    console.log('hubo un error: ', error)
    /*return (
      <Message
        msg={`Error ${error.status}: ${error.statusText}`}
        bgColor="#dc3545"
      />
    );*/
  }

  const col = "0"
  const id = `select_${labelText}`
  console.log(id)

  return (
    <div>
      <label htmlFor={id}>{labelText}</label>
      <select name={id}
              id={id}
              onChange={handleChange}
      >
        <option value="">Elige una opción</option>
        {data &&
          data.map((r) => (
            // <option key={r[0]} value={r.Entidad}>{r.Entidad}</option>
            // <option key={r[col]} value={r[col]}>{r[col]}</option>
            <option key={r[Object.keys(r)[0]]} value={r[Object.keys(r)[0]]}>{r[Object.keys(r)[0]]}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SelectList
