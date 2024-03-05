import express from 'express';
import http from 'http';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import {Server} from 'socket.io';


const app = express();
const server = http.createServer(app);
const io = new Server(server);

const __dirname = dirname(fileURLToPath(import.meta.url));
app.get('/', (req, res) => res.sendFile(join(__dirname, 'index.html')));

const PORT = 3000;
server.listen (PORT, () => console.log(`Server is running on port ${PORT}`));