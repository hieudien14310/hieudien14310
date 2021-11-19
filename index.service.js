const axios = require('axios')
const moment = require('moment')

const getQuote = async () => {
	try {
		const { data } = await axios.get('https://quotes.rest/qod?language=en&quot')
		const quote = data.contents.quotes[0].quote
		const author = data.contents.quotes[0].author
		return { quote, author }
	} catch (err) {
		console.error(err.message)
		return {}
	}
}

/**
 * https://openweathermap.org/current
 *
 */
const getGlobalWeather = async () => {
	const CITY_NAME = 'Thanh pho Ho Chi Minh'
	const API_KEY = '773f3a015e2bf552e223d8fe4e9aaf37'
	const atNow = moment().format('MM/DD/YYYY')
	const information = await axios.default
		.get(`https://api.openweathermap.org/data/2.5/weather`, {
			params: {
				q: CITY_NAME,
				appid: API_KEY,
				lang: 'vn',
				units: 'metric',
			},
		})
		.then((res) => res.data)
	return { information, atNow }
}
module.exports.IndexService = {
	getGlobalWeather,
	getQuote,
}
