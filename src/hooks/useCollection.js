import { useEffect, useRef, useState } from 'react';
import { projectFirestore } from '../firebase/config';

export const useCollection = (collection, _query) => {
	const [error, setError] = useState(false);
	const [isPending, setIsPending] = useState(false);
	const [transactions, setTransactions] = useState([]);

	//! if we don't use useRef --> infinite loop in useEffect
	//! _query is an array and is 'different' on every call
	const query = useRef(_query).current

	useEffect(() => {
		setIsPending(true);

		let ref = projectFirestore.collection(collection)

		if (query) ref = ref.where(...query).orderBy("createdAt", 'desc');

		const unsub = ref.onSnapshot(
			(snapshot) => {
				if (snapshot.empty) {
					setError('No transactions to load');
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
	}, [collection, query]);

	return { error, isPending, transactions };
};
