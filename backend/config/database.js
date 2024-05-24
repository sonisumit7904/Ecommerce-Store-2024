const mongoose = require('mongoose');


const connectDatabase = ()=>{    
    
    mongoose.connect(process.env.DB_URI || process.env.DB_LOCAL).then((data)=>{
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    // .catch((err)=>{
    //     console.log(err);
    // });
    // ===============WORK OF CATCH IS BEING DONE BY UNHANDLED REJECTIONS PROMISE IN SERVER.JS 

}

module.exports = connectDatabase;