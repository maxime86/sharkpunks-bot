const { Client } = require("discord.js");
const { DISCORD_TOKEN } = require("./constants");
const randomShark = require("./commands/randomShark");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.username}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "!random-shark") {
    await randomShark(msg);
  } else if (msg.content === "!rank") {
    await msg.reply(`🔥🔥🔥`, {
      reply: msg,
    });
  }
});

//make sure this line is the last line
client.login(DISCORD_TOKEN).catch(console.error);
