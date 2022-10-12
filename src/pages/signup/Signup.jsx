import React, { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';
import styles from './Signup.module.css';

const Signup = () => {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { signup, error, isPending } = useSignup()

	const handleSubmit = (e) => {
		e.preventDefault()
		signup(email, password, username)
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
			
			{isPending ? <button className='btn' disabled>loading</button> : <button className='btn'>SignUp</button>}
			{error && <p>{error}</p>}
		</form>
	);
};

export default Signup;
