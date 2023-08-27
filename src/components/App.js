import { lazy, Suspense } from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout'
// import { LoginPage } from './pages/authPage/AuthPage';
import Login from './pages/authPage/Login';
import Signup from './pages/authPage/Signup';
import { Contacts } from './pages/Contacts';
const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (

	<Routes>
		<Route path='/' element={<Layout />}>
			<Route index element={<HomePage />}/>
			
			<Route path='/contacts' element={<Contacts />}/>
			<Route />
		
		</Route>
		
		<Route path='/login' element={
			<Suspense>
				{/* <PublicRoute> */}
					<Login />
				{/* </PublicRoute>  */}
			</Suspense>
			}/>
		<Route path='/signUp' element={
			<Suspense>
				{/* <PublicRoute> */}
					<Signup />
				{/* </PublicRoute> */}
			</Suspense>
			}/>
	</Routes>
  )
  
}

export default App;
