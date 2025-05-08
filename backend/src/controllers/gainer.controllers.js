const fetchGainer = require('../services/getGainerorLoser.service')

const topgainer = async (req,res)=>{
    try {
        const data = await fetchGainer('price_change_percentage_24h_desc')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            error : error
        })
    }
   
}

module.exports = topgainer