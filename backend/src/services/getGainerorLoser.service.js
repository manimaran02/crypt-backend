const axios = require('axios')

const fetchTopgainerOrTopLoser = async(order)=>{


    const options = {
      method: 'GET',
      url: 'https://api.coingecko.com/api/v3/coins/markets',
      headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-37b1ZmyAYmMkYNoY11CFxhED'},
      params : {
        vs_currency: 'usd',
        order,
        per_page: 1,
        page: 1,
      }
    };
    
        try{
            const {data} = await axios.request(options)
            return data
        }
        catch(err){
            console.error(err)
        }
    
    
    }
    

    module.exports = fetchTopgainerOrTopLoser