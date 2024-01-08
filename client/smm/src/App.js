import React from 'react'
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import './styles/Login.css';
import './styles/Nav.css';
import './styles/Pages.css';
import AppNavbar from './subpages/AppNavbar';
import MainPage from './pages/MainPage';
import FeedPage from './pages/FeedPage';
import ProfilePage from './pages/profile/ProfilePage';
import PreferencesPage from './pages/profile/PreferencesPage';
import TopsPage from './pages/TopsPage';
import * as users_api from './network/users_api';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
import Redirect from './pages/Redirect';
import SignupPage from './pages/SignupPage';
import VipsPage from './pages/VipsPage';


function App() {

	const [ smm, setSmm ] = useState("pippo");
	const [ vips, setVips ] = useState([]);

	useEffect(() => {
		async function loadSmm() {
			try {
				//setSmm("smmPippo");
				const vips = await users_api.fetchVips("smmPippo");
				setVips(vips);
			} catch(error) {
				console.log(error);
			}
		}
		if(smm != null) {
			loadSmm();
		}
	}, [smm]);

	return (
		<BrowserRouter className="App vh-100 vw-100 d-flex flex-column">

			<div className="App vh-100 vw-100 d-flex flex-column">
				<AppNavbar smm={smm} setSmm={setSmm} />
				
				<Routes>
					{ smm === null ? 
						<>
							<Route
								path='/login'
								element={<LoginPage setSmm={setSmm} />}
							/>
							<Route
								path='/signup'
								element={<SignupPage setSmm={setSmm} />}
							/>
							<Route
								path='/*'
								element={<Redirect to='/login' />}
							/>
						</>
						:
						<>
							<Route
								path='/'
								element={<MainPage smm={smm} vips={vips} />}
								/>
							<Route
								path='/feed'
								element={<FeedPage vips={vips} />}
							/>
							<Route
								path='/tops'
								element={<TopsPage vips={vips} />}
							/>
							<Route
								path='/profile'
								element={<ProfilePage smm={smm} />}
							/>
							<Route
								path='/preferences'
								element={<PreferencesPage />}
							/>
							<Route
								path='/vips'
								element={<VipsPage vips={vips} />}
							/>
							<Route
								path='/*'
								element={<NotFoundPage />}
							/>
						</>
					}
				</Routes>
			</div>

		</BrowserRouter>
	);
}

export default App;
