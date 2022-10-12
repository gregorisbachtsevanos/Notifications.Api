import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(username, email, password)
	}

	return (
		<form className={styles['signup-form']} onSubmit={handleSubmit}>
			<h2>Signup</h2>
			<label>
				<span>username:</span>
				<input
					type="text"
					onChange={(e) => setUsername(e.target.value)}
					value={username}
					required
				/>
			</label>
			<label>
				<span>email:</span>
				<input
					type="text"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					required
				/>
			</label>
			<label>
				<span>password:</span>
				<input
					type="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					required
				/>
			</label>
			<button className='btn'>SignUp</button>
		</form>
	);
};

export default Signup;
