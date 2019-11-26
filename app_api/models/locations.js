const mongoose = require('mongoose');

const landmarkOpeningTimesSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true
  }
});
const landmarkReviewSchema = new mongoose.Schema({
  author: {type: String, required: true},
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5
  },
  reviewText: {type: String, required: true},
  createdOn: {
    type: Date,
    'default': Date.now
  }
});
    
const landmarkLocationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  address: String,
  rating: {
    type: Number,
    'default': 0,
    min: 0,
    max: 5
  },
  
  coords: {
    type: [Number],
    index: '2dsphere'
  },
  openingTimes: [landmarkOpeningTimesSchema],
  reviews: [landmarkReviewSchema]
});

mongoose.model('Location', landmarkLocationSchema);

//require('./locations');