const router = require('express').Router();
const multer = require('multer');
const fs = require("fs");
const Controller =  require ("../Controller/Utilisateur");


//*********************************************************/
function createdate() {
    var date = Date.now();
    var d = new Date(date), month = '' + (d.getMonth() + 1), day = '' + d.getDate(), year = d.getFullYear();
  
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('');
    };
  const storage = multer.diskStorage({
    destination:function(req,file,cb){
      const path = `./upload/Utilisateur`
      fs.mkdirSync(path, { recursive: true })
      cb(null, path)
        
    },
    filename:function(req,file,cb){
         cb(null,[createdate(), file.originalname].join(''));
    }
  });
  const fileFilter = (req, file, cb )=>{
  
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/png'){
      cb(null,true);
    }else{
      cb(new Error('Format non supporter'),false);
    }
  
  
  };
  const upload = multer({
    storage : storage,
    limits:{
      fileSize: 1024*1024*8
    },
    fileFilter:fileFilter
  });
//*********************************************************/
//----------------------------------------------------------------
//TESTED
router.post("/AddUtilisateur",upload.array('img', 1),Controller.AddUtilisateur);

//------------- pour se connecter -----------------------------------------------------
//TESTED
router.post("/Connection",Controller.SeConnecter);
//------------- pour se deconnecter ---------------------------------------------------
//router.get("/Deconnection",Controller.Deconnection);

//TESTED
router.post("/GetUtilisateur",Controller.GetUtilisateur);
//TESTED
router.get("/GetAllUsers",Controller.GetAllUsers);
//TESTED
router.post("/ModifierNom",Controller.ModifierNom);
router.post("/ModifierMdp",Controller.ModifierMdp);
router.post("/ModifierPoints",Controller.ModifierPoints);

router.post("/AddHistory",Controller.AddToHistory);
//TESTED
router.post("/SupprimeUser",Controller.SupprimeUser);

module.exports = router;