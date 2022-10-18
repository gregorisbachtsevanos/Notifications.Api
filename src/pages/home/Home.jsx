import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Home = () => {
	const { user } = useAuthContext();
	const { error, isPending, transactions } = useCollection('transactions');

	return (
		<div className={styles.container}>
			<div className={styles.content}>
				{isPending && <span className={styles.loading}>loading...</span>}
				{error ? (
					<span className={styles.error}>{error}</span>
				) : (
					<TransactionList transactions={transactions} />
				)}
			</div>
			<div className={styles.sidebar}>
				<TransactionForm uid={user.uid} />
			</div>
		</div>
	);
};

export default Home;
