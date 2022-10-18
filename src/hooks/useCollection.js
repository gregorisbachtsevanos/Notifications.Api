import { useEffect, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection) => {
	const [error, setError] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [transactions, setTransactions] = useState([]);

	useEffect(() => {
		setIsPending(true);

		const unsub = projectFirestore.collection('transactions').onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No transactions tom load');
					setIsPending(false);
				} else {
					let result = [];
					snapshot.docs.forEach((doc) => {
						result.push({ id: doc.id, ...doc.data() });
					});
					setTransactions(result);
					setIsPending(false);
					setError(null);
				}
			},
			(err) => {
				setError(err.message);
				setIsPending(false);
			}
		);
		return () => unsub();
	}, [collection]);

	return { error, isPending, transactions };
};
