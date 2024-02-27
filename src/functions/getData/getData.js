const axios = require('axios');
// import axios from 'axios';
const mapArrToString = require('../mapArrToString/mapArrToString.js')
// import mapArrToString from '../mapArrToString/mapArrToString.js';

const getData = async () => {
	const response = await axios.get('https://jsonplaceholder.typicode.com/users');
	const data = await response.data
	// return data;
	return mapArrToString(data.map(i => i.id));
	// console.log(data.map(i => i.id));
};

// getData().then(res => console.log(res))

module.exports = getData;