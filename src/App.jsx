import { Suspense, lazy } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { DemoLayout } from '@pages/DemoLayout';
// pages
const Login = lazy(() => import('@pages/LoginPage'));
const App = () => {

  return (
    <>
      <Suspense fallback={<h1>HAHA</h1>}>
        <Routes>
          <Route path='/table-demo' element={<DemoLayout></DemoLayout>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='/login/group-3/' element={<Login></Login>}></Route>
          <Route path='/' element={<Login></Login>}></Route>
          <Route path='menu'></Route>
          <Route path='order'></Route>
          <Route></Route>
        </Routes>
      </Suspense>

    </>
  );
};

export default App;
