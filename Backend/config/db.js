const { default: mongoose } = require("mongoose")

const ConnectDB = async () => {

    await mongoose.connect("mongodb://localhost:27017/Ecommerce")
    .then(()=>{console.log("Connected to DB.....")})
    .catch(()=>{console.log("Connection Failed.....")})

}


module.exports = ConnectDB