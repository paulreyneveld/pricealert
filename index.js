require('dotenv').config()
const axios = require('axios');

const getTestData = async () => {
    return await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
}

const getStockData = async () => {
    return await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=${process.env.API_KEY}`)
}
console.log(process.env.TEST)
const run = async () => {
    const testData = await getTestData()
    console.log(testData.data)
    const stockData = await getStockData()
    console.log(stockData.data)
}

run()
//setInterval(run, 1000)

