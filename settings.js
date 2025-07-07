const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "nIJnRaDb#_U0SpUcoYqTls-keFioB0YbFMdFjmkrY08REVwZU9eE", // Add your session id
PREFIX: process.env.PREFIX || ".",
MODE: process.env.MODE || "public",  //public | private | inbox | group
OWNER_NUMBER: process.env.OWNER_NUMBER || "94779062397",
DEV: process.env.DEV || "94779062397",
LANG: process.env.LANG || "EN", // EN | SI
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "*_`ᴀᴜᴛᴏ ꜱᴛᴀᴛᴜꜱ ᴊᴜꜱᴛ ɴᴏᴡ ꜱᴇᴇɴ ʙʏ ʟᴀʀᴀ ᴍᴅ`_* 💃🏻",
AUTO_BIO: process.env.AUTO_BIO || "true",
AUTO_VOICE: process.env.AUTO_VOICE || "true",
AUTO_STICKER: process.env.AUTO_STICKER || "true",
AUTO_REPLY: process.env.AUTO_REPLY || "true",    
AUTO_REACT: process.env.AUTO_REACT || "false",
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,☺️,😂,🌟,💗,🥰,❤️,🎁,💛,💚,💙,🪄,😘,😉,💱,📥,✉️,❤️‍🔥",
FAKE_RECORDING: process.env.FAKE_RECORDING || "true",
AUTO_TYPING: process.env.AUTO_TYPING || "true",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",   
ANTI_BOT: process.env.ANTI_BOT || "false",
READ_MESSAGE: process.env.READ_MESSAGE || "true",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
ANTI_VV: process.env.ANTI_VV || "true",
ANTI_DELETE: process.env.ANTI_DELETE || "true",
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "same",  // inbox | same
WELCOME: process.env.WELCOME || "true",
GOODBYE: process.env.GOODBYE || "true",
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "true",
INBOX_BLOCK: process.env.INBOX_BLOCK || "false",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
