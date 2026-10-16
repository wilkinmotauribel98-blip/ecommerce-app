import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);
  const [attempt, setAttempt] = useState(0)
  useEffect(()=>{
    setLoading(true);
    const abortController = new AbortController();
    setError(null)
    fetch(url, { signal: abortController.signal })
    .then((res)=>{
      if(!res.ok) throw new Error(`HTTP ${res.status}`)
      return res.json();
    })
    .then(d => setData(d))
    .catch((err)=>{
      if(err.name !== 'AbortError') setError(err)
    })
    .finally(() => { if (!abortController.signal.aborted) setLoading(false)} )

    return ()=> abortController.abort();

  }, [url, attempt])

  
  return { error, data, loading, retry: ()=> setAttempt(n => n + 1)};
}