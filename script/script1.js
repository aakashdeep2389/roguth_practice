function solution(queries) {
    const accounts = {}
    const transactions = {}
    const results = []

    for (let query of queries) {
        const operation = query[0];
        const timestamp = query[1];
        const acc_id = query[2];
        const amt = query[3] ? parseInt(query[3]) : 0;

        if (operation === "CREATE_ACCOUNT") {
            if (accounts.hasOwnProperty(acc_id)) {
                results.push("false");
            } else {
                accounts[acc_id] = 0
                transactions[acc_id] = 0
                results.push("true");
            }
        } else if (operation === "DEPOSIT") {
            if (accounts.hasOwnProperty(acc_id)) {
                accounts[acc_id] += amt;
                transactions[acc_id] += amt
                results.push(accounts[acc_id].toString());
            } else {
                results.push("");
            }
        } else if (operation === "PAY") {
            if (accounts.hasOwnProperty(acc_id)) {
                if (accounts[acc_id] >= amt) {
                    accounts[acc_id] -= amt;
                    transactions[acc_id] += amt
                    results.push(accounts[acc_id].toString());
                } else {
                    results.push("")
                }
            } else {
                results.push("")
            }
        } else if (operation === "TOP_ACTIVITY") {
            const n = parseInt(acc_id)
            // const sortedAccounts = Object.keys(transactions)
            //     .map(id => ({ id, value: transactions[id] }))
            //     .sort((a, b) => {
            //         if (b.value === a.value) {
            //             return a.id- b.id;
            //         }
            //         return b.value - a.value;
            //     })
            //     .slice(0, n)
            //     .map(account => `${account.id}(${account.value})`);
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

// Example usage:
const queries = [
    ["CREATE_ACCOUNT", "1", "account1"],
    ["CREATE_ACCOUNT", "2", "account2"],
    ["CREATE_ACCOUNT", "3", "account3"],
    ["DEPOSIT", "4", "account1", "2000"],
    ["DEPOSIT", "5", "account2", "3000"],
    ["DEPOSIT", "6", "account3", "4000"],
    ["TOP_ACTIVITY", "7", "3"],
    ["PAY", "8", "account1", "1500"],
    ["PAY", "9", "account2", "250"],
    ["DEPOSIT", "10", "account3", "250"],
    ["TOP_ACTIVITY", "11", "3"]
];

console.log(solution(queries)); // ["true", "true", "true", "2000", "3000", "4000", "account3(4000), account2(3000), account1(2000)", "500", "2750", "4250", "account3(4250), account1(3500), account2(3250)"]
