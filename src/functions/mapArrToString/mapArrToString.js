const mapArrToString = (arr) => {
	return (
		arr.filter(item => Number.isInteger(item)).map(item => item.toString())
	)
};

// export default mapArrToString;
module.exports = mapArrToString