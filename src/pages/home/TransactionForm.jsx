import { Fragment, useEffect, useState } from 'react';
import { useFirestore } from '../../hooks/useFirestore';

const TransactionForm = ({ uid }) => {
	const [name, setName] = useState('');
	const [amount, setAmount] = useState('');
	const { addDocument, res } = useFirestore('transactions');

	const handleSubmit = (e) => {
		e.preventDefault();
		addDocument({ uid, name, amount });
	};

	// reset the form fields
	useEffect(() => {
		if (res.success) {
			setName('');
			setAmount('');
		}
	}, [res.success]);

	return (
		<Fragment>
			<h3>Add a Transaction</h3>
			<form onSubmit={handleSubmit}>
				<label>
					<span>Transaction name:</span>
					<input
						type="text"
						required
						onChange={(e) => setName(e.target.value)}
						value={name}
					/>
				</label>
				<label>
					<span>Amount ($):</span>
					<input
						type="number"
						required
						onChange={(e) => setAmount(e.target.value)}
						value={amount}
					/>
				</label>
				<button>Add Transaction</button>
			</form>
		</Fragment>
	);
};

export default TransactionForm;
