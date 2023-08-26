import { lazy, Suspense } from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';

import Layout from './Layout/Layout'
import { LoginPage } from './pages/loginPage/LoginPage';

const HomePage = lazy(() => import('./pages/HomePage'))

function App() {
  return (

	<Routes>
		<Route path='/' element={<Layout />}>
		<Route index element={<HomePage />}/>
		
		<Route />
		<Route />
		
		</Route>
		
		<Route path='/login' element={
			<Suspense>
						 {/* <PublicRoute> */}
							<LoginPage />
						{/* </PublicRoute>  */}
			</Suspense>
			}/>
		<Route path='/signUp' element={
			<Suspense>
					{/* <PublicRoute>
						<RegistrationPage />
					</PublicRoute> */}
			</Suspense>
			}/>
	</Routes>
  )
  
}

export default App;
