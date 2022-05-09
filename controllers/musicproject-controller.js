const User = require("../models/User");
const MusicProject = require("../models/MusicProject");


exports.getAll = async (req, res) => {
   
    res.send({ musicproject: await MusicProject.find() });
    const musicProject = await MusicProject.find();
  res.render("musicprojectView/musicprojectList", { musicProject });
  };




  
exports.add = async (req, res) => {
    const { Nom, type, user,style } = req.body;
  
    const newMusicProject= new MusicProject();
    
    newMusicProject.Nom = Nom
    newMusicProject.type = type 
    newMusicProject.style = style
    newMusicProject.user = user
  
    newMusicProject.save();
  
    res.status(201).send({ message: "success", musicproject: newMusicProject });
  };
  
  exports.edit = async (req, res) => {
    const { _id, price, marge, name,  } = req.body;
  
    let musicproject = await MusicProject.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          Nom:Nom,
          style:style,
         type :type ,
       
        },
      }
    );
    res.status(201).send({ message: "success", musicproject: musicproject });
  };
  
  exports.delete = async (req, res) => {
    const musicproject = await MusicProject.findById(req.body._id).remove();
    res.status(201).send({ message: "success", musicproject: musicproject });
  };
  
  exports.deleteAll = async (req, res) => {
    MusicProject.remove({}, function (err, musicproject) {
      if (err) {
        return handleError(res, err);
      }
      return res.status(204).send({ message: "Aucun element" });
    });
  };
  

  //---------------------------------
/*
  exports.getMy = async (req, res) => {
    console.log("1111122222")
    let musicProject
  try { console.log(req.body._id)
    musicProject= await MusicProject.find({   user : req.body._id }) 
    if ( musicProject== null){
      res.json({message:"sans musicProject"})
    }
   

  } catch (error) {
  res.json({message:error.message})

}
res.musicProject = musicProject
// next()
}*/
exports.getMy = async (req, res) => {
  //console.log( req.params.user)
  // get all somethings with color = something_color
  MusicProject.find({ user: req.params.id }).exec((err,  musicProject)=>{
    res.send(musicProject);
  })
};


/*
  exports.getMy = async (req, res) => {
    
    let musicProject
  try { console.log(req.params.id)
    musicProject= await MusicProject.findById({   User : req.params.id }) 
    if ( musicProject== null){
      res.json({message:"sans musicProject"})
    }
   

  } catch (error) {
  res.json({message:error.message})

}
//musicProject.save();
console.log("11111")
res.musicProject = musicProject}*/
//musicProject.populate(function(err, result) { return res.json(result);} )

// next()



 // next()
  

   // res.send({
  
 /* router.get ('/myProds:id',getProdsByUser,async (req,res) => {
    console.log("11")
    res.json({prods:res.prods})
})

async function getProdsByUser  (req,res,next){
    console.log("11-----------")
    let prods
    try {
        prods = await MusicProject.find({ user: req.params.id }).populate('User')
        if (prods == null){
            res.json({message:"sans produits"})
        }
    } catch (error) {
        res.json({message:error.message})

    }
    res.prods = prods
    next()
}*/


/*
exports.getMy = async (req, res) => {
  console.log("11111")
res.send({ musicProject: await MusicProject.find({ User: req.params.id }).populate("user") });
};*/