const mongoose = require('mongoose')

const goalSchema = mongoose.Schema(
  {
   user:{
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
   },
    text: {
      type: String,
      required: [true, 'Please add a text value'],
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('Goal', goalSchema)
//User model should be attched here to know which user have created a goal from his profile.