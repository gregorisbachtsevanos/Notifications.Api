import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../hooks/useAuthContext.js';
import { useLogout } from '../hooks/useLogout';
import styles from './NavBar.module.css';

const NavBar = () => {
	const { logout } = useLogout();
	const { user } = useAuthContext();
	console.log(user);
	return (
		<nav className={styles.navbar}>
			<ul>
				<li className={styles.title}>
					<Link to="/">NavBar</Link>
				</li>
				{!user ? (
					<Fragment>
						<li>
							<Link to="/login">Login</Link>
						</li>
						<li>
							<Link to="signup">Signup</Link>
						</li>
					</Fragment>
				) : (
					<Fragment>
						<li>hello, {user.displayName}</li>
						<li>
							<button className="btn" onClick={logout}>
								Logout
							</button>
						</li>
					</Fragment>
				)}
			</ul>
		</nav>
	);
};

export default NavBar;
