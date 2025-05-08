const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://api.coingecko.com/api/v3/exchanges',
  headers: {accept: 'application/json'}
};

axios
  .request(options)
  .then(res => res.data)
  .catch(err => console.error(err));

  console.log(options)