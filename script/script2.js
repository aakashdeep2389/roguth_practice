function solution(queries) {
    const accounts = {};
    const transactions = {};
    const pendingTransfers = {};
    const results = [];

    for (let query of queries) {
        const operation = query[0];
        const timestamp = query[1];
        const acc_id = query[2];
        const amt = query[3] ? parseInt(query[3]) : 0;

        if (operation === "CREATE_ACCOUNT") {
            if (accounts.hasOwnProperty(acc_id)) {
                results.push("false");
            } else {
                accounts[acc_id] = 0;
                transactions[acc_id] = 0;
                results.push("true");
            }
        } else if (operation === "DEPOSIT") {
            if (accounts.hasOwnProperty(acc_id)) {
                accounts[acc_id] += amt;
                transactions[acc_id] += amt;
                results.push(accounts[acc_id].toString());
            } else {
                results.push("");
            }
        } else if (operation === "PAY") {
            if (accounts.hasOwnProperty(acc_id)) {
                if (accounts[acc_id] >= amt) {
                    accounts[acc_id] -= amt;
                    transactions[acc_id] += amt;
                    results.push(accounts[acc_id].toString());
                } else {
                    results.push("");
                }
            } else {
                results.push("");
            }
        } else if (operation === "TRANSFER") {
            const target_acc_id = query[3];
            const transfer_id = `transfer${Object.keys(pendingTransfers).length + 1}`;
            if (acc_id === target_acc_id || !accounts.hasOwnProperty(acc_id) || !accounts.hasOwnProperty(target_acc_id) || accounts[acc_id] < amt) {
                results.push("");
            } else {
                pendingTransfers[transfer_id] = {
                    timestamp,
                    sourceAccountId: acc_id,
                    targetAccountId: target_acc_id,
                    amount: amt,
                    expiration: timestamp + 86400000
                };
                results.push(transfer_id);
            }
        } else if (operation === "ACCEPT_TRANSFER") {
            const transfer_id = query[3];
            if (!pendingTransfers.hasOwnProperty(transfer_id) || accounts[acc_id] < pendingTransfers[transfer_id].amount || acc_id !== pendingTransfers[transfer_id].targetAccountId || timestamp >= pendingTransfers[transfer_id].expiration) {
                results.push("false");
            } else {
                const transfer = pendingTransfers[transfer_id];
                delete pendingTransfers[transfer_id];
                accounts[transfer.sourceAccountId] -= transfer.amount;
                accounts[transfer.targetAccountId] += transfer.amount;
                transactions[transfer.sourceAccountId] += transfer.amount;
                transactions[transfer.targetAccountId] += transfer.amount;
                results.push("true");
            }
        } else if (operation === "TOP_ACTIVITY") {
            const n = parseInt(acc_id);
            const mappedAcc = Object.keys(transactions)
            .map(id => ({ id, value: transactions[id] }));
            const sortedAcc = mappedAcc.sort((a, b) => {
                if (b.value === a.value) {
                    return a.id.localeCompare(b.id);
                }
                return b.value - a.value;
            });
            const topNAcc = sortedAcc.slice(0, n);
            const formattedTopNAcc = topNAcc.map(account => `${account.id}(${account.value})`);
            results.push(formattedTopNAcc.join(', '));
        }
    }

    return results;
}
