const User = require("../models/User");
const MusicProject = require("../models/MusicProject");
const Track = require("../models/Track");




exports.getAll = async (req, res) => {
  const track = await Track.find();
  res.render("trackView/trackList", { track });
   
    res.send({ track: await Track.find() });
  };




exports.add = async (req, res) => {
  console.log('111')
    const { Nom,musicProject,tempo,measure,key,instrument , user} = req.body;
  
    const newTrack= new Track();
    
    newTrack.Nom = Nom
    newTrack.instrument = instrument 
    newTrack.key=key
    newTrack.measure=measure
    newTrack.tempo=tempo
    newTrack.musicProject=musicProject
    newTrack.user = user
  
    newTrack.save();
  
    res.status(201).send({ message: "success", track: newTrack });
  };

  exports.delete = async (req, res) => {
    const track = await Track.findById(req.body._id).remove();
    res.status(201).send({ message: "success", track: track });
  };