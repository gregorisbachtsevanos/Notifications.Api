import { useReducer, useEffect, useState } from 'react';
import { projectFirestore, timestamp } from '../firebase/config';

let initialState = {
	document: null,
	isPending: false,
	error: null,
	success: null,
};

const firestoreReducer = (state, action) => {
	switch (action.type) {
		case 'IS_PENDING':
			return {
				document: null,
				isPending: true,
				error: null,
				success: false,
			};
		case 'ADDED_DOCUMENT':
			return {
				document: action.payload,
				isPending: false,
				error: null,
				success: true,
			};
		case 'ERROR':
			return {
				document: null,
				isPending: false,
				error: action.payload,
				success: false,
			};
		default:
			return state;
	}
};

export const useFirestore = (collection) => {
	const [res, dispatch] = useReducer(firestoreReducer, initialState);
	const [isCancelled, setIsCancelled] = useState(false);

	// collection ref
	const ref = projectFirestore.collection(collection);

	// dispatch if not cancelled
	const dispatchIfNotCancelled = (action) => {
		if (!isCancelled) dispatch(action);
	};

	// add document
	const addDocument = async (doc) => {
		dispatch({ type: 'IS_PENDING' });

		try {
            const createdAt = timestamp.fromDate(new Date())
			const addedDocument = await ref.add({...doc, createdAt});
			dispatchIfNotCancelled({
				type: 'ADDED_DOCUMENT',
				payload: addedDocument,
			});
		} catch (error) {
			dispatchIfNotCancelled({ type: 'ERROR', payload: error.message });
		}
	};

	// delete document
	const deleteDocument = (id) => {};

	useEffect(() => {
		return () => setIsCancelled(true);
	}, []);

	return { addDocument, deleteDocument, res };
};
