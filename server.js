const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const app = express();
const staticRoutes = require('./routes/static');
const path = require('path');
const PORT = process.env.PORT || 3000;
const baseController = require('./controllers/baseController');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(expressLayouts);
app.set('layout', './layouts/layout');

// Routes
app.use(staticRoutes);
app.get("/", baseController.buildLandingPage);
app.use("/p", require('./routes/pRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});