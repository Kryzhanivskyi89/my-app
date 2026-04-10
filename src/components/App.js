import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
import { DndProvider } from 'react-dnd';
import { useEffect } from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useDispatch } from 'react-redux';

import { currentThunk } from '../redux/auth/authOperations';
import { PrivateRoute } from '../route/PrivateRoute';
import RestrictedRoute from '../route/RestrictedRoute';
import Layout from '../components/Layout/Layout'
import AuthPage from '../pages/authPage/AuthPage';
import Calendar from '../pages/Calendar/Calendar.tsx';
import { Chat } from '../pages/Chat';
import { Todo } from '../pages/Todo';
import MusicPlayer from '../pages/musicPlayer/MusicPlayer';
import FormPage from '../pages/form/Form.jsx';
// import Email from '../pages/email/Email';
const HomePage = lazy(() => import('../pages/homePage/HomePage.jsx'))


function App() {
	 const dispatch = useDispatch();

    useEffect(() => {
        dispatch(currentThunk());
    }, [dispatch]);

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
				<Route path='/form' element={<FormPage />}/><Route />
				{/* <Route path='/email' element={<Email />}/><Route /> */}
			</Route>
		</Routes>
  	)
}

export default App;
