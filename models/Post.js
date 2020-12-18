const mongoose = require('mongoose');

const {ObjectId} = mongoose.Schema.Types

const PostSchema = new mongoose.Schema({

    text: {
        type: String,
        required: 'Text is required'
      },
      photo: {
        data: Buffer,
        contentType: String
      },
      likes: [{type: ObjectId, ref: 'User'}],
      likeCount: {
          type: Number
      },
      comments: [{
        text: String,
        created: { type: Date, default: Date.now },
        postedBy: { type: ObjectId, ref: 'User'}
      }],
      commentCount : {
        type: Number
      },
      postedBy: {type: ObjectId, ref: 'User'},
      created: {
        type: Date,
        default: Date.now
      }
    });
    


PostSchema.methods.toJSON = function () {
    const post = this.toObject();
    delete post.__v;
    return post;
};

const PostModel = mongoose.model("Post", PostSchema);
module.exports = PostModel;