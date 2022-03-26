
const Products = require("../Models/Products");
const Categorie = require("../Models/Categorie")


module.exports.AddProducts = async (req, res) => {
    console.log('on affiche le req  ', req.body);
    console.log('on affiche le req  ', req.files);

    Links = [];
    var hiss = [];
    await req.files.forEach(function (y) {
        Links.push(y.path);
    })
    const { Nom, Description, NomCategorie } = req.body;

    const Categ = await Categorie.findOne({ nom: NomCategorie }).exec();
    console.log("rana hana, ",Categ)
    let id = Categ._id;
        const prod = new Products({
            Nom,
            Description,
            Categorie:id,
            Image: Links
        });
        prod.save()
            .then(() => res.status(201).json({ message: 'Product créé !' }))
            .catch(error => res.status(400).json({ error }));

    

    

};
module.exports.GetAllProducts = async (req, res) => {
    const Prod = await Products.find();
    res.status(200).json(Prod);
};
module.exports.GetProducts = (req, res) => {
    Products.find({ Nom: req.body.Nom }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(' on a un souci : ' + err);
    }).populate('Categorie');
};
module.exports.ModifierNom = async (req, res) => {
    try {
        await Products.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Nom: req.body.NewNom } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"moification effectuer avec succes"}); 
        }).catch(err=>{
            return res.status(500).send({ message: err });
        })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierDescription = async (req, res) => {
    try {
        await Products.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Description: req.body.Description } },
            { new: true, upsert: true, setDefaultsOnInsert: true },
            (err, docs) => {
                if (!err) { }
                else { }
            }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"}); 
        }).catch(err=>{
            return res.status(500).send({ message: err }); 
        })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierCategorie = async (req, res) => {
    const Categ = await Categorie.findOne({ Nom: req.body.NomCategorie })
    try {
        await Products.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Categorie: Categ._id } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json(docs);
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.SupprimeProduct = async (req, res) => {
    try {
        await Products.remove({ Nom: req.body.Nom }).exec();
        res.status(200).json({ message: "Suppression effectuer avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};