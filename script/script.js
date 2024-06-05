// function solution(queries) {
// 	const container = [];
// 	const results = [];

// 	for (let i = 0; i < queries.length; i++) {
// 		const command = queries[i][0].toUpperCase();
// 		const value = queries[i][1];

// 		if (command === "ADD") {
// 			container.push(value);
// 			results.push("");
// 		} else if (command === "EXISTS") {
// 			const exists = container.includes(value).toString();
// 			results.push(exists);
// 		} else if (command === "REMOVE") {
// 			const index = container.indexOf(value);
// 			if (index !== -1) {
// 				container.splice(index, 1);
// 				results.push("true");
// 			} else {
// 				results.push("false");
// 			}

// 		} else if (command === "GET_NEXT") {
// 			let sortedArray = container.sort((a, b) => { return a - b })
// 			let outputValue = ""
// 			sortedArray.find(el => {
// 				if (value < el) {
// 					outputValue = el
// 					return true;
// 				}
// 				return false;
// 			})
// 			results.push(outputValue)
// 		}
// 	}

// 	return results;
// }

// const queries = [
// 	["ADD", "1"],
// 	["ADD", "2"],
// 	["ADD", "2"],
// 	["ADD", "4"],
// 	["GET_NEXT", "1"],
// 	["GET_NEXT", "2"],
// 	["GET_NEXT", "3"],
// 	["GET_NEXT", "4"],
// 	["REMOVE", "2"],
// 	["GET_NEXT", "1"],
// 	["GET_NEXT", "2"],
// 	["GET_NEXT", "3"],
// 	["GET_NEXT", "4"]
// ]
// console.log(solution(queries));


function solution(queries) {
    const accounts = {}; // Object to store account balances
    const results = [];  // Array to store results of each query

    for (let query of queries) {
        const operation = query[0];
        const acc_id = query[2];
        const amt = query[3] ? parseInt(query[3]) : 0;

        if (operation === "CREATE_ACCOUNT") {
            if (accounts.hasOwnProperty(acc_id)) {
                results.push("false");
            } else {
                accounts[acc_id] = 0; // Initialize account with 0 balance
                results.push("true");
            }
        } else if (operation === "DEPOSIT") {
            if (accounts.hasOwnProperty(acc_id)) {
                accounts[acc_id] += amt;
				console.log(accounts[acc_id].toString());	
                results.push(accounts[acc_id].toString());
            } else {
                results.push("");
            }
        } else if (operation === "PAY") {
            if (accounts.hasOwnProperty(acc_id)) {
                if (accounts[acc_id] >= amt) {
                    accounts[acc_id] -= amt;
                    results.push(accounts[acc_id].toString());
                } else {
                    results.push(""); // Insufficient funds
                }
            } else {
                results.push(""); // Account does not exist
            }
        } else {
            results.push("");
        }
    }
    return results;
}

// Example usage:
const queries = [
    ["CREATE_ACCOUNT", "1", "account1"],
    ["CREATE_ACCOUNT", "2", "account1"],
    ["CREATE_ACCOUNT", "3", "account2"],
    ["DEPOSIT", "4", "non-existing", "2700"],
    ["DEPOSIT", "5", "account1", "2700"],
    ["PAY", "6", "non-existing", "2700"],
    ["PAY", "7", "account1", "2701"],
    ["PAY", "8", "account1", "200"]
];

console.log(solution(queries)); // ["true", "false", "true", "", "2700", "", "", "2500"]



