// src/hooks/useUserProfile.js
import { useEffect, useState } from 'react'
import supabase from '../../supabase/client'

export default function useUserProfile() {
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('fullname, avatar_url')
          .eq('id', user.id)
          .single()

        if (!error) setProfile(data)
      }
    }

    fetchProfile()
  }, [])

  return profile
}
