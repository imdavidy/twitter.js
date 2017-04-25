const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', {title: 'Twitter', tweets: tweets } );
});

router.get('/stylesheets/style.css', function (req, res) {
  res.sendFile('/Users/Fullstack/Junior/twitter.js/public/stylesheets/style.css');
});

module.exports = router;
