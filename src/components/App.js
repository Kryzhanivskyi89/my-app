import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';

import { PrivateRoute } from '../route/PrivateRoute';
import RestrictedRoute from '../route/RestrictedRoute';
import Layout from '../components/Layout/Layout'
import AuthPage from '../pages/authPage/AuthPage';
import { Chat } from '../pages/Chat';
import Social from '../pages/social/Social';
import MusicPlayer from '../pages/musicPlayer/MusicPlayer';
import Email from '../pages/email/Email';
import { Todo } from '../pages/Todo';
const HomePage = lazy(() => import('../pages/HomePage'))


function App() {
  	return (
		<Routes>
			<Route path="/auth/:id"element={<RestrictedRoute component={<AuthPage /> } />}/>
			
			<Route path='/' element={<PrivateRoute component={<Layout />} />}>
				<Route index element={<HomePage />}/>
				<Route path='/chat' element={<Chat />}/><Route />
				<Route path='/todo' element={<Todo />}/><Route />
				<Route path='/music-player' element={<MusicPlayer />}/><Route />
				<Route path='/social' element={<Social />}/><Route />
				<Route path='/email' element={<Email />}/><Route />
			</Route>
		</Routes>
  	)
}

export default App;
