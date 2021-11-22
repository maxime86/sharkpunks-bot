const { Client } = require("discord.js");
const { TOKEN } = require("./constants");
const brainwashMe = require("./commands/brainwashMe");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.username}!`);
});

client.on("message", async (msg) => {
  if (msg.content === "!brainwash-me") {
    await brainwashMe();
  } else if (msg.content.toLowerCase().match(/wh?en/)) {
    await msg.reply("idk", {
      files: [
        "https://cdn.discordapp.com/attachments/911405391747883019/911670069124268072/unknown.gif",
      ],
    });
  }
});

//make sure this line is the last line
client.login(TOKEN).catch(console.error);
