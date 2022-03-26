
const Categorie = require("../Models/Categorie");



module.exports.AddCategorie = async (req, res) => {
    console.log('on affiche le req  ', req.body);
    console.log('on affiche le req  ', req.files);

    Links = [];
    var hiss = [];
    await req.files.forEach(function (y) {
        Links.push(y.path);
    })
    const { Nom, Description, Points } = req.body;

    const Cat = new Categorie({
        Nom,
        Description,
        Points,
        Image:Links
    });
    Cat.save()
        .then(() => res.status(201).json({ message: 'Categorie créé !' }))
        .catch(error => res.status(400).json({ error }));
    
};
module.exports.GetAllCategories = async (req, res) => {
    const Cat = await Categorie.find();
    res.status(200).json(Cat);
};
module.exports.GetCategorie = (req, res) => {
    Categorie.find({Nom:req.body.Nom}, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(' on a un souci : ' + err);
    });
};
module.exports.ModifierNom = async (req, res) => {
    try {
        await Categorie.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Nom: req.body.NewNom } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierDescription = async (req, res) => {
    try {
        await Categorie.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Description: req.body.Description } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierPoints = async (req, res) => {
    try {
        await Categorie.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Points: req.body.Points } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.SupprimeCategorie = async (req, res) => {
    try {
        await Categorie.remove({ Nom: req.body.Nom }).exec();
        res.status(200).json({ message: "Suppression effectuer avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};