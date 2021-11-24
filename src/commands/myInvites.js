module.exports = async (msg) => {
  let count = 0;
  const invites = await msg.guild.fetchInvites();
  for (const invite of invites.values()) {
    const inviter = invite.inviter;
    if (inviter.id === msg.author.id) {
      count += invite.uses;
    }
  }
  await msg.reply(`You invited ${count} friends.`, {
    reply: msg,
  });
};
