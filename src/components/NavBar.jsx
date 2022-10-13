import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout'
import styles from './NavBar.module.css';


const NavBar = () => {
	const { logout } = useLogout();

	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>
					<Link to="/">NavBar</Link>
				</li>
				<li>
					<Link to="/login">Login</Link>
				</li>
				<li>
					<Link to="signup">Signup</Link>
				</li>
				<li>
					<Link to="/" onClick={logout}>Logout</Link>
				</li>
			</ul>
		</nav>
	);
};

export default NavBar;
