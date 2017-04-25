const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const tweetBank = require('./tweetBank')

var PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`);
});

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache:true}); // point nunjucks to the proper directory for templates
// nunjucks.render('index.html');

app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // console.log(req);
    console.log(req.method + req.url);

    next();
});
app.get('/', function(req, res) {
  // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
  const tweets = tweetBank.find();
  res.render( 'index', {title: 'Tweets', tweets: tweets} );

});


// app.post('/:id', function (req, res) {
//   console.log(req.body); // undefined if body-parser isn't used
//   workshops.push(req.body.title);
//   res.status(201).send(workshops.join('\n')); // 201 means 'created'
// });

// in some file that is in the root directory of our application... how about app.js?
// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// nunjucks.configure('views', {noCache: true});
// nunjucks.render('index.html', locals, function (err, output) {
//    if(err) throw err;
//     console.log(output);
// });