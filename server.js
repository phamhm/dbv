const express = require( 'express');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const bodyParser = require( 'body-parser');

const DbvSchema = new Schema({
  _id: String,
  comments: [String]
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

mongoose.connect('mongodb://localhost/dbv');

router.get('/', (req, res) => {
  res.json({message:"Hello there, go fuck yourself"});
});

router.route('/comments/:id')
  .get((req, res) => {

    Dbv.findById(req.params.id, (err, dbv) => {
      if (err) res.send(err);
      res.json(dbv.comments);
    });
  })
  .post()
  .put()
  .delete();

//Use our router configuration when we call /api
app.use('/dbvapi', router);

app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
