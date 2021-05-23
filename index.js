const axios = require('axios');
// import { IEXClient } from 'iex-api'
const iexAPI = require('iex-api');
const _fetch = require('isomorphic-fetch');
console.log(iexAPI);

const iex = new iexAPI.IEXClient(_fetch)

const getData = async () => {
    return await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
}

const getStockInfo = () => {
    iex.stockCompany('AAPL')
        .then(company => console.log(company))
        .catch(error => console.log(error))
}

const run = async () => {
    // const data = await getData()
    // console.log(data.data)
    getStockInfo()
    
}

run()
//setInterval(run, 1000)

