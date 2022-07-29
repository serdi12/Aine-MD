let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ •  [0895-1694-7204]
│ •  [0895-1694-7204]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
