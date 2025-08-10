const express = require('express');
const todoRoutes = require('./routers/todoRoutes');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

app.use('/todos', todoRoutes);

// handle undefined routes
app.use(notFound);

// error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Todo app listening on http://localhost:${PORT}`);
});

module.exports = app;