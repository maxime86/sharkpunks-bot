const { Client } = require("discord.js");
const { TOKEN, I_DO_AS_THE_DICTATOR_GUIDES_ROLE_ID } = require("./constants");
const list = require("./i-do-as-the-dictator-guides.json");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.username}!`);
});

client.on("message", async (msg) => {
  switch (msg.content) {
    case "!brainwash-me":
      const userId = msg.author.id;
      if (list.includes(userId)) {
        const role = msg.guild.roles.cache.find(
          (role) => role.id === I_DO_AS_THE_DICTATOR_GUIDES_ROLE_ID
        );
        if (role) {
          await msg.channel.send("> <@" + userId + ">, you are in!");
        } else {
          await msg.channel.send(
            "> <@" + userId + ">, cannot add you to the role now."
          );
        }
      } else {
        await msg.channel.send(
          "> <@" +
            userId +
            ">, you didn't fulfill your duty:\n" +
            "> Follow these twitters:\n" +
            "> @LevXDAOhGeez\n" +
            "> @Sushibtoken\n" +
            "> @MunchkinLFG\n" +
            "> @SharkpunksNFT\n" +
            "> @maid_coin"
        );
      }
      break;
    //our meme command below
  }
});

//make sure this line is the last line
client.login(TOKEN).catch(console.error);
