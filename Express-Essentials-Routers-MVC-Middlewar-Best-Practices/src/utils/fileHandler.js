const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '../../', 'db.json');

async function readDB() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') {
      // If DB doesn't exist, initialize it.
      const initial = { todos: [] };
      await writeDB(initial);
      return initial;
    }
    throw err;
  }
}

async function writeDB(data) {
  // Write atomically: write JSON.stringify with 2 spaces
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB };