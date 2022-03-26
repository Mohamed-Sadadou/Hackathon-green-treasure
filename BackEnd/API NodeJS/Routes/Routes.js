const router = require('express').Router();
const multer = require('multer');
const fs = require("fs");
const Categorie =  require ("../Routes/Categorie");
const Products =  require ("../Routes/Products");
const Utilisateur =  require ("../Routes/Utilisateur");
const Rewards =  require ("../Routes/Rewards");
const Compagnie =  require ("../Routes/Compagnie");


router.use('/Categorie',Categorie);
router.use('/Products',Products);
router.use('/Utilisateur',Utilisateur);
router.use('/Rewards',Rewards);
router.use('/Compagnie',Compagnie);

module.exports = router;