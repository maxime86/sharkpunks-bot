const { Client } = require("discord.js");
const { TOKEN, I_DO_AS_THE_DICTATOR_GUIDES_ROLE_ID } = require("./constants");
const list = require("./i-do-as-the-dictator-guides.json");

const client = new Client();

client.on("ready", () => {
  console.log(`Logged in as ${client?.user?.username}!`);
});

client.on("message", async (msg) => {
  const userId = msg.author.id;
  if (userId !== "899108620359331880") {
    if (msg.content === "!brainwash-me") {
      if (list.includes(userId)) {
        const role = msg.guild.roles.cache.find(
          (role) => role.id === I_DO_AS_THE_DICTATOR_GUIDES_ROLE_ID
        );
        if (role) {
          await msg.member.roles.add(role);
          await msg.channel.send(
            "> <@" +
              userId +
              ">, you are now a <@&" +
              I_DO_AS_THE_DICTATOR_GUIDES_ROLE_ID +
              ">!"
          );
        } else {
          await msg.channel.send(
            "> <@" + userId + ">, cannot add you to the role now."
          );
        }
      } else {
        await msg.channel.send(
          "> <@" +
            userId +
            ">, you should've followed these twitters:\n" +
            "> @LevXDAOhGeez\n" +
            "> @Sushibtoken\n" +
            "> @MunchkinLFG\n" +
            "> @SharkpunksNFT\n" +
            "> @maid_coin"
        );
      }
    } else {
      await msg.delete();
      await msg.channel.send(
        "> **<@" +
          userId +
          ">, The only thing you can say here is `!brainwash-me`."
      );
    }
  }
});

//make sure this line is the last line
client.login(TOKEN).catch(console.error);
