import { useEffect } from 'react'
import { useRouter } from 'expo-router'

export default function Index() {
  const router = useRouter();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false;

      if (isLoggedIn) {
        router.replace('/tabs/Home')
      } else {
        router.replace('/stacks/Login')
      }
    }, 1500)
    
    return () => clearTimeout(timeout);
  }, [])

  return null;
}