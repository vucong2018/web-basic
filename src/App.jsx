import { Suspense, lazy } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
// pages
const Login = lazy(() => import('@pages/LoginPage'));
const App = () => {

  return (
    <>
      <Suspense fallback={<h1>HAHA</h1>}>
        <Routes>
          <Route path='/login' element={<Login></Login>}></Route>
          <Route path='/'></Route>
          <Route path='menu'></Route>
          <Route path='order'></Route>
          <Route></Route>
        </Routes>
      </Suspense>

    </>
  )
}

export default App
