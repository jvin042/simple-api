const express = require('express');

const app = express();
const port = 3000;
const resources = { root: `${__dirname}/resources` };

require('./routes/exemple/route')(app);

app.use(express.static(resources.root));

app.get('/', (req, res) => {
  res.sendFile('/api.html', resources);
});

app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(port);
