const { db } = require("../firebase");

module.exports = async (msg) => {
  const sharks = await db.collection("sharks").listDocuments();
  const index = Math.floor(Math.random() * sharks.length);
  const id = sharks[index].id;
  await msg.reply(
    `I generated a random shark for you.\nhttps://api.sharkpunks.org/social/${id}`,
    {
      reply: msg,
    }
  );
};
