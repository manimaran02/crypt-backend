const marketChart = require("../services/getMarket.service");

const getMarket = async (req,res)=>{
    const {id} = req.params;
    const {vs_currency = "usd",days =7} = req.query

    try {
        const data = await marketChart(id,vs_currency,days)
        res.status(200).json(data)
    }
    catch(err){
        res.status(500).json({
            msg : "Failed to get data"
        })
    }
}


module.exports = getMarket