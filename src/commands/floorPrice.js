const axios = require('axios');

module.exports = async (msg) => {
    
    let floor;
    try{
    const response = await axios.get('https://api.opensea.io/api/v1/collection/levx-dao-sharkpunks/stats/')
    floor = response.data.stats ? response.data.stats.floor_price : -1;
    }
    catch(error){
        floor = -1;
        console.log(error.response.data.error)
    }

    await msg.reply(
       floor == -1 ?  `Couldn't determine Sharpunks floor`: `Sharkpunks ve(3, 3) floor price is ${floor} ETH! Nom Nom!`,
      {
        reply: msg,
      }
    );
  };