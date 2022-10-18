import { useEffect, useState } from 'react';
import { projectFirestore } from '../../firebase/config';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useCollection } from '../../hooks/useCollection';
import styles from './Home.module.css';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';

const Home = () => {
	const { user } = useAuthContext();
	// const [error, setError] = useState(false);
	// const [isPending, setIsPending] = useState(false);
	// const [transactions, setTransactions] = useState([]);
	const { error, isPending, transactions } = useCollection('transactions');

	// useEffect(() => {
	// 	setIsPending(true);

	// 	const getTransaction = async () => {
	// 		projectFirestore.collection('transactions').onSnapshot(
	// 			(snapshot) => {
	// 				if (snapshot.empty) {
	// 					setError('No transactions tom load');
	// 					setIsPending(false);
	// 				} else {
	// 					let result = [];
	// 					snapshot.docs.forEach((doc) => {
	// 						result.push({ id: doc.id, ...doc.data() });
	// 					});
	// 					setTransactions(result);
	// 					setIsPending(false);
	// 					setError(null);
	// 				}
	// 			},
	// 			(err) => {
	// 				setError(err.message);
	// 				setIsPending(false);
	// 			}
	// 		);
	// 	};

	// 	getTransaction();
	// }, []);
	// console.log(transaction)

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
