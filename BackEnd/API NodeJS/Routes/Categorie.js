const router = require('express').Router();
const multer = require('multer');
const fs = require("fs");
const Controller =  require ("../Controller/Categorie");


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
      const path = `./upload/Categorie`
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
router.post("/AddCategorie",upload.array('img', 1),Controller.AddCategorie);
//TESTED
router.post("/GetCategorie",Controller.GetCategorie);
//TESTED
router.get("/GetAllCategories",Controller.GetAllCategories);
//TESTED
router.post("/ModifierNom",Controller.ModifierNom);
router.post("/ModifierDescription",Controller.ModifierDescription);
router.post("/ModifierPoints",Controller.ModifierPoints);

router.post("/SupprimeCategorie",Controller.SupprimeCategorie);

module.exports = router;