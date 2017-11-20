const express = require( 'express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bodyParser = require( 'body-parser');
mongoose.connect('localhost/dbv');

const CommentSchema = new Schema({
  submit_date: {type: Date, default: Date.now},
  comment: String
});

const DbvSchema = new Schema({
  _id: String,
  comments: [CommentSchema]
});

const Dbv = mongoose.model('dbv', DbvSchema);

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const router = express.Router();
const port = process.env.API_PORT || 3001;

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods',
                'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  //and remove cacheing so we get the most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

router.get('/', (req, res) => {
  res.json({message:"Hello there, go fuck yourself"});
});

router.route('/comments/:id')
  .get((req, res) => {

    Dbv.findById(req.params.id, (err, comments) => {
      if (err) res.send(err);
      res.json(comments);
    });
  })
  .post((req, res) => {
    // this seems dupious
    const pushComment = {$push: {"comments": {comment:req.body.comment}}};
    Dbv.findByIdAndUpdate(req.params.id,
                          pushComment,
                          {upsert: true, new: true},
                          (err, comments) => {
                            if(err) res.send(err);
                            res.json({...comments});
                          }
                         );
  });

router.route('/comments/:id/:commentId')
  .delete((req, res) => {
    const pullComment = {$pull: {"comments": {_id:req.params.commentId}}};
    Dbv.findByIdAndUpdate(req.params.id,
                          pullComment,
                          {new: true},
                          (err, comments) => {
                            if (err) res.send(err);
                            res.json({...comments});
                          });
  })
  .put((req, res) => {
    const newComment = req.body.comment;

    const ids = {"_id": req.params.id,
                 "comments._id":req.params.commentId};

    const setComment = {$set:{"comments.$.comment":newComment}};
    Dbv.findOneAndUpdate(ids, setComment, {new:true},
                         (err, comments) => {
                           if (err) res.send(err);
                           res.json({...comments});});

  });

//Use our router configuration when we call /api
app.use('/dbvapi', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
