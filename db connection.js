const mongoose = require ('mongoose')

function connectDb(){
    try{
        mongoose.connect("mongodb://127.0.0.1:27017/CMS")
  }
  catch {
    console.log("db connection error: ",err)
}

    
}

module.exports = {connectDb}