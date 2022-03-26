
const Categorie = require("../Models/Categorie");
const Utilisateur = require("../Models/Utilisateur");

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

const CODE = 'Token_secret_IWD';;
const maxAge = 24 * 60 * 60 * 100;
const createToken = (id) => {
    
    return jwt.sign({ userId: id }, CODE, { expiresIn: maxAge })

};


module.exports.AddUtilisateur = async (req, res) => {
    console.log('on affiche le req  ', req.body);
    console.log('on affiche le req  ', req.files);

    Links = [];

    await req.files.forEach(function (y) {
        Links.push(y.path);
    })
    const { Nom, mdp } = req.body;

    bcrypt.hash(mdp, 10)
        .then(hash => {
            const Use = new Utilisateur({
                Nom,
                mdp: hash,
                Image: Links,
                Points: 0,
                History: [],
            });
            Use.save()
                .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));


};
module.exports.SeConnecter = async function SeConnecter(req, res) {
console.log("req : ",req.body);
    await Utilisateur.findOne({Nom: req.body.Nom}).then(user => {
        console.log("ha, ",user.mdp);
            if (!user) {
                return res.status(201).json({ error: 'Utilisateur non trouvé !' });
            }
            console.log("ho")
            bcrypt.compare(req.body.mdp, user.mdp)
                .then(valid => {
                    console.log("compare ",valid);
                    console.log("id ",user._id.toString());
                    if (!valid) {
                        return res.status(202).json({ error: 'Mot de passe incorrect !' });
                    }
                    const token = createToken(user._id.toString());
                    console.log('CONNECTER');

                    res.status(200).json({ user: user._id, Nom: req.body.Nom,Points: user.Points, Token:token });

                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};
module.exports.GetAllUsers = async (req, res) => {
    const Use = await Utilisateur.find();
    res.status(200).json(Use);
};
module.exports.GetUtilisateur = (req, res) => {
    Utilisateur.find({ Nom: req.body.Nom }, (err, docs) => {
        if (!err) res.send(docs);
        else console.log(' on a un souci : ' + err);
    });
};
module.exports.ModifierNom = async (req, res) => {
    try {
        await Utilisateur.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Nom: req.body.NewNom } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(use => { console.log("---- ok ----"); return res.status(200).json({ message: "modifier avec succes" }); })
            .catch(err => { return res.status(500).send({ message: err }); });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierMdp = async (req, res) => {

    console.log('on fait le try de modifie password');
    const salt = await bcrypt.genSalt();
    req.body.mdp = await bcrypt.hash(req.body.mdp, salt);

    try {
        await Utilisateur.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { mdp: req.body.mdp } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then((docs) => { console.log("---- ok ----"); return res.status(200); })
            .catch((err) => { return res.status(500).send({ message: err }); })
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.ModifierPoints = async (req, res) => {
    try {
        await Utilisateur.findOneAndUpdate(
            { Nom: req.body.Nom },
            { $set: { Points: req.body.Points } },
            { new: true, upsert: true, setDefaultsOnInsert: true }
        ).then(use => {
            console.log("---- ok ----"); return res.status(200).json(docs);
        })
            .catch(err => {
                return res.status(500).send({ message: err });
            });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};
module.exports.AddToHistory = async (req,res)=>{
    let histo = {
        Categorie : req.body.Categorie,
        Quantite : req.body.Quantite,
    };
    await Utilisateur.findOneAndUpdate(
        { Nom: req.body.Nom },
        { $addToSet: { History: histo } },
        (err, docs) => {
            if (!err) {
                console.log('pas derreur');
                return res.status(200).json({ message: ' Modification du user effectuer avec succes' });

            } else {
                console.log('erreur de mise a jour : ', err);
                return res.status(202).send({ error: err });
            }
        }
    )
}
module.exports.SupprimeUser = async (req, res) => {
    try {
        await Utilisateur.remove({ Nom: req.body.Nom }).exec();
        res.status(200).json({ message: "Suppression effectuer avec succes. " });
    } catch (err) {
        return res.status(500).json({ message: err });
    }
};