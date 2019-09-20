const mongoose = require('mongoose');
const Product = mongoose.model("Product")

module.exports = {
    index: (_, res) => {
        Product.find()
            .then( products => res.json(products) )
            .catch( err => res.json(err) )
    },

    create: (req, res) => {
        const product = new Product(req.body)
        product.save()
        .then( product => res.json(product) )
        .catch( err => {
            const errors = [];

            for (let key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})

        })
    },

    view: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then( product => res.json(product) )
        .catch( err => res.json(err))
    },

    edit: (req, res) => {
        Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        )
        .then( author => res.json(author) )
        .catch( err => {
            const errors = [];

            for (let key in err.errors){
                errors.push(err.errors[key].message)
            }
            res.json({errors})

        })
    },

    delete: (req, res) => {
        Product.findByIdAndDelete( req.params.id )
        .then((result) => {
            res.json(result)
        })
        .catch( err => res.json(err) )
    }
}