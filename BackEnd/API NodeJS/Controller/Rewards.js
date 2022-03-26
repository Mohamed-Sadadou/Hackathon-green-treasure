
const Rewards = require("../Models/Rewards");



module.exports.AddRewards = async (req, res) => {
    console.log('on affiche le req  ', req.body);
    console.log('on affiche le req  ', req.files);

    Links = [];
    await req.files.forEach(function (y) {
        Links.push(y.path);
    });

    const { Nom, Points,Description } = req.body;

    const re = new Rewards({
        Nom,
        Points,
        Description,
        Image:Links
    });
    re.save()
        .then(() => res.status(201).json({ message: 'reward créé !' }))
        .catch(error => res.status(400).json({ error }));
    
};
module.exports.GetAllRewards = async (req, res) => {
    const re = await Rewards.find();
    res.status(200).json(re);
};
module.exports.GetRewards = (req, res) => {
    Rewards.find({Nom:req.body.Nom}, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(' on a un souci : ' + err);
    });
};
module.exports.ModifierNom = async (req, res) => {
    try {
        await Rewards.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Nom: req.body.NewNom } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(re=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierPoints = async (req, res) => {
    try {
        await Rewards.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Points: req.body.Points } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(re=>{
            console.log("---- ok ----"); return res.status(200).json({message:"modification effectuer avec succes"});
        }).catch(err=>{
            return res.status(500).send({ message: err });
        });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.SupprimeReward = async (req, res) => {
    try {
        await Rewards.remove({ Nom: req.body.Nom }).exec();
        res.status(200).json({ message: "Suppression effectuer avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};