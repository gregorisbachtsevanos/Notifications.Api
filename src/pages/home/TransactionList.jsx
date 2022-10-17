import React from 'react';

const TransactionList = ({ transactions }) => {
	return (
		<div>
			{transactions.map((transaction) => {
				return (
               <dir key={transaction.id}>
                  <h2>{transaction.name}</h2>
               </dir>
            )
			})}
		</div>
	);
};

export default TransactionList;
