const mongoose = require('mongoose');
const MusicProject = require('./Track');


const PanierSchema = new mongoose.Schema(
    {
        music: [{ 
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Music'
        }],
    },
    {
      timestamps: { currentTime: () => Date.now() },
    }
  );
  module.exports = mongoose.model("Panier", PanierSchema);

module.exports = mongoose.model('MusicProject',MusicProjeSctchema)