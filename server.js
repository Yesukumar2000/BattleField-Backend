const express = require('express');
const cors = require('cors'); 

const app = express();
const port = 3001; 

// Enable CORS for all origins, allowing the React app to fetch data
app.use(cors());

// Mock data for server information
const serverInfo = {
  serverName: "! RC3-BASEMAPS",
  mapName: "CONQUEST LARGE LANCANG DAM",
  gameMode: "CUSTOM GO HZ",
  antiCheatInfo: "Server protected by The K-50 AntiCheat. Vi les, Questions, Request, Appeal, Visit us: www.eps.gg",
  discordLink: "https://discord.gg/",
  players: "60/64",
  ping: "104ms",
  tickrate: "60 Hz",
  settings: [
    { "label": "REGION", "value": "EUROPE DE" },
    { "label": "PUNKBUSTER", "value": "ON" },
    { "label": "FAIRFIGHT", "value": "ON" },
    { "label": "PASSWORD", "value": "OFF" },
    { "label": "PRESET", "value": "NORMAL" }
  ],
  advanced: [
    { "label": "MINIMAP", "value": "ON" },
    { "label": "ONLY SQUAD LEADER SPAWN", "value": "OFF" },
    { "label": "VEHICLES", "value": "ON" },
    { "label": "TEAM BALANCE", "value": "ON" },
    { "label": "MINIMAP SPOTTING", "value": "ON" },
    { "label": "HUD", "value": "ON" },
    { "label": "3P VEHICLE CAM", "value": "ON" },
    { "label": "REGENERATIVE HEALTH", "value": "ON" },
    { "label": "KILL CAM", "value": "ON" },
    { "label": "FRIENDLY FIRE", "value": "OFF" },
    { "label": "3D SPOTTING", "value": "ON" },
    { "label": "ENEMY NAME TABS", "value": "ON" }
  ],
  rules: [
    { "label": "TICKETS", "value": "400" },
    { "label": "VEHICLE SPAWN DELAY", "value": "25" },
    { "label": "BULLET DAMAGE", "value": "100" },
    { "label": "KICK AFTER TEAM KILLS", "value": "5" },
    { "label": "PLAYER HEALTH", "value": "100" },
    { "label": "PLAYER RESPAWN TIME", "value": "100" },
    { "label": "KICK AFTER IDLE", "value": "300" },
    { "label": "BAN AFTER KICKS", "value": "3" }
  ]
};

// Mock data for map rotation
const mapRotation = [
  "SIEGE OF SHANGHAI",
  "OPERATION LOCKER",
  "DAWNBREAKER",
  "ROGUE TRANSMISSION",
  "ZAVOD 311",
  "FLOOD ZONE",
  "HAINAN RESORT",
  "GOLMUD RAILWAY"
];
app.get("/", (req, res) => {
  console.log('Serving root endpoint');
  res.send('Battlefield Backend Server is running');
});

// API endpoint for server information
app.get('/api/server-info', (req, res) => {
  console.log('Serving /api/server-info');
  res.json(serverInfo);
});

// API endpoint for map rotation
app.get('/api/map-rotation', (req, res) => {
  console.log('Serving /api/map-rotation');
  res.json(mapRotation);
});

// Start the server
app.listen(port, () => {
  console.log(`Battlefield 4 Backend Server listening at http://localhost:${port}`);
});
