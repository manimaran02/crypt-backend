// const axios = require('axios')

// const marketChart = async (id,vs_currency,days) => {
//   const options = {
//     method: 'GET',
//    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
//     headers: {
//       accept: 'application/json',
//       'x-cg-demo-api-key': 'CG-37b1ZmyAYmMkYNoY11CFxhED'
//     },
//     params: {
//         vs_currency,
//         days
//       },
//   };

//   try {
//     const {data} = await axios.request(options);
//     console.log(data)
//     return data
//   } catch (err) {
//     console.error(err);
//   }
// };



// module.exports = marketChart

const axios = require('axios');

const marketChart = async (id, vs_currency, days) => {
  const options = {
    method: 'GET',
    url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart`,
    headers: {
      accept: 'application/json',
      'x-cg-demo-api-key': 'CG-37b1ZmyAYmMkYNoY11CFxhED'
    },
    params: {
      vs_currency,
      days
    },
  };

  try {
    const { data } = await axios.request(options);
    return data;
  } catch (err) {
    console.error('Error fetching market chart:', err.response?.data || err.message);
    return null;
  }
};

module.exports = marketChart;
