const express = require("express")
const router = express.Router()
const PanierController = require("../controllers/track-controller")
const upload = require('../middlewares/storage');

router.route("/")

   .get(PanierController.getAll)
   
    .post( PanierController.add)
  
    //.put( PanierController.edit)
  
   // .delete(PanierController.delete)
  
//router.delete("/all", PanierController.deleteAll)
//router.get("/get-my/:id",PanierController.getMy)


module.exports = router