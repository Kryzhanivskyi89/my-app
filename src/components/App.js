import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import { PrivateRoute } from '../route/PrivateRoute';
import RestrictedRoute from '../route/RestrictedRoute';
import Layout from '../components/Layout/Layout'
import AuthPage from '../pages/authPage/AuthPage';
import Calendar from '../pages/Calendar/Calendar.tsx';
import { Chat } from '../pages/Chat';
import { Todo } from '../pages/Todo';
import MusicPlayer from '../pages/musicPlayer/MusicPlayer';
import Social from '../pages/social/Social';
import Email from '../pages/email/Email';
const HomePage = lazy(() => import('../pages/HomePage'))


function App() {
  	return (
		<Routes>
			<Route path="/auth/:id"element={<RestrictedRoute component={<AuthPage /> } />}/>
			
			<Route path='/' element={<PrivateRoute component={<Layout />} />}>
				<Route index element={<HomePage />}/>
				<Route path='/calendar' element={
					<DndProvider backend={HTML5Backend}>
						<Calendar />
					</DndProvider>}/>
				<Route />
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
