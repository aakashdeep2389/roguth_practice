function solution(queries) {
	const container = [];
	const results = [];

	for (let i = 0; i < queries.length; i++) {
		const command = queries[i][0].toUpperCase();
		const value = queries[i][1];

		if (command === "ADD") {
			container.push(value);
			results.push("");
		} else if (command === "EXISTS") {
			const exists = container.includes(value).toString();
			results.push(exists);
		} else if (command === "REMOVE") {
			const index = container.indexOf(value);
			if (index !== -1) {
				container.splice(index, 1);
				results.push("true");
			} else {
				results.push("false");
			}

		} else if (command === "GET_NEXT") {
			let sortedArray = container.sort((a, b) => { return a - b })
			let outputValue = ""
			sortedArray.find(el => {
				if (value < el) {
					outputValue = el
					return true;
				}
				return false;
			})
			results.push(outputValue)
		}
	}

	return results;
}

const queries = [
	["ADD", "1"],
	["ADD", "2"],
	["ADD", "2"],
	["ADD", "4"],
	["GET_NEXT", "1"],
	["GET_NEXT", "2"],
	["GET_NEXT", "3"],
	["GET_NEXT", "4"],
	["REMOVE", "2"],
	["GET_NEXT", "1"],
	["GET_NEXT", "2"],
	["GET_NEXT", "3"],
	["GET_NEXT", "4"]
]
console.log(solution(queries));




