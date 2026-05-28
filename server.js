import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PORT = process.env.PORT || 8080;
const DIST_DIR = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  let filePath = path.join(DIST_DIR, req.url === '/' ? 'index.html' : req.url);

  // Security: Ensure requested file is within dist directory
  if (!filePath.startsWith(DIST_DIR)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  fs.stat(filePath, (err, stats) => {
    if (!err && stats.isFile()) {
      // Serve the requested file
      const contentType = getContentType(filePath);
      res.setHeader('Content-Type', contentType);
      fs.createReadStream(filePath).pipe(res);
    } else {
      // For SPA routing, serve index.html
      res.writeHead(200, { 'Content-Type': 'text/html' });
      fs.createReadStream(path.join(DIST_DIR, 'index.html')).pipe(res);
    }
  });
});

function getContentType(filePath) {
  const ext = path.extname(filePath);
  const types = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'application/javascript',
    '.json': 'application/json',
    '.svg': 'image/svg+xml',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.woff': 'font/woff',
    '.woff2': 'font/woff2',
  };
  return types[ext] || 'application/octet-stream';
}

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
