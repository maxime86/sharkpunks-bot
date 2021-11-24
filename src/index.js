const { Client } = require("discord.js");
const { DISCORD_TOKEN } = require("./constants");
const myInvites = require("./commands/myInvites");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.username}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "!my-invites") {
    await myInvites(msg);
  }
});

//make sure this line is the last line
client.login(DISCORD_TOKEN).catch(console.error);
