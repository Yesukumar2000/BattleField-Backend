const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

const serverInfo = {
  serverName: "! RC3-BASEMAPS",
  mapName: "CONQUEST LARGE - LANCANG DAM",
  gameMode: "CUSTOM - 6O HZ",
  antiCheatInfo: "Server protected by The_K-50 AntiCheat. Vip !Rules, Questions, Request, Appeal, Visit us: www.epg.gg | Discord ",
  discordLink: "https://discord.gg/3r5NK4d",
  players: "60/64",
  ping: "104ms",
  tickrate: "60 Hz",
  settings: [
    { "label": "REGION", "value": "EUROPE - DE" },
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
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076de23d2b9d4e1fbf67_browser__SI-next-image%20-%2006.png","SIEGE OF SHANGHAI" },
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png","OPERATION LOCKER" },
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d9b48792dbe261e07_browser__SI-next-image%20-%2004.png","DAWNBREAKER"},
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d8123214d0747f2a1_browser__SI-next-image%20-%2005.png", "ROGUE TRANSMISSION" },
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png", "ZAVOD 311"},
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076d00244d9e5298944f_browser__SI-next-image%20-%2003.png", "FLOOD ZONE"},
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076c1ab31e3d009e691e_browser__SI-next-image%20-%2002.png", "HAINAN RESORT"},
  {"image":"https://cdn.prod.website-files.com/6013fff62154adaa4600f932/6039076cab09f17a68176928_browser__SI-next-image%20-%2001.png", "GOLMUD RAILWAY"}
];

// Define your routes
app.get('/', (req, res) => {
  res.send('Battlefield Backend Server is running');
});

app.get('/api/server-info', (req, res) => {
  res.json(serverInfo);
});

app.get('/api/map-rotation', (req, res) => {
  res.json(mapRotation);
});

// Export the express app for use in api/index.js
module.exports = app;
