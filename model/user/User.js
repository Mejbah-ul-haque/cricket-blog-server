const mongoose = require('mongoose');


//create schema 

const userSchema = new mongoose.Schema({
  firstName: {
    required: [true, 'First Name is required'],
    type: String,
  },
  lastName: {
    required: [true, 'Last Name is required'],
    type: String,
  },
  profilePhoto: {
    type: String,
    default: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
  }, 
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  bio: {
    type: String,
  },
  password: {
    type: String,
    required: [true, 'Hey friend, Password is required'],
  },
  postCount: {
    type: Number,
    default: 0,
  },
  isBlocked: {
    type: Boolean,
    default: false,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    enum:['Admin', 'Guest', 'Blogger']
  },
  isFollowing: {
    type: Boolean,
    default: false,
  },
  isUnFollowing: {
    type: Boolean,
    default: false,
  },
  isAccountVerified: {
    type: Boolean, 
    default: false,
  },
  accountVerificationToken: String,
  accountVerificationTokenExpires: Date,
  viewedBy: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  
  followers: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  following: {
    type: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
    ],
  },
  
  passwordChangeAt: Date,
  passwordResetToken: String,
  passwordResetExpires: Date,
  
  active: {
    type: Boolean,
    default: false,
  },
},
{
  toJSON: {
    virtuals: true,
  },
  toObject: {
    virtuals: true
  },
  timestamps: true,
});

// Compile schema into model
const User = mongoose.model('User', userSchema);

module.exports = User;