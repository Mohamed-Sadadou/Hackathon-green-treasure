
const Compagnie = require("../Models/Compagnie");



module.exports.AddCompagnie = async (req, res) => {
    console.log('on affiche le req  ', req.body);
    console.log('on affiche le req  ', req.files);

    Links = [];

    await req.files.forEach(function (y) {
        Links.push(y.path);
    })
    const { Nom, Description, Points } = req.body;

    const Comp = new Compagnie({
        Nom,
        Description,
        Catalog: [],
        Image: Links
    });
    Comp.save()
        .then(() => res.status(201).json({ message: 'Compagnie créé !' }))
        .catch(error => res.status(400).json({ error }));

};
module.exports.GetAllCompagnies = async (req, res) => {
    const Comp = await Compagnie.find();
    res.status(200).json(Comp);
};
module.exports.GetCompagnie = (req, res) => {
    Compagnie.find({ Nom: req.body.Nom }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(' on a un souci : ' + err);
    });
};
module.exports.AjoutCategorieCatalog = async (req, res) => {
    const Categ = await Categorie.findOne({ Nom: req.boby.NomCategorie });
    await Compagnie.findOneAndUpdate(
        { Nom: req.body.Nom },
        { $addToSet: { Catalog: Categ._id.ToString() } },
        (err, docs) => {
            if (!err) {
                console.log('pas derreur');
                return res.status(200).json({ message: ' Modification de la compagnie ' });

            } else {
                console.log('erreur de mise a jour : ', err);
                return res.status(202).send({ error: err });
            }
        }
    )
};
module.exports.ModifierNom = async (req, res) => {
    try {
        await Compagnie.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Nom: req.body.NewNom } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(re=>{
            console.log("---- ok ----"); return res.status(200).json({message:"Modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierDescription = async (req, res) => {
    try {
        await Compagnie.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Description: req.body.Description } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(er=>{
            console.log("---- ok ----"); return res.status(200).json({message:"Modification effectuer avec succes"}); 
        }).catch(err=>{
            return res.status(500).send({ message: err }); 
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.SupprimeCompagnie = async (req, res) => {
    try {
        await Compagnie.remove({ Nom: req.body.Nom }).exec();
        res.status(200).json({ message: "Suppression effectuer avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};