const axios = require('axios');

const getData = async () => {
    return await axios.get('https://baconipsum.com/api/?type=meat-and-filler')
}

const run = async () => {
    // const data = await getData()
    // console.log(data.data)
    
}

run()
//setInterval(run, 1000)

