var express = require('express');
var app = new express();

// app.use('/',(req, res) => {
//   res.sendFile(__dirname + '/visuals/index.html');
// });

app.get('/api/whoami', (req, res) => {
  res.json(
    {
      "ipaddress": req.ip,
      "language": req.get('Accept-Language'),
      "software": req.get('User-Agent')
    }
  );
});


var listener = app.listen(3000, function () {
  console.log("Node.js listening on port " + listener.address().port);
});