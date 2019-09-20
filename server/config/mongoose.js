const mongoose = require('mongoose')
const fs = require('fs')

mongoose.connect("mongodb://localhost/product_manager", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const modelsPath = __dirname + '/../models';

fs.readdirSync(modelsPath).forEach( function(file) {
    if(file.indexOf('.js') > -1) {
        require(modelsPath + '/' + file);
    }
})

