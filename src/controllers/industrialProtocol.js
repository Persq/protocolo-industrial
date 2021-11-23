
const redis = require("redis");
const { promisify } = require("util");
const {read} = require('../data-helpers/industrialProtocol');

// Connecting to redis
const client = redis.createClient({
    host: "127.0.0.1",
    port: 6379,
  });

// Promisifying Get and set methods
const GET_ASYNC = promisify(client.get).bind(client);
const SET_ASYNC = promisify(client.set).bind(client);  

const industrialProtocolPost = async(req, res = response) => {

    try {
        const { tuplas } = req.body; 

        const result = {};
        for (let i = 0; i < tuplas.length; i++) {
            const {start, length, callback: nameCB} = tuplas[i];
            const currentTP = `tp_${start}_${length}`; // Current tuplas
            const reply = await GET_ASYNC(currentTP); // Get Result Stored from Redis

            // if exists use from redis and continue
            if (reply) { 
                const {result : resultStored} =  JSON.parse(reply); 
                result[nameCB] = resultStored;
                continue;
            } 
 
            const {payload, myCallback } = await read(start,length); // Read Buffers
            const resultItem = myCallback(payload); // Call Callback and Get result

            // Saving the results in Redis. The "EX" and 60, sets an expiration of 60 Seconds
            const saveResult = await SET_ASYNC(
                currentTP,
                JSON.stringify( { result: resultItem }),
                "EX",
                60
            ); 
            
            result[nameCB] = resultItem; // Add Result to Final JSon
        }
 
        res.send(result);
    } catch (error) {
        res.send(error.message);
    } 
} 

module.exports = {
    industrialProtocolPost,
}