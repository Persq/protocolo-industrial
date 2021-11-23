
'use strict';
const {dataBuffer} = require('../data/memory'); 

const read = async(start, length)=>{
    await new Promise(resolve => setTimeout(resolve, 1200));
    const payload = [];  

    for (let i = start; i < start + length; i++) {
        const data = dataBuffer.data[i];
        payload.push(data);
    }

    const myCallback = (payload) =>{ 
        return payload;
    };
    return {payload, myCallback};
}


module.exports = {
    read
}



















// const cb2Data = require('../data/cb2');
// const cb3Data = require('../data/cb3');
// const cb4Data = require('../data/cb4');
// const cb5Data = require('../data/cb5');

// const cb1 = async(start, length)=>{
//     await new Promise(resolve => setTimeout(resolve, 1200));
//     const list = [];
//     for (let i = start; i < start + length; i++) {
//         const data = cb1Data.data[i];
//         list.push(data);
//     }
//     return list;
// }

// const cb2 = async(start, length)=>{
//     await new Promise(resolve => setTimeout(resolve, 800)); 
//     const list = [];
//     for (let i = start; i < start + length; i++) {
//         const data = cb2Data.data[i];
//         list.push(data);
//     }
//     return list;
// }

// const cb3 = async(start, length)=>{
//     await new Promise(resolve => setTimeout(resolve, 1100)); 
//     const list = [];
//     for (let i = start; i < start + length; i++) {
//         const data = cb3Data.data[i];
//         list.push(data);
//     }
//     return list;
// }

// const cb4 = async(start, length)=>{
//     await new Promise(resolve => setTimeout(resolve, 600)); 
//     const list = [];
//     for (let i = start; i < start + length; i++) {
//         const data = cb4Data.data[i];
//         list.push(data);
//     }
//     return list;
// }

// const cb5 = async(start, length)=>{
//     await new Promise(resolve => setTimeout(resolve, 700)); 
//     const list = [];
//     for (let i = start; i < start + length; i++) {
//         const data = cb5Data.data[i];
//         list.push(data);
//     }
//     return list;
// }

// module.exports = {
//     cb1,
//     cb2,
//     cb3,
//     cb4,
//     cb5,
// }