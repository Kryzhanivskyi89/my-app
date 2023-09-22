import { lazy, Suspense } from 'react'
// import './App.css';
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../route/PrivateRoute';
import RestrictedRoute from '../route/RestrictedRoute';
import AuthPage from './pages/authPage/AuthPage';
import Layout from './Layout/Layout'
import { Chat } from './pages/Chat';
const HomePage = lazy(() => import('./pages/HomePage'))


function App() {
  return (

	<Routes>
		<Route path="/auth/:id"
			element={<RestrictedRoute component={<AuthPage />} />}
		/>
		
			<Route path='/' element={
			//   <PrivateRoute component={
				  <Layout />
			//   } />
			  }>
			<Route index element={<HomePage />}/>
			
			<Route path='/chat' element={<Chat />}/>
			<Route />
		
		</Route>
		
		
	</Routes>
  )
}

export default App;
