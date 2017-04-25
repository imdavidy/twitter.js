const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')

var PORT = 3000;
app.listen(PORT, function(){
  console.log(`Server listening on port ${PORT}`);
});

app.set('view engine', 'html');

app.engine('html', nunjucks.render);

nunjucks.configure('views', {noCache:true});

app.use(function (req, res, next){
    console.log(req.method + req.url);
    next();
});

app.get('/', function(req, res){
  const tweets = tweetBank.find();
  res.render('index', {title: 'Tweets', tweets: tweets});
});
