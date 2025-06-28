import React, { useEffect, useState } from 'react'
import { fetchUser } from '../api/mockAPI'

export default function useUser(userId) {
  const [user, setUser] = useState(null) 
  const [loading, setLoading] = useState(false) 
  const [error, setError] = useState(null)
  
  useEffect(() => {
    if(!userId){
        setUser(null)
        setLoading(false)
        setError(null)
        return
    }

    const fetchUserData = async () => {
        setLoading(true)
        setError(null)

        try{
            const userData = await fetchUser(userId)
            setUser(userData)
        } catch(e) {
            setError(e.message)
            setUser(null)
        }finally{
            setLoading(false)
        }
    }

    fetchUserData()
  },[userId])
  return { user, loading, error }
}
