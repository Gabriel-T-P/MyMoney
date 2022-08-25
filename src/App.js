import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'

// Components
import Home from './pages/home/Home'
import Signup from './pages/signup/Signup'
import Login from './pages/login/Login'
import Navbar from './components/Navbar';


function App() {
  const { authIsReady, user } = useAuthContext()

  return (

    < div className="App" >

      {authIsReady && (

        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path='/' element={user ? <Home /> : <Navigate to='/login' />} />
            <Route path='/signup' element={user ? <Navigate to='/' /> : <Signup />} />
            <Route path='/login' element={user ? <Navigate to='/' /> : <Login />} />
          </Routes>

        </BrowserRouter>

      )}

    </div >
  );
}

export default App
