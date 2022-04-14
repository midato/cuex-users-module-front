import { useEffect, useState } from "react"
import axiosClient from '../network/apiClient'

export const useFetch = (method, url, params, headers, keys) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const abortController = new AbortController()
    const signal = abortController.signal
    console.log(signal)

    const fetchData = async () => {
      setLoading(true)

      try {
        // const res = await fetch(url, { signal });
        const res = await axiosClient({
          method,
          url,
          data: params,
          headers,
          encryptKeys: keys
        })
        console.log(res)
        if (res.status !== 200) {
          let err = new Error("Error en la petición Fetch")
          err.status = res.status || "00"
          err.statusText = res.statusText || "Ocurrió un error"
          throw err
        }
        // const json = await res.data

        if (!signal.aborted) {
          setData(res.data)
          setError(null)
        }
      } catch (error) {
        console.log(error)
        if (!signal.aborted) {
          setData(null)
          setError(error)
        }
      } finally {
        if (!signal.aborted) {
          setLoading(false)
        }
      }
    }

    fetchData().then(_ => console.log('Executed hook!!'))

    return () => abortController.abort()
  }, [url])
  console.log(data)
  return { data, error, loading }
}
