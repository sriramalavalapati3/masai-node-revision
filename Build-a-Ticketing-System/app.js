const express = require('express');
const ticketRoutes = require('./routes/ticketRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/tickets', ticketRoutes);

// 404 handler for undefined routes
app.use(notFound);

// global error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Ticketing app listening on http://localhost:${PORT}`);
});

module.exports = app;