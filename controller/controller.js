const axios = require('axios');
const bitcoinModel = require('../model/bitcoinModel')

const cryptocoin = async function (req, res) {
    try {

        //USING AXIOS CALL FOR OUTER PUBLIC URL.---------------
        const options = {
            method: 'get',
            url: 'https://api.coincap.io/v2/assets',
            headers: {
                Authorization: "Bearer 186f6a59-f542-467d-9fde-7eb8dac09f48",
            }
        }

        let result = await axios(options)
        
        //STORING THE DATA HERE TO SORT IT IN EASY MANNER.-----
        let newdata = result.data
        let arrData = newdata.data
        let sortData = arrData.sort((a,b)=>b.changePercent24Hr-a.changePercent24Hr)

        //DELETING THE PREVIOUS DATA WHEN LAST HIT THE API.----
        await bitcoinModel.deleteMany()

        //CREATING DATA HERE.----------------------------------
        for(let i=0; i<sortData.length; i++){
            let obj ={}
            obj.symbol = sortData[i].symbol
            obj.name = sortData[i].name
            obj.marketCapUsd = sortData[i].marketCapUsd
            obj.priceUsd = sortData[i].priceUsd
            await bitcoinModel.create(obj)
        }
        return res.status(200).send({ status: true, details: sortData})
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.cryptocoin = cryptocoin