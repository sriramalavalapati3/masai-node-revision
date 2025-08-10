const fs = require('fs').promises;
const path = require('path');

const DB_PATH = path.join(__dirname, '..', 'db.json');

async function readDB() {
  try {
    const raw = await fs.readFile(DB_PATH, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    if (err.code === 'ENOENT') {
      const initial = { tickets: [] };
      await writeDB(initial);
      return initial;
    }
    throw err;
  }
}

async function writeDB(data) {
  // atomic-ish write for small files
  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf8');
}

module.exports = { readDB, writeDB };