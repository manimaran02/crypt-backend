const fetchTopLoser = require("../services/getGainerorLoser.service")

const topLoser = async(req,res)=>{
    try {
        const data = await fetchTopLoser('price_change_percentage_24h_asc')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).json({
            msg : "Failed to fetch data"
        })
    }
}

module.exports = topLoser