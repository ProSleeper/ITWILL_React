const mongoose = require('mongoose');

const taxiSchema = mongoose.Schema({
  name: { type: String },
  job: {type:String},
}) 

console.log('스키마 정의');

mongoose.model('taxidbs', taxiSchema)
console.log('모델 정의');








