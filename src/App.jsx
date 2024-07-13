import {Header,Footer} from './components/index'
import { useState , useEffect } from 'react'
import { useDispatch } from 'react-redux'
import authService from './appWrite/auth'
import {login , logout} from './store/authSlice'
import './App.css'

function App() {
  
  const [loading , setLoading] = useState(true)
  const dispatch = useDispatch();
  useEffect(()=> {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    }) // Sucessful user are present  use .then() 
    .finally(() => setLoading(false)) // Not sucessful user are not present use catch() or finally()
    // to clear sucessful or giving a error 
  },[])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-center bg-slate-400'>
     <div className='w-full block'>
      <Header/>
      <main>
       Todos: {/* outlet */}
      </main>
      <Footer/>
     </div>
    </div>
  ) : null
}

export default App
