const express = require('express')

const adminData = require('./admin')

const router = express.Router()

router.get('/', (req, res, next) => {
  const product = adminData.product
  res.render('shop', {
    pageTitle: 'My Shop',
    prods: product,
    path: '/',
    hasProduct: product.length > 0,
    activeShop: true,
    productCSS: true,
  })
})

module.exports = router
