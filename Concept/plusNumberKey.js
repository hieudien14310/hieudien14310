const keyAmount = {
	425: '12333',
	531: '1'
}
console.log(Object.values(keyAmount).reduce((curr, prev) => Number(curr) + Number(prev), 0));
