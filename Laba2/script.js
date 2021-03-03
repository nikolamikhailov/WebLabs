function sum(a) {
	let currentSum = a;

	return function f(b) {
		return currentSum += b;
	}
}

function filter(arr, func){
	res = [];
	for (i=0; i<arr.length; i++){
		if (func(arr[i]) == true) res.push(arr[i]);
	}
	return res;
}