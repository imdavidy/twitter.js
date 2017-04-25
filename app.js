const express = require('express');
const app = express();
app.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // console.log(req);
    console.log(req.method + req.url);

    next();
});
app.get('//', function(req, res) {
  res.send('' +  req.url);
});

var PORT = 3000;
app.listen(PORT, function() {
  console.log(`Server listening on port ${PORT}`)
})
app.post('/:id', function (req, res) {
  console.log(req.body); // undefined if body-parser isn't used
  workshops.push(req.body.title);
  res.status(201).send(workshops.join('\n')); // 201 means 'created'
});