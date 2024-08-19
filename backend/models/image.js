const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  img1: { 
    type: Array,
    unique: true,
    require: true
  },
  img2: { 
    type: Array,
  },
  img3: { 
    type: Array,
  },
  img4: { 
    type: Array,
  },
  img5: { 
    type: Array,
  },
  img6: { 
    type: Array,
  },
  img7: { 
    type: Array,

  },
  img8: { 
    type: Array,


  },   
}, {
  timestamps: true 
});

module.exports = mongoose.model('Image', imageSchema);
