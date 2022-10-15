import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { useAuthContext } from './hooks/useAuthContext';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';

function App() {
	const { authIsReady, user } = useAuthContext()
	return (
		<div className="App">
			{authIsReady && (
				<BrowserRouter>
					<NavBar />
					<Routes>
						<Route path="/">
							{user && <Navigate to='/login' />}
							{user && <Route index element={<Home />} />}
						</Route>
						{!user && <Route path="/login" element={<Login />} />}
						{!user && <Route path="/signup" element={<Signup />} />}
					</Routes>
				</BrowserRouter>
			)}
		</div>
	);
}

export default App;
