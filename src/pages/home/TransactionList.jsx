import React from "react";
import { useFirestore } from "../../hooks/useFirestore";

import styles from "./Home.module.css";

const TransactionList = ({ transactions }) => {
	const { deleteDocument, res } = useFirestore("transactions");
	console.log(res);
	const handleClick = (id) => {
		deleteDocument(id);
	};

	return (
		<ul className={styles.transactions}>
			{transactions.map((transaction) => (
				<li key={transaction.id}>
					<p className={styles.name}>{transaction.name}</p>
					<p className={styles.amount}>$ {transaction.amount}</p>
					<button
						className="btn"
						onClick={() => handleClick(transaction.id)}
					>
						x
					</button>
				</li>
			))}
		</ul>
	);
};

export default TransactionList;
