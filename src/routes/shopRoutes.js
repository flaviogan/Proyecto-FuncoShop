const express = require('express');

const router = express.Router();

const shopController = require('../controllers/shopController.js');

router.get('/', shopController.shop);
router.get('/item/:id',shopController['/item/:id']);

// router.get('/shop/item/id',(req, res)=> 
// //res.send('Route for contact view')
// {
//     const id = req.params.id;
//     // busco en la BBDD el item con el parm id
//     res.send({item});
// }
// );
router.post('/item/:id/add',shopController['/item/:id/add']);
router.get('/cart',shopController.cart);
router.post('/cart',shopController.cart);


module.exports = router;
