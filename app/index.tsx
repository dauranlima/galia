import { useEffect } from 'react'
import { useRouter } from 'expo-router'
import Signup from './stacks/Signup'
export default function index() {


  const router = useRouter();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      const isLoggedIn = false;

      if (isLoggedIn) {
        router.navigate('/tabs/Home')
      } else {
        return <Signup />
      }


    }, 1500)
    return () => clearTimeout(timeout);
  }, [])
  return (
      <Signup />
  )



}