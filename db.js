const mongoose = require('mongoose');

const main = async() =>{
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/7anouta');
        console.log('rah tconnecta a 7med');
    }
    catch(e){
        console.log(e.message)
    }
}
main();